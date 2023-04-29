import styled from "styled-components";

export const Headerwrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  height: 56px;
  z-index: 99;
  background-color: ${(props) => props.theme.header};
`;
