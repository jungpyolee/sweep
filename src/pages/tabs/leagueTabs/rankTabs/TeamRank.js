import React from "react";
import { useQuery } from "react-query";
import { getTeamRank } from "../../../../api/infoApi";

export default function TeamRank() {
  const { data } = useQuery("teamRank", getTeamRank);
  console.log(data?.data);
  return (
    <div className="bg-grayscale-0">
      {data &&
        data.data.map((team, key) => {
          return (
            <div
              key={key}
              className=" flex h-15 mx-base border-b border-grayscale-100"
            >
              <div className="w-0.5 flex items-center">
                <div className="w-4 mr-base">{team.rank}</div>
                <img className="w-6 h-6 mr-base" src={team.icon} alt="icon" />
                <div>{team.name}</div>
              </div>
              <div className="w-0.5  flex justify-around text-right items-center">
                <div className="w-4 ">{team.win}</div>
                <div className="w-4 ">{team.lose}</div>
                <div className="w-4 pl-2">{team.rate}%</div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
