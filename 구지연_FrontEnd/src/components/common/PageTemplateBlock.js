import palette from 'src/utils/palette';
import { styled } from 'styled-components';

export const PageTemplateBlock = styled.div`
  position: relative;
  padding: 0;
  background: ${palette.white[0]};
  display: flex;
  width: 100%;
  height: 96vh;
  flex-direction: ${(props) => props.flex_direction};
  justify-content: ${(props) => props.justify_content};
  align-items: flex-start;
  box-sizing: border-box;
  overflow: hidden;
`;
