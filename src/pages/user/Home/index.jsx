import { useEffect, useMemo } from "react";
import { Link, generatePath } from "react-router-dom";

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
} from "../../../redux/actions";

import { ROUTES } from "../../../constants/routes";
import { PRODUCT_HOME } from "../../../constants/paging";

function HomeWrapper() {
  const prevArrow = <Button type="primary">Previous</Button>;
  const nextArrow = <Button type="primary">Next</Button>;
  const { productList } = useSelector((state) => state.product);
  const { categoryList } = useSelector((state) => state.category);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductListAction({ page: 1, limit: PRODUCT_HOME }));
    dispatch(getCategoryListAction());
  }, []);

  const handleAddToCard = (product) => {
    dispatch(
      addToCartAction({
        id: parseInt(product.id),
        name: product.name,
        price: product.price,
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
            <Card
              title={item.category?.name}
              size="small"
              style={{ textAlign: "center" }}
            >
              <img alt="" src={item.img} />
              <p>{item.name}</p>
              <p>{item.price.toLocaleString()} VNĐ</p>
              <Button onClick={() => handleAddToCard(item)}>
                Thêm vào giỏ hàng
              </Button>
            </Card>
          </Link>
        </Col>
      );
    });
  }, [productList.data]);

  const renderProductListMan = () => {
    return (
      <div>
        <img
          style={{ width: "100%", height: "100%" }}
          alt=""
          src="https://luxurywatchvip.vn/wp-content/uploads/2022/05/Banchaynhat_Men2-500x618.jpg"
        />
      </div>
    );
  };
  const renderProductListWomen = () => {
    return (
      <div>
        <img
          style={{ width: "100%", height: "100%" }}
          alt=""
          src="https://luxurywatchvip.vn/wp-content/uploads/2022/05/Banchaynhat_Lady2-768x949.jpg"
        />
      </div>
    );
  };

  const renderCategoryListHome = useMemo(() => {
    return categoryList.data.map((item) => {
      return (
        <Col key={item.id} xs={8}>
          <Link
            to={
              generatePath(ROUTES.USER.PRODUCT_LIST, { id: item.id }) +
              `?filter=${item.id}`
            }
          >
            <Card value={item.id} title={item.name} size="small">
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
        <Col span={12}>{renderProductListMan()}</Col>
        <Col span={12}>{renderProductListWomen()}</Col>
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
