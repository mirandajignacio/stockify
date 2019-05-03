import styled from "styled-components";

const Papper = styled.div`
  border: 0;
  box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
  background-color: ${props => props.theme.white};
  padding: 40px;
  margin: 12px;
  border-radius: 4px;
  width: 400px;
  display: flex;
  flex-direction: column;
`;

export default Papper;
