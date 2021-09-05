import React, { useState } from "react";
import { Views, View, Toolbar, Link, Icon } from "framework7-react";
import "../App.css";
import { useRecoilState } from "recoil";
import { isAuthAtom } from "../atoms/index";
import { useEffect } from "react";

const F7Views = () => {
  const [isAuth, setIsAuth] = useRecoilState(isAuthAtom);

  useEffect(() => {}, [isAuth]);

  return (
    <>
      {isAuth ? (
        <Views tabs className=" safe-areas">
          <div
            style={{ width: "100%" }}
            className=" h-16 z-9999 absolute bottom-0 bg-grayscale-0"
          >
            {/* 왜 여기서 w-full안먹음?? */}
            <div className="flex justify-center ">
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
            </div>
            <div> </div>
          </div>

          <View id="view-home" stackPages main tab tabActive url="/" />
          <View
            id="view-history"
            stackPages
            name="history"
            tab
            url="/history"
          />
          <View id="view-league" stackPages name="league" tab url="/league" />
        </Views>
      ) : (
        <Views>
          <View
            id="view-signIn"
            stackPages
            name="signIn"
            url="/signIn?is_main=true"
          />
        </Views>
      )}
    </>
  );
};

export default F7Views;
