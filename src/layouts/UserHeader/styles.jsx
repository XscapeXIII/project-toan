import styled from "styled-components";

export const Headerwrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: block;
  height: 91px;
  z-index: 30;
  background-color: #5b5b5b;
`;
export const HeaderContainer = styled.div`
  display: block;
  position: relative;
`;
export const HeaderContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  max-width: 1080px;
  margin: 0 auto;
  padding: 16px;
`;
export const HeaderDropdown = styled.div`
  display: block;
  position: relative;
  background-color: black;
`;
export const HeaderDropdownNav = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  max-width: 1080px;
  margin: 0 auto;
  padding: 16px;
  max-height: 16px;
`;
