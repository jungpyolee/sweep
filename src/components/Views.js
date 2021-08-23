import React from 'react';
import { Views, View, Toolbar, Link } from 'framework7-react';

const F7Views = () => {
  return (
    <>
      <Views tabs className="safe-areas">
        <Toolbar tabbar labels bottom>
          <Link className="text-xs" tabLink="#view-home" tabLinkActive>
            홈
          </Link>
          <Link className="text-xs" tabLink="#view-about">
            어바웃
          </Link>
          <Link className="text-xs" tabLink="#view-login">
            로긴
          </Link>
        </Toolbar>
        <View id="view-home" stackPages main tab tabActive url="/?is_main=true" />
        <View id="view-about" stackPages name="about" tab url="/about?is_main=true" />
        <View id="view-login" stackPages name="login" tab url="/login?is_main=true" />
      </Views>
    </>
  );
};

export default F7Views;
