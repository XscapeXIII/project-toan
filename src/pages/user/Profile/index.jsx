import { useNavigate } from "react-router-dom";
import { Tabs, Card } from "antd";

import OrderHistories from "./components/OrderHistories";
import PersonalInfo from "./components/PersonalInfo";

import * as S from "./styles";

function Profile() {
  return (
    <S.ProfileWrapper>
      <Card size="small" bordered={false} style={{ marginTop: 24 }}>
        <Tabs
          tabPosition="left"
          items={[
            {
              label: "Thông tin cá nhân",
              key: 1,
              children: <PersonalInfo />,
            },
            {
              label: "Lịch sử mua hàng",
              key: 2,
              children: <OrderHistories />,
            },
          ]}
        />
      </Card>
    </S.ProfileWrapper>
  );
}

export default Profile;
