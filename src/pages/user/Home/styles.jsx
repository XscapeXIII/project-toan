import styled from "styled-components";

export const HomeWrapper = styled.div`
  margin: 0 auto;
  max-width: 1232px;
  padding: 16px;

  /* ${(props) =>
    props.isFull &&
    `
  margin-left: 0;
  `} */
`;

export const Carousel = styled.div`
  display: block;
  height: 300px;
  width: 100%;
  margin-bottom: 16px;
  margin: 0 auto;
  background-color: aliceblue;
`;

export const CarouselImg1 = styled.div`
  width: 100%;
  height: 300px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url("https://cdn.tgdd.vn/Files/2019/07/14/1179456/chiec-dong-ho-cua-trinh-xuan-thanh.jpg");
`;
export const CarouselImg2 = styled.div`
  width: 100%;
  height: 300px;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url("https://cdn.tgdd.vn/Files/2019/07/14/1179456/6.jpg");
`;
export const CarouselImg3 = styled.div`
  width: 100%;
  height: 300px;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url("https://cdn.tgdd.vn/Files/2019/07/14/1179456/image-top.jpg");
`;
export const CarouselImg4 = styled.div`
  width: 100%;
  height: 300px;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url("https://bizweb.dktcdn.net/100/022/676/collections/dong-ho-nam-dep-hot-nhat-thoi-trang-gia-re-moi-nhat-2021-timesstore-vn.jpg?v=1619024777520");
`;
