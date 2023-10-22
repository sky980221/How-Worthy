import React from 'react';

const NaverLogin = () => {
  const client_id = process.env.REACT_APP_NAVER_CLIENT_ID;
  const redirect_uri = process.env.REACT_APP_NAVER_REDIRECT_URI;
  const state = process.env.REACT_APP_NAVER_STATE;

  const url = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${client_id}&state=${state}&redirect_uri=${encodeURIComponent(
    redirect_uri,
  )}`;

  //cors 이슈로 인해 href 방식으로 호출
  const loginNaver = () => {
    window.location.href = url;
    console.log('로그인');
  };
  return <div onClick={loginNaver}> 네이버 로그인</div>;
};

export default NaverLogin;
