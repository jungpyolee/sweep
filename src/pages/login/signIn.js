import { Page } from "framework7-react";
import React, { useEffect, useState } from "react";
import KakaoLogin from "react-kakao-login";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { read } from "../../api/authApi";
import { currentUserAtom, isAuthAtom } from "../../atoms";
import useAutoLoginHooks from "../../hooks/autoLogin";
import useSignInHooks from "../../hooks/signInHook";

function SignInPage({ f7router }) {
  // const { currentUser, loading } = useAutoLoginHooks();

  const { loading, currentUser } = useAutoLoginHooks();
  const { responseKaKao } = useSignInHooks();
  const KaKaoBtn = styled(KakaoLogin)`
    width: 100% !important;
    height: 0 !important;
    border: none !important;
    /* text-align: center; */
    margin-top: 100px;
    /* font-weight: normal; */
  `;
  const jskey = "905395547087143874fa6cebfaa309e7";

  if (loading)
    return (
      <div>
        <Page tabs noToolbar>
          <img
            className="absolute top-0 -right-7"
            src="/assets/icons/Emoji/login.png"
            alt="loginPageImage"
          />
          <div className="mx-base">
            <p className="text-medium text-xxl mt-75">
              이스포츠를 즐기는 <br /> 새로운 패러다임
            </p>
            <p className="text-base">클린하게 소통하자, 스윕</p>
            <KaKaoBtn token={jskey} onSuccess={responseKaKao} getProfile={true}>
              <img
                className="w-1"
                src="/assets/icons/Kakao Login Btn.png"
                alt="dd"
              />
            </KaKaoBtn>{" "}
            <img
              className="w-1 mt-base"
              src="/assets/icons/Login/Login/Login/Login/Apple.png"
              alt="apple"
            />
          </div>{" "}
        </Page>
        ;
      </div>
    );

  return <Page>??????</Page>;
}

export default SignInPage;
