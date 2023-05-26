import styled from "styled-components";

export const ProductListWrapper = styled.div`
  margin: 0 auto;
  max-width: 1232px;
  padding: 16px;
`;

export const CardItem = styled.div`
  position: relative;

  & p {
    height: 63px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const CardImg = styled.div`
  padding-top: 150%;
  position: relative;
`;

export const CardContent = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
