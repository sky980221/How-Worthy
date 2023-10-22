import React from 'react';
import palette from 'src/utils/palette';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../../../components/common/Button';
import StyledInput from 'src/components/common/StyledInput';

const LoginBox = styled.div`
  .title-area {
    display: block;
    padding-bottom: 1rem;
    text-align: center;
    font-weight: normal;
    letter-spacing: 2px;
    font-size: 4vh;
  }
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  width: 400px;
  height: 450px;
  padding: 2rem;
  background-color: ${palette.yellow[1]};
  margin-top: 18vh;
`;

const Form = styled.form`
  text-align: center;
  margin-top: 2rem;
`;

const Footer = styled.div`
  margin-top: 3.5rem;
  text-align: center;
  font-size: 0.7rem;
  line-height: 1.5rem;
  color: ${palette.gray[1]};
`;

const LoginForm = () => {
  return (
    <LoginBox>
      <div className="title-area">Welcome back!</div>
      <Form>
        <StyledInput title="Your Email" name="username" />
        <StyledInput title="Your Password" name="password" />
        <Link to="/post">
          <Button>Log In</Button>
        </Link>
      </Form>
      <Footer>
        <div>Are you new here? Join our service!</div>
        <Link to="/register">
          <Button>Sign up for free</Button>
        </Link>
      </Footer>
    </LoginBox>
  );
};

export default LoginForm;
