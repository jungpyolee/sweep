import React, { useState } from "react";
import { Page, Navbar, NavTitle, NavRight, Link } from "framework7-react";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { getCurrentGame } from "../api/infoApi";
import { getTinder } from "../api/tinderApi";
import TinderCard from "react-tinder-card";
import HomeTinder from "./homeTinder";
const HomePage = ({ f7route, f7router }) => {
  const [tinders, setTinders] = useState([]);

  let count = 3;

  const { data } = useQuery("currentGame", getCurrentGame);

  return (
    <Page noToolbar={false}>
      {/* 상단 */}
      <div className="bg-grayscale-100 pt-11 h-1 ">
        <div className="flex justify-between  h-11 w-1 px-base  ">
          <div className="flex items-center pt-1 ">
            <img src="/assets/icons/My.png" alt="user" />
          </div>
          <div className="flex justify-center items-center">
            <img
              className="w-6 h-6 mr-base"
              src="/24px/POG Status.svg"
              alt="user"
            />
            <img className="w-6 h-6" src="/24px/24px/Filter.svg" alt="user" />
          </div>
        </div>
        <div className=" mt-mdd rounded-xl h-23 mx-base bg-grayscale-0 flex justify-around items-center">
          {data?.data ? (
            <>
              <div className="w-10 h-15">
                <img
                  className="w-10 h-10"
                  src={data.data.aTeam.icon}
                  alt="aTeamIcon"
                />
                <div className="w-10-h-5 text-center">
                  {data.data.aTeam.name}
                </div>
              </div>
              <div className="w-30 h-10 flex justify-around items-center">
                <div
                  className={
                    data.data.aTeamScore === 2
                      ? "text-primary-500 text-xxl font-bold"
                      : "text-grayscale-300 text-xxl font-bold"
                  }
                >
                  {data.data.aTeamScore}
                </div>
                <div className="text-grayscale-300 text-base font-medium">
                  vs
                </div>
                <div
                  className={
                    data.data.bTeamScore === 2
                      ? "text-primary-500 text-xxl font-bold"
                      : "text-grayscale-300 text-xxl font-bold"
                  }
                >
                  {data.data.bTeamScore}
                </div>
              </div>
              <div className="w-10 h-15">
                <img
                  className="w-10 h-10"
                  src={data.data.bTeam.icon}
                  alt="bTeamIcon"
                />
                <div className="w-10-h-5 text-center">
                  {data.data.bTeam.name}
                </div>
              </div>
            </>
          ) : (
            <div> 예정된 경기가 없습니다.</div>
          )}
        </div>
        <HomeTinder />
      </div>
    </Page>
  );
};

export default HomePage;
