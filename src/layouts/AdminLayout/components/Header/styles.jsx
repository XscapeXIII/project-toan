import styled from "styled-components";

export const Headerwrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  height: 91px;
  z-index: 30;
  background-color: #5b5b5b;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

export const Buttonsidebar = styled.button`
  padding: 4px 8px;
  border: none;
  color: gray;
  border-radius: 4px;
  width: ${(props) => props.width || "auto"};
  transition: all 0.3;
  cursor: pointer;
  ${(props) => {
    switch (props.type) {
      case "primary": {
        return `
      background-color: red;
      color: white;
      border: none;
      &:hover{
        opacity: 0.7;
      }
      `;
      }
      case "outline":
      default: {
        return `
      background-color: transparent;
      border: 1px solid aqua;
      color: aqua
      &:hover{
        border: 1px solid red;
        color: red;
      }
      `;
      }
    }
  }}
`;
