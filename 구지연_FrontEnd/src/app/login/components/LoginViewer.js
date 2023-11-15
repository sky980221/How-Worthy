import React from 'react';
import styled from 'styled-components';
import palette from 'src/utils/palette';
import Login_Picture1 from 'src/assets/login/Login_Picture1.png';
import Login_Picture2 from 'src/assets/login/Login_Picture2.png';
import Login_Star1 from 'src/assets/login/Login_Star1.png';
import Login_Star2 from 'src/assets/login/Login_Star2.png';

const LoginViewerBlock = styled.div`
  .title {
    margin-top: 15vh;
    font-weight: 600;
    font-size: 10vh;
  }
  .content {
    margin-top: 3vh;
    font-size: 4vh;
  }
  display: flex;
  justify-content: flex-start;
  color: ${palette.black[0]};
  text-align: left;
  position: relative;
  width: fit-content;
  flex-direction: column;
`;

const ImageGroup = styled.image`
  .picture1 {
    height: 23vh;
    border-radius: 2rem;
    margin-top: 7vh;
    position: absolute;
  }
  .picture2 {
    height: 23vh;
    border-radius: 2rem;
    margin-left: 45vh;
    margin-top: 17vh;
    position: absolute;
  }
  .star1 {
    height: 20vh;
    margin-left: 23vh;
    position: absolute;
  }
  .star2 {
    height: 20vh;
    margin-left: 7vh;
    margin-top: 30vh;
    position: absolute;
  }
  margin-top: 2vh;
`;

const LoginViewer = () => {
  return (
    <LoginViewerBlock>
      <div className="title">How Worthy?</div>
      <div className="content">
        Upload your food picture and
        <br />
        See how <b>Insta-worthy</b> it is!
      </div>
      <ImageGroup>
        <img className="picture1" src={Login_Picture1} alt="Picture1" />
        <img className="picture2" src={Login_Picture2} alt="Picture2" />
        <img className="star1" src={Login_Star1} alt="Star1" />
        <img className="star2" src={Login_Star2} alt="Star2" />
      </ImageGroup>
    </LoginViewerBlock>
  );
};

export default LoginViewer;
