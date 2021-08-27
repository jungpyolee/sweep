import { Page } from "framework7-react";
import React from "react";
import KakaoLogin from "react-kakao-login";
import { useRecoilState } from "recoil";
import { isAuthAtom } from "../../atoms/index";
import styled from "styled-components";
import { useQuery } from "react-query";
import { useState } from "react";
import axios from "axios";

function SignInPage({ f7route, f7router }) {
  const [uid, setUid] = useState(null);
  const [needSignUp, setNeedSignUp] = useState(false);
  const [isAuth, setIsAuth] = useRecoilState(isAuthAtom);

  const checkId = (uid) => {
    axios
      .post("http://3.37.194.249/auth/login", { id: uid })
      .then((response) => {
        console.log(response);
        const status = response.data.status;
        if (status === 200) {
          setIsAuth(true);
        } else if (status === 401) {
          // setIsAuth(true);
          f7router.navigate("/teamSelect");
          setUid(null);
        }
      });
  };
  const { isIdle, isLoading } = useQuery(
    ["checkId", { uid: uid }],
    (uid) => {
      checkId(uid);
    },
    { enabled: !!uid }
  );

  const responseKaKao = (res) => {
    let uid = res.profile.id;
    setUid(uid);
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
