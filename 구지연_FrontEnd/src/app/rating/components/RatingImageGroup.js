import React from 'react';
import styled from 'styled-components';
import Rating_Box from 'src/assets/rating/Rating_Box.png';
import Rating_Picture from 'src/assets/rating/Rating_Picture.png';
import Rating_Star from 'src/assets/rating/Rating_Star.png';
import Rating_StarBox from 'src/assets/rating/Rating_StarBox.png';
import Button from 'src/components/common/Button';

const ImageGroup = styled.image`
  .picture {
    width: 480px;
    height: 480px;
    position: absolute;
    margin-left: 4rem;
  }
  .box {
    width: 450px;
    height: 400px;
    position: absolute;
    margin-top: 2rem;
    margin-left: 36rem;
  }
  .star1 {
    width: 54px;
    height: 54px;
    position: absolute;
    margin-top: 3.2rem;
    margin-left: 42.2rem;
  }
  .starbox {
    width: 314px;
    height: 64px;
    position: absolute;
    margin-top: 3rem;
    margin-left: 41rem;
  }
  margin-top: 3rem;
  margin-left: 10rem;
`;

const RatingImageGroup = () => {
  return (
    <ImageGroup>
      <img className="picture" src={Rating_Picture} alt="Picture" />
      <img className="box" src={Rating_Box} alt="Box" />
      <img className="starbox" src={Rating_StarBox} alt="StarBox" />
      <img className="star1" src={Rating_Star} alt="Star" />
      <Button color="yellow" margin_left="26rem" margin_top="34rem">
        Share on Social Media
      </Button>
    </ImageGroup>
  );
};

export default RatingImageGroup;
