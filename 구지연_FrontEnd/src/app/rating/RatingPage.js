import React from 'react';
import { PageTemplateBlock } from 'src/components/common/PageTemplateBlock';
import { Header } from 'src/components/common/Header';
import RatingImageGroup from './components/RatingImageGroup';

const RatingPage = () => {
  return (
    <PageTemplateBlock flex_direction="column" justify_content="flex-start">
      <Header />
      <RatingImageGroup />
    </PageTemplateBlock>
  );
};

export default RatingPage;
