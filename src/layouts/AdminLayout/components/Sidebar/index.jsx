import { useLocation } from "react-router-dom";
import * as S from "./styles";

import { ROUTES } from "../../../../constants/routes";

const SIDEBAR_ITEMS = [
  {
    label: "Dashboard",
    path: ROUTES.ADMIN.DASHBOARD,
  },
  {
    label: "Quản lý sản phẩm",
    path: ROUTES.ADMIN.PRODUCT_MANAGEMENT,
  },
  {
    label: "Chỉnh sửa sản phẩm",
    path: ROUTES.ADMIN.UPDATE_PRODUCT,
  },
];

function Sidebar(props) {
  const { isShowSidebar } = props;

  const { pathname } = useLocation();

  const renderSidebarItems = () => {
    return SIDEBAR_ITEMS.map((item, index) => {
      return (
        <S.SidebarItem
          key={index}
          to={item.path}
          active={pathname === item.path}
          style={{ margin: "6px" }}
        >
          {item.label}
        </S.SidebarItem>
      );
    });
  };

  return (
    <S.SidebarWrapper isShow={isShowSidebar}>
      {renderSidebarItems()}
    </S.SidebarWrapper>
  );
}
export default Sidebar;
