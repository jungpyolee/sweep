import React from "react";
import { Page, Navbar, NavTitle, NavRight, Link } from "framework7-react";
import { useEffect } from "react";

const HomePage = ({ f7route, f7router }) => {
  return (
    <Page noToolbar={false}>
      dddd
      <Link
        onClick={() => {
          f7router.navigate(`/game/3`);
        }}
      >
        dd
      </Link>
    </Page>
  );
};

export default HomePage;
