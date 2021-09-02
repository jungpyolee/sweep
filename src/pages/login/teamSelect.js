import { Navbar, Page } from "framework7-react";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { teamIdAtom } from "../../atoms";
import { useRecoilState } from "recoil";
import { getTeamInfo } from "../../api/infoApi";
function TeamSelectPage({ f7route, f7router }) {
  const { is_Main } = f7route.query;
  const [teamId, setTeamId] = useRecoilState(teamIdAtom);
  const [selected, setSelected] = useState(false);
  const { isLoading, data, isSuccess } = useQuery("getTeamInfo", getTeamInfo);

  if (isLoading) {
    return <Page>로딩중입니다</Page>;
  }

  if (isSuccess)
    if (selected) {
      setTimeout(() => {
        f7router.navigate("/nicknameSelect");
      }, 1000);
    }

  return (
    <Page style={{ backgroundColor: "white" }} stacked>
      <Navbar backLink backLinkUrl="/signIn"></Navbar>
      <p className="text-xl text-center">응원팀을 선택해주세요</p>
      <p className="text-base text-center">
        팀 선택 시 한 달 동안 변경이 <br /> 불가능하니 신중히 선택해 주세요
      </p>{" "}
      {data && (
        <ul className="grid grid-cols-2 grid-flow-row gap-4  ">
          {data.data.map((team) => {
            return (
              <li
                className={
                  selected === team.id
                    ? "teamSelected border-2 text-base text-primary-500 rounded-2xl border-primary-500 flex flex-col justify-center items-center w-36 h-36 cursor-pointer"
                    : "teamNotSelected border text-base text-grayscale-400 rounded-2xl border-grayscale-200 flex flex-col justify-center items-center w-36 h-36 cursor-pointer"
                }
                key={team.id}
                onClick={() => {
                  setTeamId(team.id);

                  setSelected(team.id);
                }}
              >
                <img
                  className="w-16 h-16 mt-6"
                  src={team.icon}
                  alt="teamIcon"
                />
                <p className="">{team.name}</p>
              </li>
            );
          })}
        </ul>
      )}
      <p
        onClick={() => {}}
        className="p-2 cursor-pointer text-center text-grayscale-400"
      >
        나중에 선택할래요
      </p>
    </Page>
  );
}

export default TeamSelectPage;
