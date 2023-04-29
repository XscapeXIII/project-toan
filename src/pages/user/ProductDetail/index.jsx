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
} from "antd";
import moment from "moment";

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

  const renderProductList = useMemo(() => {
    return productList.data.map((item) => {
      return (
        <Col key={item.id} xs={12} xl={8}>
          <Link to={generatePath(ROUTES.USER.PRODUCT_DETAIL, { id: item.id })}>
            <Card title={item.name} size="small">
              <p>{productDetail.data.category?.name}</p>
              <p>{item.price.toLocaleString()} VNĐ</p>
            </Card>
          </Link>
        </Col>
      );
    });
  }, [productDetail.data.category?.name, productList.data]);

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
      })
    );
    notification.success({
      message: "Thêm vào giỏ hàng thành công ^^!",
    });
  };

  return (
    <Spin spinning={productDetail.load}>
      <div>
        <h3>{productDetail.data.name}</h3>
        <Space>
          <Rate value={totalRate / reviewList.data.length} disabled />
          <span>{`(${(totalRate / reviewList.data.length).toFixed(1)})`}</span>
          <span></span>
        </Space>
        <p>{productDetail.data.category?.name}</p>
        <p>{productDetail.data.price?.toLocaleString()} VND</p>

        <div>
          <InputNumber
            min={1}
            value={quantity}
            onChange={(value) => setQuantity(value)}
          />
        </div>
        <div>
          <Button type="primary" onClick={() => handleAddToCard()}>
            Add to Cart
          </Button>
        </div>
        <div>Đánh giá sản phẩm: </div>
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
      </div>
      <p>Sản Phẩm Tương Tự</p>
      <Row gutter={[16, 16]}>{renderProductList}</Row>
    </Spin>
  );
}

export default ProductDetailPage;
