import React from "react";
import { useEffect } from "react";
import moment from 'moment'
function MatchTab() {
  const monthWithYear = moment().format("YYYY년 MM월");
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

  const matchDummy = [
    {
      id: 73,
      aTeamName: "NS",
      bTeamName: "HLE",
      aTeamIcon:
        "https://cdn.pandascore.co/images/team/image/128217/nongshim_red_forcelogo_square.png",
      bTeamIcon:
        "https://cdn.pandascore.co/images/team/image/2883/hanwha-life-esports-1s04vbu0.png",
      aTeamScore: 2,
      bTeamScore: 1,
      status: 1,
      startTime: "2021-08-01T17:00:00.000Z",
    },
    {
      id: 74,
      aTeamName: "DK",
      bTeamName: "KT",
      aTeamIcon:
        "https://cdn.pandascore.co/images/team/image/128409/dwg_ki_alogo_square.png",
      bTeamIcon:
        "https://cdn.pandascore.co/images/team/image/63/kt_rolsterlogo_profile.png",
      aTeamScore: 2,
      bTeamScore: 0,
      status: 1,
      startTime: "2021-08-01T20:00:00.000Z",
    },
  ];
  const matchDate = moment(matchDummy[0].startTime)
    .add(-9, "hours")
    .format("M월 D일 (ddd)");
  const matchTime = moment(matchDummy[0].startTime)
    .add(-9, "hours")
    .format("HH:mm");
  useEffect(
    () => {
      // 대충 월이 바뀌면 getMatch 다시한다는 내용
    },
    [
      //대충 month state
    ]
  );
  return (
    <React.Fragment>
      <div>
        <div>
          {/* month nav */}
          <div className="mt-5 flex justify-center text-base">
            <img src="/assets/icons/24px/Arrow/Left.png" alt="left_arrow" />
            {monthWithYear}
            <img src="/assets/icons/24px/Arrow/Right.png" alt="right_arrow" />
          </div>{" "}
        </div>

        {/* matchList */}

        <div>
          <div>
            {matchDate}
            {matchTime}
          </div>
          <div></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MatchTab;
