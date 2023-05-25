import { Steps } from "antd";
import {
  CreditCardOutlined,
  CheckCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import * as S from "./styles";

function SuccessPage() {
  return (
    <S.CheckoutSuccessWrapper>
      <Steps
        style={{ maxWidth: "720px", margin: "0 auto", padding: "16px" }}
        current={2}
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/148929/Originals/tich_xanh_titktok_2.png"
          alt=""
          width="300px"
          height="auto"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3>Quý Khách Đã Đặt Hàng Thành công !</h3>
      </div>
    </S.CheckoutSuccessWrapper>
  );
}

export default SuccessPage;
