import React from "react";
import { Page, Toolbar, Link, Tabs, Tab } from "framework7-react";
import MatchTab from "./tabs/leagueTabs/match";
import RankTab from "./tabs/leagueTabs/rank";

const LeaguePage = ({ f7route, f7router }) => {
  return (
    <Page noToolbar={false}>
      <Toolbar tabbar position="top">
        <Link tabLink="#tab-match" tabLinkActive>
          경기
        </Link>
        <Link tabLink="#tab-rank">순위</Link>
      </Toolbar>
      <Tabs>
        <Tab id="tab-match" tabActive>
          {" "}
          <MatchTab />
        </Tab>

        <Tab id="tab-rank">
          <RankTab />
        </Tab>
      </Tabs>
    </Page>
  );
};

export default LeaguePage;
