import React from 'react';
import { Page, Navbar, NavTitle, NavRight, Link } from 'framework7-react';

const LoginPage = ({ f7route, f7router }) => {
  const { is_main } = f7route.query;

  return (
    <Page noToolbar={false}>
      <Navbar backLink={!is_main}>
        <NavTitle>로그인</NavTitle>
        <NavRight>
          <Link href="/" badgeColor="red">???</Link>
        </NavRight>
      </Navbar>

      <div>
        hihi3
      </div>
    </Page>
  )
}

export default LoginPage;
