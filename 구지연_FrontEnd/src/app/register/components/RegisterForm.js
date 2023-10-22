import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../../../components/common/Button';
import StyledInput from 'src/components/common/StyledInput';

const RegisterFormBlock = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  flex-direction: column;
`;

const Form = styled.form`
  text-align: center;
  width: 450px;
  margin-top: 4rem;
  margin-left: 8rem;
`;

const Title = styled.div`
  margin-top: 3rem;
  margin-left: 5rem;
  font-weight: 600;
  font-size: 60px;
`;

const Content = styled.div`
  margin-left: 5rem;
  font-weight: 500;
  font-size: 40px;
`;

const RegisterForm = () => {
  return (
    <RegisterFormBlock>
      <Title>Welcome to How Worthy!</Title>
      <Content>Create Account</Content>
      <Form>
        <StyledInput title="Nickname" name="nickname" />
        <StyledInput title="Email" name="email" />
        <StyledInput title="Password" name="password" />
        <StyledInput title="Confirm Password" name="confirm" />
        <Link to="/">
          <Button margin_top="2rem">Sign Up</Button>
        </Link>
      </Form>
    </RegisterFormBlock>
  );
};

export default RegisterForm;
