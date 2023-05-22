import { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import { getOrderList } from "redux/actions";

const OrderHistories = () => {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);
  const { orderList } = useSelector((state) => state.order);

  useEffect(() => {
    if (userInfo.data.id) {
      dispatch(getOrderList({ userId: userInfo.data.id }));
    }
  }, [dispatch, userInfo.data.id]);

  const tableColumns = [
    {
      title: "Mã đơn hàng",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Số lượng sản phẩm",
      dataIndex: "orderDetails",
      key: "orderDetails",
      render: (orderDetails) => `${orderDetails.length} Sản Phẩm`,
    },
    {
      title: "Tổng tiền",
      dataIndex: "totalPrice",
      key: "totalPrice",
      render: (totalPrice) => `${totalPrice.toLocaleString()} VND`,
    },
    {
      title: "Ngày đặt hàng",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (createdAt) => moment(createdAt).format("DD/MM/YYYY HH:mm"),
    },
  ];

  return (
    <Table
      columns={tableColumns}
      dataSource={orderList.data}
      rowKey="id"
      pagination={false}
      expandable={{
        expandedRowRender: (record) => (
          <ul>
            {record.orderDetails.map((item) => (
              <li key={item.id}>
                {item.img && (
                  <img alt="" src={item.img} width="60px" height="auto" />
                )}
                {item.name}
                {` - ${item.price}`}
                {` - ${item.quantity}`}
                {` - ${item.price * item.quantity}`}
              </li>
            ))}
          </ul>
        ),
      }}
    />
  );
};

export default OrderHistories;
