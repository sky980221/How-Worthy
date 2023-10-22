import React from 'react';
import styled from 'styled-components';
import Post_Box from 'src/assets/post/Post_Box.png';
import Post_Emoticon from 'src/assets/post/Post_Emoticon.png';
import Button from 'src/components/common/Button';

const ImageGroup = styled.image`
  .emoticon {
    width: 130px;
    height: 130px;
    position: absolute;
    margin-left: 45rem;
    margin-top: 4rem;
  }
  .box {
    width: 1200px;
    height: 350px;
    position: absolute;
    margin-left: 10rem;
  }
  .text {
    width: 420px;
    height: 120px;
    position: absolute;
    margin-top: 24.5rem;
    margin-left: 4rem;
  }
  margin-top: 2rem;
`;

const PostImageGroup = () => {
  return (
    <ImageGroup>
      <img className="box" src={Post_Box} alt="Box" />
      <img className="emoticon" src={Post_Emoticon} alt="Emoticon" />
      <Button color="gray" margin_top="13rem" margin_left="41rem">
        Choose Files
      </Button>
      <Button color="none" margin_top="18rem" margin_left="42.3rem">
        Or Drop Files Here
      </Button>
      <Button color="gray" margin_top="24rem" margin_left="40.7rem">
        Get Feedback
      </Button>
    </ImageGroup>
  );
};

export default PostImageGroup;
