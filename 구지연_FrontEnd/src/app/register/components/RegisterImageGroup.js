import React from 'react';
import styled from 'styled-components';
import Register_Picture from 'src/assets/register/Register_Picture.png';
import Register_Box from 'src/assets/register/Register_Box.png';
import Register_Text from 'src/assets/register/Register_Text.png';

const ImageGroup = styled.image`
  .picture {
    width: 420px;
    height: 380px;
    position: absolute;
    margin-left: 4rem;
  }
  .box {
    width: 550px;
    height: 170px;
    position: absolute;
    margin-top: 23rem;
  }
  .text {
    width: 420px;
    height: 120px;
    position: absolute;
    margin-top: 24.5rem;
    margin-left: 4rem;
  }
  margin-top: 5rem;
  margin-left: 5rem;
`;

const RegisterImageGroup = () => {
  return (
    <ImageGroup>
      <img className="picture" src={Register_Picture} alt="Picture" />
      <img className="box" src={Register_Box} alt="Box" />
      <img className="text" src={Register_Text} alt="Text" />
    </ImageGroup>
  );
};

export default RegisterImageGroup;
