import React from 'react';
import { Page, Navbar, NavTitle, NavRight, Link } from 'framework7-react';


const HomePage = ({ f7route, f7router }) => {
  const { is_main } = f7route.query;

  return (
    <Page noToolbar={false}>
      <Navbar backLink={!is_main}>
        <NavTitle>홈</NavTitle>
        <NavRight>
          <Link href="/" badgeColor="red">???</Link>
        </NavRight>
      </Navbar>

      <div className="pt-6 text-blue-700" onClick={() => {!is_main ? f7router.back() : console.log("hihi")}}>hihi3</div>
    </Page>
  )
}

export default HomePage;
