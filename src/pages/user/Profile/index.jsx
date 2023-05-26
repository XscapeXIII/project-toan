import { Tabs, Card } from "antd";

import OrderHistories from "./components/OrderHistories";
import PersonalInfo from "./components/PersonalInfo";
import FavoriteProducts from "./components/FavoriteProducts";
// import ChangePassword from "./components/ChangePassword";

import * as S from "./styles";

function Profile() {
  return (
    <S.ProfileWrapper>
      <Card bordered={false} size="small">
        <Tabs
          style={{ marginTop: "16px" }}
          tabPosition="left"
          items={[
            {
              label: "Thông Tin Tài Khoản",
              key: 1,
              children: <PersonalInfo />,
            },
            {
              label: "Lịch Sử Mua Hàng",
              key: 2,
              children: <OrderHistories />,
            },
            {
              label: "Sản Phẩm Ưa Thích",
              key: 3,
              children: <FavoriteProducts />,
            },
            // {
            //   label: "Đổi Mật Khẩu",
            //   key: 4,
            //   children: <ChangePassword />,
            // },
          ]}
        />
      </Card>
    </S.ProfileWrapper>
  );
}

export default Profile;
