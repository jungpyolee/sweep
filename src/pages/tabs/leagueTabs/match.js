import React, { useState } from "react";
import { useEffect } from "react";
import moment from "moment";
import { useQuery } from "react-query";
import { getMonthSchedule } from "../../../api/infoApi";
function MatchTab() {
  const [monthControl, setMonthControl] = useState(0);
  let monthWithYear = moment()
    .add(monthControl, "months")
    .format("YYYY년 MM월");

  const thisMonth = moment().format("M");
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

  const groupByArray = (xs, key) => {
    return xs.reduce(function (rv, x) {
      let v = key instanceof Function ? key(x) : x[key];
      let el = rv.find((r) => r && r.key === v);
      if (el) {
        el.values.push(x);
      } else {
        rv.push({ key: v, values: [x] });
      }
      return rv;
    }, []);
  };

  const { data } = useQuery(["getMonth", { month: month }], () =>
    getMonthSchedule(month)
  );

  console.log(moment("2021-08-01T20:00:00.000Z").add(-9, "hours").format("D"));

  console.log(groupByArray(data.data, moment(data.data.startTime).format("D")));
  console.log(monthWithYear);
  console.log(data);
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

  return (
    <React.Fragment>
      <div>
        <div>
          {/* month nav */}
          <div className="mt-5 flex justify-center text-base">
            {month > 1 ? (
              <img
                onClick={() => {
                  setMonth(month - 1);
                  setMonthControl(monthControl - 1);
                }}
                src="/assets/icons/24px/Arrow/Left.png"
                alt="left_arrow"
              />
            ) : null}
            <div>2021년{month}월</div>
            {month < 12 ? (
              <img
                onClick={() => {
                  setMonth(month + 1);
                  setMonthControl(monthControl + 1);
                }}
                src="/assets/icons/24px/Arrow/Right.png"
                alt="right_arrow"
              />
            ) : null}
          </div>{" "}
        </div>

        {/* matchList */}

        <div>
          <div className="pl-base pt-md text-sm h-11 bg-grayscale-0">
            {matchDate}
          </div>
          <div></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MatchTab;
