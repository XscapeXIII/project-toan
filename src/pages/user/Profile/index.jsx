import { useNavigate } from "react-router-dom";
import { Tabs } from "antd";

import OrderHistories from "./components/OrderHistories";

import * as S from "./styles";

function Profile() {
  return (
    <S.ProfileWrapper>
      <Tabs
        style={{ marginTop: "16px" }}
        tabPosition="left"
        items={[
          {
            label: "Thông tin cá nhân",
            key: 1,
            children: null,
          },
          {
            label: "Lịch sử mua hàng",
            key: 2,
            children: <OrderHistories />,
          },
        ]}
      />
    </S.ProfileWrapper>
  );
}

export default Profile;
