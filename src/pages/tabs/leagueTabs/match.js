import React, { useState } from "react";
import moment from "moment";
import { useQuery } from "react-query";
import { getMonthSchedule } from "../../../api/infoApi";
import { groupByArray, mappedData } from "../../../utils/timeUtil";
import { Link } from "framework7-react";
function MatchTab({ f7router }) {
  const [monthControl, setMonthControl] = useState(0);
  const [noSchedule, setNoSchedule] = useState(true);

  const thisMonth = parseInt(moment().format("M"));
  const [month, setMonth] = useState(thisMonth);

  moment.locale("ko", {
    weekdays: [
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
    ],
    weekdaysShort: ["일", "월", "화", "수", "목", "금", "토"],
  });

  const { data } = useQuery(
    ["getMonth", { month: month }],
    () => getMonthSchedule(month),
    {
      onSuccess: (data) => {
        if (data?.data.length) mappedData(data?.data);
      },
    }
  );

  const groupedSchedule = groupByArray(data?.data, "startTime");

  const status = {
    "-1": "예정",
    0: "진행",
    1: "진행",
    2: "종료",
  };
  return (
    <React.Fragment>
      <div>
        <div>
          {/* month nav */}
          <div
            style={{ width: "100%" }}
            className="bg-grayscale-0 h-13 fixed  items-center flex justify-center text-base"
          >
            {month > 1 ? (
              <img
                className="w-6 h-6"
                onClick={() => {
                  setMonth(month - 1);
                  setMonthControl(monthControl - 1);
                }}
                src="/assets/icons/24px/Arrow/Left.png"
                alt="left_arrow"
              />
            ) : null}
            <div>2021년 {month}월</div>
            {month < 12 ? (
              <img
                className="w-6 h-6"
                onClick={() => {
                  setMonth(month + 1);
                  setMonthControl(monthControl + 1);
                }}
                src="/assets/icons/24px/Arrow/Right.png"
                alt="right_arrow"
              />
            ) : null}
          </div>
        </div>

        {/* matchList */}

        <div style={{ paddingTop: 52, paddingBottom: 52 }} className="">
          {data?.data.length ? (
            groupedSchedule.map((dailyMatch, key) => {
              let match1 = dailyMatch.values[0];
              let match2 = dailyMatch.values[1];
              return (
                <div key={key}>
                  <div className="pl-base pt-md text-sm border-b border-grayscale-300 h-11 bg-primary-100">
                    {dailyMatch.key}
                  </div>

                  {/* 시간 */}

                  <div className="bg-grayscale-0 flex justify-between items-center h-20 py-mdd px-base">
                    <div>
                      <div className="text-sm">{match1.startHour}</div>
                      <div className="text-xs text-center text-grayscale-300 bg-grayscale-100 rounded-lg mt-2">
                        {status[match1.status]}
                      </div>
                    </div>
                    {/* 게임정보 */}
                    <div className="w-18 h-12">
                      <div className="flex justify-between">
                        {/* a팀 */}
                        <img
                          className="w-6 h-6"
                          src={match1.aTeamIcon}
                          alt="aTeam"
                        />{" "}
                        <div>{match1.aTeamName}</div>
                        <div
                          className={
                            match1.aTeamScore === 2
                              ? "text-primary-500"
                              : "text-grayscale-300"
                          }
                        >
                          {match1.aTeamScore}
                        </div>
                      </div>
                      <div className="flex justify-between">
                        {/* b팀 */}
                        <img
                          className="w-6 h-6"
                          src={match1.bTeamIcon}
                          alt="bTeam"
                        />
                        <div>{match1.bTeamName}</div>
                        <div
                          className={
                            match1.bTeamScore === 2
                              ? "text-primary-500"
                              : "text-grayscale-300"
                          }
                        >
                          {match1.bTeamScore}
                        </div>
                      </div>
                    </div>
                    <div>
                      {match1.status === 2 ? (
                        <Link
                          onClick={() => {
                            f7router.navigate(`/game/${match1.id}`);
                          }}
                          className="w-18 h-8 flex items-center justify-center text-grayscale-400 rounded-lg border border-grayscale-200"
                        >
                          {" "}
                          MOG 10
                        </Link>
                      ) : (
                        <Link
                          onClick={() => {
                            f7router.navigate(`/game/${match1.id}`);
                          }}
                          className="w-18 h-8 flex items-center justify-center text-primary-500 rounded-lg border border-primary-300"
                        >
                          응원하기
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* 2경기 */}
                  {match2 && (
                    <div className="bg-grayscale-0 flex justify-between items-center h-20 py-mdd px-base">
                      <div>
                        <div className="text-sm">{match2.startHour}</div>
                        <div className="text-xs text-center text-grayscale-300 bg-grayscale-100 rounded-lg mt-2">
                          {status[match2.status]}
                        </div>
                      </div>

                      {/* 게임정보 */}
                      <div className="w-18 h-12">
                        <div className="flex justify-between">
                          {/* a팀 */}
                          <img
                            className="w-6 h-6"
                            src={match2.aTeamIcon}
                            alt="aTeam"
                          />{" "}
                          <div>{match2.aTeamName}</div>
                          <div
                            className={
                              match2.aTeamScore === 2
                                ? "text-primary-500"
                                : "text-grayscale-300"
                            }
                          >
                            {match2.aTeamScore}
                          </div>
                        </div>

                        <div className="flex justify-between">
                          {/* b팀 */}
                          <img
                            className="w-6 h-6"
                            src={match2.bTeamIcon}
                            alt="bTeam"
                          />
                          <div>{match2.bTeamName}</div>
                          <div
                            className={
                              match2.bTeamScore === 2
                                ? "text-primary-500"
                                : "text-grayscale-300"
                            }
                          >
                            {match2.bTeamScore}
                          </div>
                        </div>
                      </div>
                      <div>
                        {match2.status === 2 ? (
                          <Link
                            onClick={() => {
                              f7router.navigate(`/game/${match2.id}`);
                            }}
                            className="w-18 h-8 flex items-center justify-center text-grayscale-400 rounded-lg border border-grayscale-200"
                          >
                            {" "}
                            MOG 10
                          </Link>
                        ) : (
                          <Link
                            onClick={() => {
                              f7router.navigate(`/game/${match2.id}`);
                            }}
                            className="w-18 h-8 flex items-center justify-center text-primary-500 rounded-lg border border-primary-300"
                          >
                            응원하기
                          </Link>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="pt-xl text-center">이 달은 경기가 없어요 :(</div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default MatchTab;
