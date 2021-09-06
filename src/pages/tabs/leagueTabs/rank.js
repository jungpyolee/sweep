import { Link, Page, Tab, Tabs, Toolbar } from "framework7-react";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { getTeamRank } from "../../../api/infoApi";
import TeamRank from "./rankTabs/TeamRank";

function RankTab() {
  const [leftTab, setleftTab] = useState(true);

  return (
    <Page>
      <div className="w-1 fixed bg-grayscale-0 h-19">
        <div className="bg-grayscale-100 mx-5 mt-4 h-11 p-1 rounded-xl">
          <Link
            onClick={() => {
              setleftTab(true);
            }}
            className={
              leftTab
                ? "text-grayscale-900 w-0.5 h-9 bg-grayscale-0 rounded-xl"
                : "text-grayscale-900 w-0.5 h-9 bg-grayscale-100 rounded-xl"
            }
            tabLink="#tab-team"
            tabLinkActive
          >
            순위
          </Link>
          <Link
            onClick={() => {
              setleftTab(false);
            }}
            className={
              leftTab
                ? "text-grayscale-900 w-0.5 h-9 bg-grayscale-100 rounded-xl"
                : "text-grayscale-900 w-0.5 h-9 bg-grayscale-0 rounded-xl"
            }
            tabLink="#tab-mvp"
          >
            MVP
          </Link>
        </div>
      </div>

      <Tabs>
        <Tab className="mt-19 pb-16" id="tab-team" tabActive>
          <div className="flex w-1 h-11 bg-primary-100 border-b border-grayscale-200">
            <div className="w-0.5 pl-2">
              <p>팀순위</p>
            </div>
            <div className="w-0.5 flex justify-around">
              <p>승</p>
              <p>패</p>
              <p>승률</p>
            </div>
          </div>
          {/* 순위파트 */}
          <TeamRank />
          <div></div>
        </Tab>

        <Tab id="tab-mvp">mvp탭</Tab>
      </Tabs>
    </Page>
  );
}

export default RankTab;
