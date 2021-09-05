import { useMutation, useQuery } from "react-query";
import { useRecoilState } from "recoil";
import { signIn } from "../api/authApi";
import { currentUserAtom, isAuthAtom, uidAtom } from "../atoms";
import { useEffect, useState } from "react";

export default function useSignInHooks() {
  const [uid, setUid] = useRecoilState(uidAtom);
  const [isAuth, setIsAuth] = useRecoilState(isAuthAtom);

  const { data, mutate } = useMutation(signIn);

  const responseKaKao = (res) => {
    let uid = res.profile.id;
    setUid(uid);
    console.log(uid);
    mutate({ id: uid });
  };

  if (data?.data.status === 401) {
    // 회원이 아닐경우
    // f7router.navigate("/teamSelect");
  }
  if (data?.data.status === 400) {
    alert("로그인 오류");
  }
  if (data?.data.status === 200) {
    setIsAuth(true);
  }

  return { responseKaKao };
}
