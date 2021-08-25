import axios from "axios";
import { Page } from "framework7-react";
import React, { useState } from "react";
import { useEffect } from "react";
import KakaoLogin from "react-kakao-login";
import styled from "styled-components";
function SignInPage({ f7router }) {
  const [userInfo, setUserInfo] = useState(null);
  const responseKaKao = (res) => {
    setUserInfo({ data: res });
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

  useEffect(() => {
    if (userInfo) {
      let uid = userInfo.data.profile.id;
      let body = { id: uid };
      axios.post("http://3.37.194.249/auth/login", body).then((response) => {
        console.log(response.data);
        if (response.data.status === 401) {
          console.log("팀선택페이지로 이동");
        } else {
          console.log("홈 페이지로 이동시킴(로그인성공)");
        }
      });
    }
  }, [userInfo]);

  return (
    <div>
      <Page noToolbar>
        <div className="mt-28 text-xl">클린하게 즐기는 LCK</div>
        <br />
        <br />
        <br />
        <KaKaoBtn
          onClick={() => {}}
          token={jskey}
          onSuccess={responseKaKao}
          getProfile={true}
        >
          <img src="/assets/icons/kakao.svg" alt="dd" />
        </KaKaoBtn>{" "}
      </Page>
      ;
    </div>
  );
}

export default SignInPage;
