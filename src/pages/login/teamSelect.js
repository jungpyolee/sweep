import { Button, List, ListItem, Navbar, Page } from "framework7-react";
import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { useState } from "react";
function TeamSelectPage() {
  const [teamInfo, setTeamInfo] = useState([]);
  const [selected, setSelected] = useState();
  const getTeamInfo = () =>
    axios.get("http://3.37.194.249/info/teamInfo").then((res) => res.data);

  const { isLoading, data, isSuccess } = useQuery("getTeamInfo", getTeamInfo);

  if (isLoading) {
    return <Page>로딩중입니다</Page>;
  }

  if (isSuccess)
    return (
      <Page style={{ backgroundColor: "white" }} stacked>
        <Navbar backLink></Navbar>
        <p className="text-xl text-center">응원팀을 선택해주세요</p>
        <p className="text-base text-center">
          팀 선택 시 한 달 동안 변경이 <br /> 불가능하니 신중히 선택해 주세요
        </p>{" "}
        {data && (
          <ul className="grid grid-cols-2 grid-flow-row gap-4  ">
            {data.data.map((team) => {
              return (
                <li
                  className="border rounded-2xl border-grayscale-200 flex flex-col justify-center items-center w-36 h-36 cursor-pointer"
                  key={team.id}
                  onClick={() => {
                    setSelected(team.id);
                  }}
                >
                  <img
                    className="w-16 h-16 mt-6"
                    src={team.icon}
                    alt="teamIcon"
                  />
                  <p className="text-base text-grayscale-400">{team.name}</p>
                </li>
              );
            })}
          </ul>
        )}
        <p className="text-center text-grayscale-400">나중에 선택할래요</p>
      </Page>
    );
}

export default TeamSelectPage;
