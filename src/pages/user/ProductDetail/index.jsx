import { useEffect, useMemo, useState } from "react";
import { useParams, Link, generatePath } from "react-router-dom";
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
} from "antd";
import moment from "moment";
import * as S from "./styles";

import { useDispatch, useSelector } from "react-redux";
import {
  getProductDetailAction,
  getProductListAction,
  getReviewListAction,
  sendReviewAction,
  addToCartAction,
} from "../../../redux/actions";
import { ROUTES } from "../../../constants/routes";
import { PRODUCT_LIMIT } from "../../../constants/paging";

function ProductDetailPage() {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const [reviewForm] = Form.useForm();

  const dispatch = useDispatch();
  const { productDetail, productList } = useSelector((state) => state.product);
  const { userInfo } = useSelector((state) => state.auth);
  const { reviewList } = useSelector((state) => state.review);
  const { categoryList } = useSelector((state) => state.category);

  const totalRate = useMemo(
    () =>
      reviewList.data.length
        ? reviewList.data
            .map((item) => item.rate)
            .reduce((total, item) => total + item)
        : 0,
    [reviewList.data]
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
          </Link>
        </Col>
      );
    });
  }, [productList.data]);

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

  const renderReviewList = useMemo(() => {
    return reviewList.data.map((item) => {
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
        img: productDetail.data.price,
      })
    );
    notification.success({
      message: "Thêm vào giỏ hàng thành công ^^!",
    });
  };

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
                <Link to={ROUTES.USER.PRODUCT_LIST}>
                  {productDetail.data.category?.name}
                </Link>
              ),
            },
          ]}
        />
        <Row>
          <Col span={8}>
            <img alt="" src={productDetail.data.img} />
          </Col>
          <Col span={16}>
            <div>
              <h1>{productDetail.data.name}</h1>
              <Space>
                <Rate value={totalRate / reviewList.data.length} disabled />
                {totalRate
                  ? `(${(totalRate / reviewList.data.length).toFixed(1)})`
                  : `(Chưa có đánh giá)`}
              </Space>
              {/* <p>{productDetail.data.category?.name}</p> */}
              <p>Thông số sản phẩm (content)</p>
              <h2>{productDetail.data.price?.toLocaleString()} ₫</h2>
              <Space>
                <InputNumber
                  min={1}
                  value={quantity}
                  onChange={(value) => setQuantity(value)}
                />
                <Button type="primary" onClick={() => handleAddToCard()}>
                  THÊM VÀO GIỎ HÀNG
                </Button>
              </Space>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Tabs
              items={[
                {
                  label: "Chi tiết về sản phẩm",
                  key: 1,
                  children: null,
                },
                {
                  label: "Đánh giá sản phẩm: ",
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
        <p>Sản Phẩm Tương Tự</p>
        <Row gutter={[16, 16]}>{renderProductListHome}</Row>
      </Spin>
    </S.ProductDetailWrapper>
  );
}

export default ProductDetailPage;
