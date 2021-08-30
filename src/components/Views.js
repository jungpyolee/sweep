import React, { useState } from "react";
import { Views, View, Toolbar, Link, Icon } from "framework7-react";
import "../App.css";
import { useRecoilState } from "recoil";
import { isAuthAtom } from "../atoms/index";
import { useEffect } from "react";

const F7Views = () => {
  const [isAuth, setIsAuth] = useRecoilState(isAuthAtom);
  console.log("fsdafhsdiofhaidosfhidos", isAuth);
  useEffect(() => {}, [isAuth]);

  if (isAuth) {
    return (
      <Views tabs className="safe-areas">
        <Toolbar style={{ height: 70 }} tabbar bottom>
          <Link className="text-xs w-30px" tabLink="#view-league">
            <div className="flex flex-col justify-center items-center ">
              <img
                className="grayFilter200"
                src="/assets/icons/League.png"
                alt="league"
              />{" "}
              <div>리그</div>
            </div>
          </Link>

          <Link className="text-xs" tabLink="#view-home" tabLinkActive>
            <div className="flex flex-col justify-center items-center ">
              <img
                className="grayFilter200"
                src="/assets/icons/Home.png"
                alt="home"
              />{" "}
              <div>홈</div>
            </div>
          </Link>
          <Link className="text-xs" tabLink="#view-history">
            <div className="flex flex-col justify-center items-center ">
              <img
                className="grayFilter200"
                src="/assets/icons/History.png"
                alt="history"
              />{" "}
              <div>히스토리</div>
            </div>
          </Link>
        </Toolbar>
        <View id="view-home" stackPages main tab tabActive url="/" />
        <View id="view-history" stackPages name="history" tab url="/history" />
        <View id="view-league" stackPages name="league" tab url="/league" />
      </Views>
    );
  } else {
    return (
      <Views className="safe-areas">
        <View
          id="view-signIn"
          stackPages
          name="signIn"
          url="/signIn?is_main=true"
        />
        <View
          id="view-teamSelect"
          stackPages
          name="teamSelect"
          url="/teamSelect"
        />
        <View
          id="view-nicknameSelect"
          stackPages
          name="nicknameSelect"
          url="/nicknameSelect"
        />
      </Views>
    );
  }
};

export default F7Views;
