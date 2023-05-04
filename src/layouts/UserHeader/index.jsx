import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { Dropdown, Button, Space, Badge, Divider, Search, Input } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { ROUTES } from "../../constants/routes";
import { logoutAction } from "../../redux/actions";
import * as S from "./styles";

function AdminHeader() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const { cartList } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  return (
    <S.Headerwrapper>
      <S.HeaderContainer>
        <S.HeaderContent>
          <div>Logo</div>
          <Input placeholder="Search..." style={{ width: 250 }} />
          <div>
            <Space size={10} style={{ color: "white" }}>
              <Link to={ROUTES.USER.CART_LIST}>
                <Badge count={cartList.length} size="small">
                  <ShoppingCartOutlined
                    style={{ color: "black", fontSize: 20 }}
                  />
                  <span color="black">Giỏ hàng/ 0₫</span>
                </Badge>
              </Link>
              <Divider
                type="vertical"
                style={{ borderColor: "white", fontSize: 20 }}
              />
              {userInfo.data.id ? (
                <Dropdown
                  menu={{
                    items: [
                      {
                        key: "dashboard",
                        label: (
                          <Link to={ROUTES.ADMIN.DASHBOARD}>Dashboard</Link>
                        ),
                        style: {
                          display:
                            userInfo.data.role === "admin" ? "block" : "none",
                        },
                      },
                      {
                        key: "logout",
                        label: "Logout",
                        onClick: () => dispatch(logoutAction()),
                      },
                    ],
                  }}
                >
                  <h3>{userInfo.data.fullName}</h3>
                </Dropdown>
              ) : (
                <Button onClick={() => navigate(ROUTES.LOGIN)}>
                  Đăng nhập
                </Button>
              )}
            </Space>
          </div>
        </S.HeaderContent>
      </S.HeaderContainer>
      <S.HeaderDropdown>
        <S.HeaderDropdownNav>
          <div className="nav-link">
            <div className="nav-link-item">
              <Link to={ROUTES.USER.HOME}>
                <h4>Trang chủ</h4>
              </Link>
            </div>
            <div className="nav-link-item">
              <Link to={ROUTES.USER.ABOUT}>
                <h4>Về chúng tôi</h4>
              </Link>
            </div>
            <div className="nav-link-item">
              <Link to={ROUTES.USER.PRODUCT_LIST}>
                <h4>Danh sách sản phẩm</h4>
              </Link>
            </div>
          </div>
        </S.HeaderDropdownNav>
      </S.HeaderDropdown>
    </S.Headerwrapper>
  );
}
export default AdminHeader;
