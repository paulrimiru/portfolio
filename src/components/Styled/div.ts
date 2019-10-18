import styled from 'vue-styled-components';

const divProps = { background: String };

export const StyledDiv = styled('div', divProps)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  object-fit: cover;
  color: #fff;
  background: linear-gradient(rgba(117, 78, 249,0), rgba(117, 78, 249,1)), url(${(props) => props.background})
`;
