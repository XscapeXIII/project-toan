import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const SidebarWrapper = styled.div`
  position: absolute;
  margin-top: 56px;
  left: -300px;
  padding: 16px;
  width: 300px;
  height: calc(100% - 56px);
  background-color: #126969;
  overflow: hidden;
  transition: all 0.4s;

  ${(props) =>
    props.isShow &&
    css`
      left: 0;
    `}
`;

export const SidebarItem = styled(Link)`
  display: block;
  text-decoration: none;
  color: black;
  padding: 4px 8px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #2db564;
  }
  ${(props) =>
    props.active &&
    css`
      background-color: #0fd961;
    `}
`;
