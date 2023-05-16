import { useEffect, useMemo } from "react";
import { Link, generatePath, useNavigate } from "react-router-dom";

import {
  Button,
  Card,
  Row,
  Col,
  Carousel,
  Divider,
  notification,
  Space,
} from "antd";
import * as S from "./styles";

import { useDispatch, useSelector } from "react-redux";

import {
  getProductListAction,
  addToCartAction,
  getCategoryListAction,
  getGenderListAction,
} from "../../../redux/actions";

import { ROUTES } from "../../../constants/routes";
import { PRODUCT_HOME } from "../../../constants/paging";

function HomeWrapper() {
  const prevArrow = <Button type="primary">Previous</Button>;
  const nextArrow = <Button type="primary">Next</Button>;
  const { productList } = useSelector((state) => state.product);
  const { categoryList } = useSelector((state) => state.category);
  const { genderList } = useSelector((state) => state.gender);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductListAction({ page: 1, limit: PRODUCT_HOME }));
    dispatch(getCategoryListAction());
    dispatch(getGenderListAction());
  }, []);

  const handleAddToCard = (product) => {
    dispatch(
      addToCartAction({
        id: parseInt(product.id),
        name: product.name,
        price: product.price,
        img: product.img,
        quantity: 1,
      })
    );
    notification.success({
      message: "Thêm vào giỏ hàng thành công ^^!",
    });
  };

  const renderProductListHome = useMemo(() => {
    return productList.data.map((item) => {
      return (
        <Col key={item.id} xs={6}>
          <Link
            to={generatePath(ROUTES.USER.PRODUCT_DETAIL, {
              id: item.id,
            })}
          >
            <S.CardItem>
              <Card
                title={item.category?.name}
                size="small"
                style={{
                  textAlign: "center",
                }}
              >
                <img alt="" src={item.img} />
                <p>{item.name}</p>
                <p>{item.price.toLocaleString()} ₫</p>
                <Button onClick={() => handleAddToCard(item)}>
                  Thêm vào giỏ hàng
                </Button>
              </Card>
            </S.CardItem>
          </Link>
        </Col>
      );
    });
  }, [productList.data]);

  // const renderGenderList = useMemo(() => {
  //   return genderList.data.map((item) => {
  //     return (
  //       <Col key={item.id} xs={8}>
  //         <Link
  //           to={generatePath(ROUTES.USER.PRODUCT_LIST, { id: item.id })}
  //           state={{ genderId: item.id }}
  //         >
  //           <Card
  //             value={item.id}
  //             title={item.name}
  //             size="small"
  //             style={{ textAlign: "center" }}
  //           >
  //             <img alt="" src={item.img} />
  //           </Card>
  //         </Link>
  //       </Col>
  //     );
  //   });
  // }, [genderList.data]);

  const renderCategoryListHome = useMemo(() => {
    return categoryList.data.map((item) => {
      return (
        <Col key={item.id} xs={8}>
          <Link
            //cách lưu trữ luôn cả link khi gửi
            // to={
            //   generatePath(ROUTES.USER.PRODUCT_LIST, { id: item.id }) +
            //   `?filter=${item.id}`
            to={generatePath(ROUTES.USER.PRODUCT_LIST, { id: item.id })}
            state={{ categoryId: item.id }}
          >
            <Card
              value={item.id}
              title={item.name}
              size="small"
              style={{ textAlign: "center" }}
            >
              <img alt="" src={item.img} />
            </Card>
          </Link>
        </Col>
      );
    });
  }, [categoryList.data]);

  return (
    <S.HomeWrapper>
      <S.Carousel>
        <Carousel
          autoplay
          pauseOnHover
          pauseOnDotsHover
          draggable
          prevArrow={prevArrow}
          nextArrow={nextArrow}
        >
          <S.CarouselImg1></S.CarouselImg1>
          <S.CarouselImg2></S.CarouselImg2>
          <S.CarouselImg3></S.CarouselImg3>
          <S.CarouselImg4></S.CarouselImg4>
        </Carousel>
      </S.Carousel>
      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        {/* {renderGenderList} */}
      </Row>
      <Divider style={{ borderColor: "#5b5b5b" }}>
        <h3>THƯƠNG HIỆU NỔI BẬT</h3>
      </Divider>
      <Row gutter={[16, 16]}>{renderCategoryListHome}</Row>
      <Divider style={{ borderColor: "#5b5b5b" }}>
        <h3>SẢN PHẨM MỚI NHẤT</h3>
      </Divider>
      <Row gutter={[18, 18]}>{renderProductListHome}</Row>
      <Divider style={{ borderColor: "#5b5b5b" }}>
        <h3>TIN TỨC & SỰ KIỆN</h3>
      </Divider>
    </S.HomeWrapper>
  );
}
export default HomeWrapper;
