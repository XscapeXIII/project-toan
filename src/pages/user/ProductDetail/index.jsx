import { useEffect, useMemo, useState } from "react";
import { useParams, Link} from "react-router-dom";
import {
  Spin,
  Row,
  Col,
  Card,
  InputNumber,
  Input,
  Button,
  Form,
  Rate,
  Space,
  notification,
  Breadcrumb,
  Tabs,
  Divider,
  Carousel,
} from "antd";
import {
  ShoppingCartOutlined,
  HeartOutlined,
  HeartFilled,
} from "@ant-design/icons";
import moment from "moment";
import * as S from "./styles";

import { SimpleSlider } from "./SimpleSlider";

import { useDispatch, useSelector } from "react-redux";
import {
  getProductDetailAction,
  getProductListAction,
  getReviewListAction,
  sendReviewAction,
  addToCartAction,
  favoriteProductAction,
  unFavoriteProductAction,
} from "../../../redux/actions";
import { ROUTES } from "../../../constants/routes";
import { PRODUCT_LIMIT } from "../../../constants/paging";

function ProductDetailPage() {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const [reviewForm] = Form.useForm();

  const dispatch = useDispatch();
  const { productDetail } = useSelector((state) => state.product);
  const { userInfo } = useSelector((state) => state.auth);
  const { reviewList } = useSelector((state) => state.review);

  const totalRate = useMemo(
    () =>
      reviewList.data.length
        ? reviewList.data
            ?.map((item) => item.rate)
            .reduce((total, item) => total + item)
        : 0,
    [reviewList.data]
  );

  const isLike = useMemo(
    () =>
      productDetail.data.favorites?.findIndex(
        (item) => item.userId === userInfo.data.id
      ) !== -1,
    [productDetail.data.favorites, userInfo.data.id]
  );

  useEffect(() => {
    dispatch(getProductDetailAction({ id: id }));
    dispatch(getReviewListAction({ productId: id }));
    dispatch(
      getProductListAction({
        page: 1,
        limit: PRODUCT_LIMIT,
      })
    );
  }, [dispatch, id]);

  // const renderProductList = useMemo(() => {
  //   return productList.data.map((item) => {
  //     return (
  //       <Col key={item.id} xs={6}>
  //         <Link to={generatePath(ROUTES.USER.PRODUCT_DETAIL, { id: item.id })}>
  //           <Card
  //             title={item.category?.name}
  //             size="small"
  //             style={{ textAlign: "center" }}
  //           >
  //             <img key={item.id} alt="" src={item?.images[0]?.url} />
  //             <p>{item.name}</p>
  //             <p>{item.price.toLocaleString()} ₫</p>
  //             <Button onClick={() => handleAddToCard(item)}>
  //               Thêm vào giỏ hàng
  //             </Button>
  //           </Card>
  //         </Link>
  //       </Col>
  //     );
  //   });
  // }, [productList.data]);

  const handleReview = (values) => {
    dispatch(
      sendReviewAction({
        data: {
          ...values,
          userId: userInfo.data.id,
          productId: parseInt(id),
        },
        callback: () => reviewForm.resetFields(),
      })
    );
  };

  const handleToggleFavorite = () => {
    if (userInfo.data.id) {
      if (isLike) {
        const favoriteData = productDetail.data.favorites?.find(
          (item) => item.userId === userInfo.data.id
        );
        dispatch(
          unFavoriteProductAction({
            id: favoriteData.id,
            productId: productDetail.data.id,
          })
        );
      } else {
        dispatch(
          favoriteProductAction({
            productId: productDetail.data.id,
            userId: userInfo.data.id,
          })
        );
      }
    } else {
      notification.error({
        message: "Vui lòng đăng nhập để thực hiện chức năng này!",
      });
    }
  };

  const renderReviewList = useMemo(() => {
    return reviewList.data?.map((item) => {
      return (
        <Card size="small" key={item.id}>
          <Space>
            <h3>{item.user.fullName}</h3>
            <span>{moment(item.createdAt).fromNow()}</span>
          </Space>
          <div>
            <Rate value={item.rate} disabled style={{ fontSize: 12 }} />
          </div>
          <p>{item.comment}</p>
        </Card>
      );
    });
  }, [reviewList.data]);

  const handleAddToCard = () => {
    dispatch(
      addToCartAction({
        id: parseInt(id),
        name: productDetail.data.name,
        price: productDetail.data.price,
        quantity: quantity,
        img: productDetail.data.images[0]?.url,
      })
    );
    notification.success({
      message: "Thêm vào giỏ hàng thành công ^^!",
    });
  };

  const renderProductImages = useMemo(() => {
    return productDetail.data?.images?.map((item) => {
      return <img key={item.id} alt="" src={item.url} />;
    });
  }, [productDetail.data.images]);

  return (
    <S.ProductDetailWrapper>
      <Spin spinning={productDetail.load}>
        <Breadcrumb
          items={[
            {
              title: <Link to={ROUTES.USER.HOME}>TRANG CHỦ</Link>,
            },

            {
              title: (
                <Link to={ROUTES.USER.PRODUCT_LIST}>DANH SÁCH SẢN PHẨM</Link>
              ),
            },
            {
              title: (
                <Link
                  to={ROUTES.USER.PRODUCT_LIST}
                  state={{ categoryId: productDetail.data.category?.id }}
                >
                  {productDetail.data.category?.name}
                </Link>
              ),
            },
            {
              title: productDetail.data.name,
            },
          ]}
        />
        <Row gutter={[16, 16]} style={{ marginTop: "16px" }}>
          <Col span={10}>
            <Carousel autoplay pauseOnHover pauseOnDotsHover draggable>
              {renderProductImages}
            </Carousel>
          </Col>
          <Col span={14}>
            <div>
              <h1>{productDetail.data.name}</h1>
              <Space>
                <Rate value={totalRate / reviewList.data.length} disabled />
                {totalRate
                  ? `(${(totalRate / reviewList.data.length).toFixed(1)})`
                  : `(Chưa có đánh giá)`}
              </Space>
              {/* <p>{productDetail.data.category?.name}</p> */}
              <span
                dangerouslySetInnerHTML={{
                  __html: productDetail.data.miniContent,
                }}
              />
              <h2>{productDetail.data.price?.toLocaleString()} ₫</h2>
              <Space>
                <InputNumber
                  min={1}
                  value={quantity}
                  onChange={(value) => setQuantity(value)}
                />
                <Button
                  type="primary"
                  icon={<ShoppingCartOutlined />}
                  onClick={() => handleAddToCard()}
                >
                  THÊM VÀO GIỎ HÀNG
                </Button>
                <Button
                  size="large"
                  danger={isLike}
                  icon={isLike ? <HeartFilled /> : <HeartOutlined />}
                  onClick={() => handleToggleFavorite()}
                >
                  {productDetail.data?.favorites?.length || 0} Ưa Thích
                </Button>
              </Space>
            </div>
          </Col>
        </Row>
        <Row justify="center" style={{ display: "flex" }}>
          <Col span={24}>
            <Tabs
              items={[
                {
                  label: "Chi tiết về sản phẩm",
                  key: 1,
                  children: (
                    <span
                      dangerouslySetInnerHTML={{
                        __html: productDetail.data.content,
                      }}
                    />
                  ),
                },
                {
                  label: "Review sản phẩm",
                  key: 2,
                  children: (
                    <div>
                      {userInfo.data.id && (
                        <Card title="Review" size="small">
                          <Form
                            form={reviewForm}
                            name="reviewForm"
                            layout="vertical"
                            autoComplete="off"
                            onFinish={(values) => handleReview(values)}
                          >
                            <Form.Item
                              label="Rate"
                              name="rate"
                              rules={[
                                {
                                  required: true,
                                  message: "Pls choose ur rate !",
                                },
                              ]}
                            >
                              <Rate />
                            </Form.Item>
                            <Form.Item
                              label="Comment"
                              name="comment"
                              rules={[
                                {
                                  required: true,
                                  message: "No comment !",
                                },
                              ]}
                            >
                              <Input.TextArea
                                autoSize={{
                                  minRows: 2,
                                  maxRows: 4,
                                }}
                              />
                            </Form.Item>
                            <Button type="primary" htmlType="submit" block>
                              Gửi review sản phẩm
                            </Button>
                          </Form>
                        </Card>
                      )}
                      {renderReviewList}
                    </div>
                  ),
                },
              ]}
            ></Tabs>
          </Col>
        </Row>
        <Divider style={{ borderColor: "#5b5b5b" }}>
          <h3>SẢN PHẨM TƯƠNG TỰ</h3>
        </Divider>
        <div>
          <SimpleSlider />
        </div>
      </Spin>
    </S.ProductDetailWrapper>
  );
}

export default ProductDetailPage;
