import React from 'react';
import RegisterForm from './components/RegisterForm';
import { styled } from 'styled-components';
import { PageTemplateBlock } from 'src/components/common/PageTemplateBlock';
import RegisterImageGroup from './components/RegisterImageGroup';
import { Header } from 'src/components/common/Header';

const RegisterViewerBlock = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
`;

const RegisterPage = () => {
  return (
    <PageTemplateBlock flex_direction="column" justify_content="flex-start">
      <Header />
      <RegisterViewerBlock>
        <RegisterForm />
        <RegisterImageGroup />
      </RegisterViewerBlock>
    </PageTemplateBlock>
  );
};

export default RegisterPage;
