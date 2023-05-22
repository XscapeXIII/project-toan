import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, generatePath, useNavigate } from "react-router-dom";

import { Steps, Table, Button, Space, Input, Row, Col } from "antd";
import {
  CreditCardOutlined,
  CheckCircleOutlined,
  SolutionOutlined,
  UserOutlined,
  MinusOutlined,
  PlusOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import * as S from "./styles";

import {
  deleteCartItemAction,
  updateCartIemAction,
} from "../../../redux/actions";
import { ROUTES } from "../../../constants/routes";

function CartPage() {
  const navigate = useNavigate();

  const { cartList } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const cartTotalPrice = cartList.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const tableColumn = [
    {
      title: "TÊN SẢN PHẨM",
      dataIndex: "name",
      key: "name",
      render: (_, item) => (
        <Space style={{ width: 300 }}>
          <img alt="" src={item.img} width="60px" height="auto" />
          <h3>{item.name}</h3>
        </Space>
      ),
    },
    {
      title: "GIÁ",
      dataIndex: "price",
      key: "price",
      render: (price) => `${price?.toLocaleString()} ₫`,
    },
    {
      title: "SỐ LƯỢNG",
      dataIndex: "quantity",
      key: "quantity",
      render: (quantity, item) => (
        <Space.Compact>
          <Button
            onClick={() =>
              dispatch(
                updateCartIemAction({
                  id: item.id,
                  quantity: quantity > 1 ? quantity - 1 : 1,
                })
              )
            }
            icon={<MinusOutlined />}
          />
          <Input value={quantity} readOnly style={{ width: 40 }} />
          <Button
            onClick={() =>
              dispatch(
                updateCartIemAction({
                  id: item.id,
                  quantity: quantity + 1,
                })
              )
            }
            icon={<PlusOutlined />}
          />
        </Space.Compact>
      ),
    },
    {
      title: "TẠM TÍNH",
      dataIndex: "total",
      key: "total",
      render: (_, item) =>
        `${(item.price * item.quantity)?.toLocaleString()} ₫`,
    },
    {
      dataIndex: "action",
      key: "action",
      render: (_, item) => (
        <Button
          type="outline"
          shape="circle"
          icon={<CloseOutlined />}
          onClick={() => dispatch(deleteCartItemAction({ id: item.id }))}
        />
      ),
    },
  ];

  const tableTotalColumn = [
    {
      title: "CỘNG GIỎ HÀNG",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "",
      dataIndex: "total",
      key: "total",
      render: () => `${cartTotalPrice?.toLocaleString()} ₫`,
    },
  ];
  const dataTableTotal = [
    {
      key: "1",
      title: "Tổng tiền: ",
    },
  ];
  return (
    <S.CartWrapper>
      <Steps
        style={{ maxWidth: "720px", margin: "0 auto", padding: "16px" }}
        current={0}
        items={[
          {
            title: "Giỏ hàng",
            icon: <UserOutlined />,
          },
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

      <Row gutter={[24, 36]}>
        <Col span={16} style={{ padding: "16px" }}>
          <Table
            columns={tableColumn}
            dataSource={cartList}
            rowKey="id"
            pagination={false}
          />
          <Button
            style={{ margin: "16px 0", color: "" }}
            type="primary"
            onClick={() => navigate(ROUTES.USER.PRODUCT_LIST)}
          >
            Tiếp tục xem sản phẩm
          </Button>
        </Col>
        <Col span={8} style={{ padding: "16px" }}>
          <Table
            columns={tableTotalColumn}
            dataSource={dataTableTotal}
            rowKey="id"
            pagination={false}
          />
          <Button
            type="primary"
            style={{ margin: "16px auto" }}
            block
            disabled={!cartList.length}
            // disabled={cartList.length === 0}
            onClick={() => navigate(ROUTES.USER.CHECKOUT_INFO)}
          >
            TIẾN HÀNH THANH TOÁN
          </Button>
        </Col>
      </Row>
    </S.CartWrapper>
  );
}

export default CartPage;
