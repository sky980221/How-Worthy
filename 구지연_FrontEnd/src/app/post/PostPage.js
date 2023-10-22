import React from 'react';
import { PageTemplateBlock } from 'src/components/common/PageTemplateBlock';
import { Header } from 'src/components/common/Header';
import { styled } from 'styled-components';
import PostImageGroup from './components/PostImageGroup';

const Content = styled.div`
  font-size: 30px;
  font-weight: 500;
  margin-left: 10rem;
  margin-top: 4rem;
`;

const PostPage = () => {
  return (
    <PageTemplateBlock flex_direction="column" justify_content="flex-start">
      <Header />
      <Content>
        Upload your food photo here
        <br />
        We will grade the photo and give feedbacks!
      </Content>
      <PostImageGroup />
    </PageTemplateBlock>
  );
};

export default PostPage;
