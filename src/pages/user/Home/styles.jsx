import styled from "styled-components";
import { Input } from "antd";
import { Button, Space } from "antd";

export const HomeWrapper = styled.div`
  padding: 16px;

  ${(props) =>
    props.isFull &&
    `
  margin-left: 0;
  `}
`;

export const CustomInput = styled(Input)`
  border-radius: 20px;
  width: 200px;
`;
