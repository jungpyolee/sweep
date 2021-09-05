import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import { read } from "../api/authApi";
import { currentUserAtom, isAuthAtom } from "../atoms";
import { useState } from "react";

export default function useAutoLoginHooks() {
  const [loading, setLoading] = useState(true);

  const [currentUser, setCurrentUser] = useRecoilState(currentUserAtom);
  const [isAuth, setIsAuth] = useRecoilState(isAuthAtom);

  const { isIdle, isLoading, data } = useQuery("read", read, {
    // enabled: !!localStorage.getItem("accesstoken"),
    onSuccess: (data) => {
      if (data.status === 200) {
        setIsAuth(true);
        setLoading(false);
        setCurrentUser(data.data);
      }
    },
  });

  return { currentUser, loading };
}
