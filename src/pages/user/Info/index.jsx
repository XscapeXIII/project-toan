import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import {
  Steps,
  Form,
  Select,
  Card,
  Input,
  Row,
  Col,
  Divider,
  Button,
  Space,
  Table,
  Radio,
} from "antd";
import {
  CreditCardOutlined,
  CheckCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import * as S from "./styles";

import {
  getCityListAction,
  getDistrictListAction,
  getWardListAction,
  orderProductAction,
  getOrderList,
} from "../../../redux/actions";
import { ROUTES } from "constants/routes";

function InfoPage() {
  const navigate = useNavigate();
  const [infoForm] = Form.useForm();
  const initialValues = {};

  useEffect(() => {
    dispatch(getCityListAction());
  }, []);

  const { cartList } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);
  const { cityList, districtList, wardList } = useSelector(
    (state) => state.location
  );
  const dispatch = useDispatch();

  const handleSubmitInfoForm = (values) => {
    console.log(values);
    dispatch(
      orderProductAction({
        data: {
          ...values,
          userId: userInfo.data.id,
          totalPrice: totalPrice,
          status: "pending",
        },
        products: cartList,
        callback: () => navigate(ROUTES.USER.CHECKOUT_SUCCESS),
      })
    );
  };

  const renderCityOptions = useMemo(() => {
    return cityList.data.map((item) => {
      return (
        <Select.Option key={item.id} value={item.code}>
          {item.name}
        </Select.Option>
      );
    });
  }, [cityList.data]);

  const renderDistrictOptions = useMemo(() => {
    return districtList.data.map((item) => {
      return (
        <Select.Option key={item.id} value={item.code}>
          {item.name}
        </Select.Option>
      );
    });
  }, [districtList.data]);

  const renderWardListOptions = useMemo(() => {
    return wardList.data.map((item) => {
      return (
        <Select.Option key={item.id} value={item.code}>
          {item.name}
        </Select.Option>
      );
    });
  }, [wardList.data]);

  const tableColumn = [
    {
      title: "Sản phẩm",
      dataIndex: "name",
      key: "name",
      render: (_, item) => `${item.name} x${item.quantity}`,
    },
    {
      title: "Tạm tính",
      dataIndex: "total",
      key: "total",
      render: (_, item) =>
        `${(item.price * item.quantity)?.toLocaleString()} ₫`,
    },
  ];

  const totalPrice = cartList.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <S.InfoWrapper>
      <Steps
        style={{ maxWidth: "720px", margin: "0 auto", padding: "16px" }}
        current={1}
        items={[
          {
            title: "Giỏ hàng",
            icon: <UserOutlined />,
          },
          // {
          //   title: "Thông tin giỏ hàng",
          //   icon: <SolutionOutlined />,
          // },
          {
            title: "Chi tiết thanh toán",
            icon: <CreditCardOutlined />,
          },
          {
            title: "Thanh toán thành công",
            icon: <CheckCircleOutlined />,
          },
        ]}
      />
      <Row gutter={[16, 16]}>
        <Col span={14}>
          <div style={{ margin: "16px auto" }}>
            <h3>THÔNG TIN GIAO HÀNG</h3>
          </div>
          <Divider
            style={{
              borderColor: "#201111",
              margin: "12px 0",
              border: "1px solid",
            }}
          />
          <Card size="small">
            <Form
              name="infoForm"
              form={infoForm}
              layout="vertical"
              initialValues={initialValues}
              onFinish={(values) => handleSubmitInfoForm(values)}
            >
              <Row gutter={[16, 16]}>
                <Col span={24}>
                  <Form.Item
                    label="Tên Người Nhận:"
                    name="fullName"
                    rules={[
                      {
                        required: true,
                        whitespace: true,
                        message: "Vui lòng điền tên người nhận hàng",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    label="Email:"
                    name="email"
                    rules={[
                      {
                        whitespace: true,
                        message: "Vui lòng điền tên người nhận hàng",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    label="Số Điện Thoại Nhận Hàng:"
                    name="phoneNumber"
                    rules={[
                      {
                        required: true,
                        whitespace: true,
                        message: "Vui lòng điền số điện thoại nhận hàng",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="Thành Phố" name="cityCode">
                    <Select
                      onChange={(value) => {
                        dispatch(getDistrictListAction({ cityCode: value }));
                        infoForm.setFieldsValue({
                          districtCode: undefined,
                          wardCode: undefined,
                        });
                      }}
                    >
                      {renderCityOptions}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="Quận Huyện" name="districtCode">
                    <Select
                      onChange={(value) => {
                        dispatch(getWardListAction({ districtCode: value }));
                        infoForm.setFieldsValue({
                          wardCode: undefined,
                        });
                      }}
                      disabled={!infoForm.getFieldValue("cityCode")}
                    >
                      {renderDistrictOptions}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="Phường Xã" name="wardCode">
                    <Select disabled={!infoForm.getFieldValue("districtCode")}>
                      {renderWardListOptions}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    label="Địa chỉ nhận hàng:"
                    name="address"
                    rules={[
                      {
                        required: true,
                        whitespace: true,
                        message: "Vui lòng điền địa chỉ nhận hàng",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    label="Thông tin bổ sung (Ghi chú đơn hàng):"
                    name="plusInfo"
                  >
                    <Input.TextArea
                      placeholder="Ghi chú đơn hàng, thời gian địa điểm nhận hàng chi tiết..."
                      autoSize={{
                        minRows: 2,
                        maxRows: 4,
                      }}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
        <Col span={10}>
          <div style={{ margin: "16px auto" }}>
            <h3>ĐƠN HÀNG</h3>
          </div>
          <Divider
            style={{
              borderColor: "#201111",
              margin: "12px 0",
              border: "1px solid",
            }}
          />
          <Card size="small">
            <Table
              columns={tableColumn}
              dataSource={cartList}
              rowKey="id"
              pagination={false}
            />
            <Divider style={{ borderColor: "black", margin: "12px 0" }} />
            <Row
              justify="space-between"
              style={{ marginLeft: "16px", marginRight: "38px" }}
            >
              <h4>Tổng:</h4>
              <h4>{totalPrice?.toLocaleString()} ₫</h4>
            </Row>
            <Divider style={{ borderColor: "black", margin: "12px 0" }} />
            <Form
              name="infoForm"
              form={infoForm}
              layout="vertical"
              initialValues={initialValues}
              onFinish={(values) => handleSubmitInfoForm(values)}
            >
              <Form.Item
                label="Phương thức thanh toán:"
                name="paymentMethod"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng chọn phương thức thanh toán!",
                  },
                ]}
              >
                <Radio.Group>
                  <Space direction="vertical">
                    <Radio value="cod">COD</Radio>
                    <Radio value="atm">ATM</Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>
            </Form>
            <Button
              type="primary"
              style={{ margin: "16px auto" }}
              block
              disabled={!cartList.length}
              // disabled={cartList.length === 0}
              onClick={() => {
                infoForm.submit();
              }}
              // onClick={() => navigate(ROUTES.USER.CHECKOUT_SUCCESS)}
            >
              ĐẶT HÀNG
            </Button>
            <p>
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our{" "}
              <Link to={ROUTES.USER.ABOUT_POLICY}>chính sách riêng tư.</Link>
            </p>
          </Card>
        </Col>
        <Button
          style={{ margin: "16px 0", color: "" }}
          type="primary"
          onClick={() => navigate(ROUTES.USER.CART_LIST)}
        >
          Về Giỏ Hàng
        </Button>
      </Row>
    </S.InfoWrapper>
  );
}

export default InfoPage;
