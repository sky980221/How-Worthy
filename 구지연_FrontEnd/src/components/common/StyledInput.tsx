import palette from 'src/utils/palette';
import { styled } from 'styled-components';

const Title = styled.div`
  margin: 0;
  color: ${palette.black[0]};
  width: fit-content;
  margin-bottom: 5px;
  margin-left: 12px;
`;

const Input = styled.input`
  font-size: 1rem;
  border-radius: 10px;
  width: 95%;
  height: 1.5rem;
  margin-bottom: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 0.25rem;
  text-align: left;
  background-color: ${palette.yellow[2]};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

const StyledInput = ({ title, name }: { title: string; name: string }) => {
  return (
    <>
      <Title>{title}</Title>
      <Input name={name} />
    </>
  );
};

export default StyledInput;
