import { useEffect, useMemo } from "react";
import { Link, generatePath, useNavigate } from "react-router-dom";

import { Button, Card, Row, Col, Carousel, Divider, notification } from "antd";
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
                {/* //thay img bang div css vào background */}
                <img key={item.id} alt="" src={item?.images[0]?.url} />
                <p>{item.name}</p>
                <h4 style={{ color: "orange" }}>
                  {item.price.toLocaleString()} ₫
                </h4>
                <Button
                  type="outline"
                  style={{ backgroundColor: "grey" }}
                  onClick={() => handleAddToCard(item)}
                >
                  Thêm vào giỏ hàng
                </Button>
              </Card>
            </S.CardItem>
          </Link>
        </Col>
      );
    });
  }, [productList.data]);

  const renderGenderList = useMemo(() => {
    return genderList.data.map((item) => {
      return (
        <Col key={item.id} span={12}>
          <Link
            to={generatePath(ROUTES.USER.PRODUCT_LIST, { id: item.id })}
            state={{ genderId: item.id }}
          >
            <img
              alt=""
              src={item.img}
              style={{ width: "100%", height: "auto" }}
            />
          </Link>
        </Col>
      );
    });
  }, [genderList.data]);

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
      <Row
        gutter={[16, 16]}
        style={{ marginTop: 16, width: "100%" }}
        justify="center"
      >
        {renderGenderList}
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
      <Row gutter={[16, 16]} style={{ marginBottom: "32px" }}>
        <Col span={12}>
          <Link to={ROUTES.USER.NEWS_1} style={{ color: "black" }}>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <img
                  alt=""
                  src="https://luxurywatchvip.vn/wp-content/uploads/2023/01/hublot-big-bang-one-click-sang-bleu-steel-blue-diamonds-39mm-6-300x225.jpeg"
                />
              </Col>
              <Col span={12}>
                <h3>Blue - Nghệ thuật hòa quyện cùng thời gian</h3>
                <Divider style={{ borderColor: "#ccb6b6", margin: "6px" }} />
                <span>
                  Review đồng hồ Hublot là chủ đề được nhiều người quan tâm
                  [...]
                </span>
              </Col>
            </Row>
          </Link>
        </Col>
        <Col span={12}>
          <Link to={ROUTES.USER.NEWS_2} style={{ color: "black" }}>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <img
                  alt=""
                  src="https://luxurywatchvip.vn/wp-content/uploads/2022/12/dong-ho-omega-speedmaster-chronoscope-co-axial-master-chronometer-chronograph-2021-05-chronoscope-dial-300x169.jpeg"
                />
              </Col>
              <Col span={12}>
                <h3>
                  Chronometer và Chứng nhận COSC là gì và có giá trị thế nào?
                </h3>
                <Divider style={{ borderColor: "#ccb6b6", margin: "6px" }} />
                <span>
                  Đồng hồ Chronometer là gì? Bất kỳ tay chơi đồng hồ Thụy Sĩ cao
                  cấp[...]
                </span>
              </Col>
            </Row>
          </Link>
        </Col>
        <Col span={12}>
          <Link to={ROUTES.USER.NEWS_3} style={{ color: "black" }}>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <img
                  alt=""
                  src="https://luxurywatchvip.vn/wp-content/uploads/2022/12/Dong-ho-Rolex-mat-so-hoa-300x216.png"
                />
              </Col>
              <Col span={12}>
                <h3>
                  Khám phá kho mặt số họa tiết phong phú của thương hiệu đồng hồ
                  Rolex
                </h3>
                <Divider style={{ borderColor: "#ccb6b6", margin: "6px" }} />
                <span>
                  Khám phá họa tiết phong phú của mặt số Rolex đang là chủ đề
                  được [...]
                </span>
              </Col>
            </Row>
          </Link>
        </Col>
        <Col span={12}>
          <Link to={ROUTES.USER.NEWS_4} style={{ color: "black" }}>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <img
                  alt=""
                  src="https://luxurywatchvip.vn/wp-content/uploads/2022/12/images-300x187.jpeg"
                />
              </Col>
              <Col span={12}>
                <h3>Đồng hồ Patek Philippe xa xỉ cỡ nào?</h3>
                <Divider style={{ borderColor: "#ccb6b6", margin: "6px" }} />
                <span>
                  Patek Philippe là một thương hiệu đồng hồ nổi tiếng với những
                  chiếc đồng hồ [...]
                </span>
              </Col>
            </Row>
          </Link>
        </Col>
      </Row>
    </S.HomeWrapper>
  );
}
export default HomeWrapper;
