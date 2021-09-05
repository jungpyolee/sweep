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

  if (loading)
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

  return <Page>??????</Page>;
}

export default SignInPage;
