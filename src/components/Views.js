import React from "react";
import { Views, View, Toolbar, Link, Icon } from "framework7-react";
import "../App.css";
const F7Views = () => {
  return (
    <>
      <Views tabs className="safe-areas">
        <Toolbar style={{ height: 70, backgroundColor: "white" }} tabbar bottom>
          <Link className="text-xs w-30px" tabLink="#view-league">
            <div className="flex flex-col justify-center items-center ">
              <img
                className="grayFilter"
                src="/assets/icons/League.png"
                alt="league"
              />{" "}
              <div>리그</div>
            </div>
          </Link>

          <Link className="text-xs" tabLink="#view-home" tabLinkActive>
            <div className="flex flex-col justify-center items-center ">
              <img
                className="grayFilter"
                src="/assets/icons/Home.png"
                alt="home"
              />{" "}
              <div>홈</div>
            </div>
          </Link>
          <Link className="text-xs" tabLink="#view-history">
            <div className="flex flex-col justify-center items-center ">
              <img
                className="grayFilter"
                src="/assets/icons/History.png"
                alt="history"
              />{" "}
              <div>히스토리</div>
            </div>
          </Link>
          <Link className="text-xs w-30px" tabLink="#view-signIn">
            <div className="flex flex-col justify-center items-center ">
              <img
                className="grayFilter"
                src="/assets/icons/League.png"
                alt="league"
              />{" "}
              <div>로그인</div>
            </div>
          </Link>
        </Toolbar>
        <View id="view-home" stackPages main tab tabActive url="/" />
        <View id="view-history" name="history" tab url="/history" />
        <View id="view-league" stackPages name="league" tab url="/league" />
        <View id="view-signIn" stackPages name="signIn" tab url="/signIn" />
      </Views>
    </>
  );
};

export default F7Views;
