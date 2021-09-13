import { Progressbar } from "framework7-react";
import React from "react";

export default function POGDetail({ pogInfo }) {
  console.log(pogInfo);
  let pogCount = 0;
  for (let i = 0; i < pogInfo?.player?.length; i++) {
    pogCount = pogCount + pogInfo?.player[i]?.count;
  }

  console.log(pogCount);
  return (
    <div className="h-1 pt-mdd pl-3 bg-grayscale-0">
      <div className="text-grayscale-600">
        총 {pogCount && pogCount}개의 투표가 진행되었습니다.{" "}
      </div>
      <div className="mt-mdd">
        {/* 선수한줄 */}
        {pogInfo &&
          pogInfo.player?.map((player, key) => {
            return (
              <div key={key} className="flex w-1 items-center mb-sm">
                {/* icon */}

                <div className="flex w-1 items-center">
                  <div className="w-12">
                    <img
                      className="bg-grayscale-0 rounded-full border w-12 h-12"
                      src={player.image}
                      alt="player"
                    />
                    <div className="mt-xs text-center">{player.nickname}</div>
                  </div>
                  <div className="flex w-1 items-center mb-mdd">
                    <div
                      style={{ width: `${player.rate * 2}%` }}
                      className="ml-mdd bg-primary-500 h-bar"
                    ></div>
                    <div className=" ml-sm">{Math.round(player.rate)}% </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
