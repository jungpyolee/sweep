import React, { useState } from "react";
import { Views, View, Toolbar, Link, Icon } from "framework7-react";
import "../App.css";
import { useRecoilState } from "recoil";
import { isAuthAtom } from "../atoms/index";
import { useEffect } from "react";

const F7Views = () => {
  const [isAuth, setIsAuth] = useRecoilState(isAuthAtom);
  const [onHistory, setOnHistory] = useState(false);
  const [onHome, setOnHome] = useState(true);
  const [onLeague, setOnLeague] = useState(false);
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
            <div className=" flex justify-around pt-sm ">
              <Link
                className="text-xs text-grayscale-600 w-30px"
                tabLink="#view-league"
                onClick={() => {
                  setOnHome(false);
                  setOnLeague(true);
                  setOnHistory(false);
                }}
              >
                <div className="flex flex-col justify-center items-center ">
                  <img
                    className={onLeague ? "primary500" : "grayFilter200"}
                    src="/assets/icons/League.png"
                    alt="league"
                  />{" "}
                  <div>리그</div>
                </div>
              </Link>
              <Link
                className="text-xs text-grayscale-600"
                tabLink="#view-home"
                tabLinkActive
                onClick={() => {
                  setOnHome(true);
                  setOnLeague(false);
                  setOnHistory(false);
                }}
              >
                <div className="flex flex-col justify-center items-center ">
                  <img
                    className={onHome ? "primary500" : "grayFilter200"}
                    src="/assets/icons/Home.png"
                    alt="home"
                  />{" "}
                  <div>홈</div>
                </div>
              </Link>
              <Link
                className="text-xs text-grayscale-600"
                tabLink="#view-history"
                onClick={() => {
                  setOnHome(false);
                  setOnLeague(false);
                  setOnHistory(true);
                }}
              >
                <div className="flex flex-col justify-center items-center ">
                  <img
                    className={onHistory ? "primary500" : "grayFilter200"}
                    src="/assets/icons/History.png"
                    alt="history"
                  />{" "}
                  <div>히스토리</div>
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
