import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, generatePath, useNavigate } from "react-router-dom";

import { Steps, Form, Select, Card, Input, Row, Col, Divider } from "antd";
import {
  CreditCardOutlined,
  CheckCircleOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import * as S from "./styles";

import {
  getCityListAction,
  getDistrictListAction,
  getWardListAction,
} from "../../../redux/actions";
import { ROUTES } from "../../../constants/routes";

function InfoPage() {
  const navigate = useNavigate();
  const [infoForm] = Form.useForm();
  const initialValues = {};

  useEffect(() => {
    dispatch(getCityListAction());
  }, []);

  const { cityList, districtList, wardList } = useSelector(
    (state) => state.location
  );
  const dispatch = useDispatch();

  const handleSubmitInfoForm = (values) => {};

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

  return (
    <S.InfoWrapper>
      <Steps
        current={1}
        items={[
          {
            title: "Giỏ hàng",
            icon: <UserOutlined />,
          },
          {
            title: "Thông tin giỏ hàng",
            icon: <SolutionOutlined />,
          },
          {
            title: "Thanh toán",
            icon: <CreditCardOutlined />,
          },
          {
            title: "Hoàn tất",
            icon: <CheckCircleOutlined />,
          },
        ]}
      />

      <Row>
        <Col span={16}>
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
              </Row>
            </Form>
          </Card>
        </Col>
        <Col span={8}></Col>
      </Row>
    </S.InfoWrapper>
  );
}

export default InfoPage;
