import styled, { css } from "styled-components";
import { Input } from "antd";
// import { Button, Space } from "antd";

export const MainWrapper = styled.div`
  flex: 1;
  margin-top: 56px;
  padding: 16px;
  margin-left: 300px;
  transition: all 0.4s;
  background-color: ${(props) => props.theme.main};

  ${(props) =>
    props.isFull &&
    css`
      margin-left: 0;
    `}
`;

export const CustomInput = styled(Input)`
  border-radius: 20px;
  width: 200px;
`;
