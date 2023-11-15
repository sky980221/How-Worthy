import palette from 'src/utils/palette';
import { styled } from 'styled-components';
import Register_Emoticon from 'src/assets/register/Register_Emoticon.png';

const HeaderTemplateBlock = styled.div`
  width: 100%;
  height: 80px;
  text-align: left;
  background-color: ${palette.yellow[1]};
  font-size: 50px;
  font-weight: normal;
  padding-left: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: ${palette.gray[2]};
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const HeaderImage = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 30px;
`;

export const Header = () => {
  return (
    <HeaderTemplateBlock>
      How Worthy
      <HeaderImage src={Register_Emoticon} alt="Emoticon" />
    </HeaderTemplateBlock>
  );
};
