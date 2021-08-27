import React, { useEffect, useState } from "react";
import {
  Page,
  Navbar,
  NavTitle,
  NavRight,
  Link,
  Toolbar,
  Tabs,
  Tab,
} from "framework7-react";

const HistoryPage = ({ f7route, f7router }) => {
  return (
    <Page noToolbar={false}>
      <Toolbar tabbar position="top">
        <Link tabLink="#tab-recent" tabLinkActive>
          최근 메세지
        </Link>
        <Link tabLink="#tab-hof">명예의 전당</Link>
      </Toolbar>
      <Tabs>
        <Tab id="tab-recent" tabActive></Tab>

        <Tab id="tab-hof">
          {" "}
          <Link>최근 메세지</Link>
        </Tab>
      </Tabs>
    </Page>
  );
};

export default HistoryPage;
