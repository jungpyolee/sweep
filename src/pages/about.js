import React from 'react';
import { Page, Navbar, NavTitle, NavRight, Link } from 'framework7-react';

const AboutPage = ({ f7route, f7router }) => {
  const { is_main } = f7route.query;

  return (
    <Page noToolbar={false}>
      <Navbar backLink={!is_main}>
        <NavTitle>어바웃</NavTitle>
        <NavRight>
          <Link href="/" badgeColor="red">???</Link>
        </NavRight>
      </Navbar>

      <div className="text-blue-700">어바웃</div>
    </Page>
  )
}

export default AboutPage;
