import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RedirectURI = (onDataReceived) => {
  const [access, setAccess] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');
    const state = searchParams.get('state');

    if (code && state) {
      console.log('코드:', code);
      console.log('상태:', state);
      handleBackCode(code);
    }
  }, []);

  useEffect(() => {
    if (access) {
      handleAccessToken();
    }
  }, [access]);

  const handleBackCode = async (code, state) => {
    try {
      const response = await axios.post(
        'http://localhost:8080/api/auth/naver',
        {
          authorizationCode: code,
          state: state,
        },
      );

      console.log('accessToken : ', response.data.accessToken);
      const accessToken = response.data.accessToken;

      setAccess(accessToken);
    } catch (error) {
      console.error('서버로 코드 전송 중 에러 발생:', error);
    } finally {
      console.log('끝');
    }
  };

  const handleAccessToken = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/members/${access}`,
      );
      console.log(response.data);
      setData(response.data);
      onDataReceived(response.data, access);
    } catch (error) {
      console.error('서버로 코드 전송 중 에러 발생:', error);
    } finally {
      console.log('끝');
    }
  };

  return <div></div>;
};

export default RedirectURI;
