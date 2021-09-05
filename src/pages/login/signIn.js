import { Page } from "framework7-react";
import React, { useEffect } from "react";
import KakaoLogin from "react-kakao-login";
import { useRecoilState } from "recoil";
import { isAuthAtom, uidAtom } from "../../atoms/index";
import styled from "styled-components";
import { useMutation, useQuery } from "react-query";
import { useState } from "react";

import { read, signIn } from "../../api/authApi";
function SignInPage({ f7router }) {
  const [uid, setUid] = useRecoilState(uidAtom);
  const [isAuth, setIsAuth] = useRecoilState(isAuthAtom);

  const { isFetched } = useQuery("read", read, {
    onSuccess: (data1) => {
      if (data1.status === 200) {
        setIsAuth(true);
      }
    },
  });
  const { data, isIdle, isLoading, mutate } = useMutation(signIn);

  useEffect(() => {
    console.log("실행됨");
    if (data?.data.status === 401) {
      // 회원이 아닐경우
      f7router.navigate("/teamSelect");
    }
    if (data?.data.status === 400) {
      alert("로그인 오류");
    }
    if (data?.data.status === 200) {
      setIsAuth(true);
    }
  }, [data]);

  const responseKaKao = (res) => {
    let uid = res.profile.id;
    setUid(uid);
    console.log(uid);
    mutate({ id: uid });
  };

  const KaKaoBtn = styled(KakaoLogin)`
    padding: 0;
    width: 190px;
    height: 44px;
    line-height: 44px;
    color: #783c00;
    background-color: #ffeb00;
    border: 1px solid transparent;
    border-radius: 3px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
  `;

  const jskey = "905395547087143874fa6cebfaa309e7";

  if (isLoading || isIdle)
    return (
      <div>
        <Page tabs noToolbar>
          <div className="mt-28 text-xl">클린하게 즐기는 LCK</div>
          <br />
          <br />
          <br />
          <KaKaoBtn token={jskey} onSuccess={responseKaKao} getProfile={true}>
            <img src="/assets/icons/kakao.svg" alt="dd" />
          </KaKaoBtn>{" "}
        </Page>
        ;
      </div>
    );

  return <Page></Page>;
}

export default SignInPage;
