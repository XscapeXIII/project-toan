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
      <h3>thanh toan thanh cong</h3>
    </S.CheckoutSuccessWrapper>
  );
}

export default SuccessPage;
