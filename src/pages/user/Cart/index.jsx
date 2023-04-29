import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Steps, Table, Button, Space, Input } from "antd";
import {
  CreditCardOutlined,
  CheckCircleOutlined,
  SolutionOutlined,
  UserOutlined,
  MinusOutlined,
  PlusOutlined,
} from "@ant-design/icons";

import {
  deleteCartItemAction,
  updateCartIemAction,
} from "../../../redux/actions";

function CartPage() {
  const { cartList } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const tableColumn = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => `${price.toLocaleString()} VND`,
    },
    {
      title: "Quantity",
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
      title: "Total",
      dataIndex: "total",
      key: "total",
      render: (_, item) =>
        `${(item.price * item.quantity).toLocaleString()} VND`,
    },
    {
      dataIndex: "action",
      key: "action",
      render: (_, item) => (
        <Button onClick={() => dispatch(deleteCartItemAction({ id: item.id }))}>
          Detele
        </Button>
      ),
    },
  ];
  return (
    <div>
      <Steps
        current={0}
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
      <Table
        columns={tableColumn}
        dataSource={cartList}
        rowKey="id"
        pagination={false}
      />
    </div>
  );
}

export default CartPage;
