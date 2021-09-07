import React from "react";
import { useQuery } from "react-query";
import { getPOGRank } from "../../../../api/infoApi";

export default function MVPRank() {
  const { data } = useQuery("POGRank", getPOGRank);
  console.log(data?.data);
  return (
    <div className="pt-11 bg-grayscale-0">
      {data &&
        data.data.map((player, key) => {
          return (
            <div
              key={key}
              className=" flex h-15 mx-base border-b border-grayscale-100"
            >
              <div className="w-0.5 flex items-center">
                <div className="w-4 mr-7">{player.rank}</div>
                <img
                  className="w-6 h-6 mr-base"
                  src={player.team.icon}
                  alt="icon"
                />
                <img
                  className="w-6 h-6 mr-base"
                  src={`/assets/icons/Position/${player.role}.png`}
                  alt="lane"
                />
              </div>

              <div className="w-0.5 items-center flex justify-around  ">
                <div className="w-0.6 text-left">{player.nickname}</div>
                <div className="w-4 pl-md pr-mdd text-center">
                  {player.point}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
