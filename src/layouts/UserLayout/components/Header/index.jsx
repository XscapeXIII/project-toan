import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, generatePath } from "react-router-dom";

import { Dropdown, Button, Space, Badge, Divider, Search, Input } from "antd";
import { ShoppingCartOutlined, DownOutlined } from "@ant-design/icons";
import { ROUTES } from "../../../../constants/routes";
import { logoutAction } from "../../../../redux/actions";
import * as S from "./styles";

function AdminHeader() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const { cartList } = useSelector((state) => state.cart);
  const { categoryList } = useSelector((state) => state.category);

  const navigate = useNavigate();
  const cartTotalPrice = cartList.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <S.Headerwrapper>
      <S.HeaderContainer>
        <S.HeaderContent>
          <Link to={ROUTES.USER.HOME}>
            <img
              alt=""
              src="https://luxurywatchvip.vn/wp-content/uploads/2022/07/20220703-logo-trali-LW-doi-slogan-1024x777.png"
              width="60px"
              height="auto"
            />
          </Link>
          <Input placeholder="Search..." style={{ width: 250 }} />
          <div>
            <Space size={10} style={{ color: "white" }}>
              <Link to={ROUTES.USER.CART_LIST}>
                <Badge count={cartList.length} size="small">
                  <ShoppingCartOutlined
                    style={{ color: "black", fontSize: 20 }}
                  />
                  <span color="black">
                    Giỏ hàng/ {cartTotalPrice.toLocaleString()} ₫
                  </span>
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
                          <Link to={ROUTES.ADMIN.PRODUCT_MANAGEMENT}>
                            Quản Lý Sản Phẩm
                          </Link>
                        ),
                        style: {
                          display:
                            userInfo.data.role === "admin" ? "block" : "none",
                        },
                      },
                      {
                        key: "profile",
                        label: (
                          <Link to={ROUTES.USER.PROFILE}>
                            Tài khoản của tôi
                          </Link>
                        ),
                      },
                      {
                        key: "logout",
                        label: "Logout",
                        onClick: () => dispatch(logoutAction()),
                      },
                    ],
                  }}
                >
                  <h3 style={{ cursor: "pointer" }}>
                    {userInfo.data.fullName}
                  </h3>
                </Dropdown>
              ) : (
                <Button
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(ROUTES.LOGIN)}
                >
                  Đăng nhập
                </Button>
              )}
            </Space>
          </div>
        </S.HeaderContent>
      </S.HeaderContainer>
      <S.HeaderDropdown>
        <S.HeaderDropdownNav>
          <div>
            <div className="nav-link-item">
              <Dropdown
                disabled
                menu={{
                  items: [
                    {
                      key: "1",
                      label: <Link to={ROUTES.USER.HOME}>TRANG CHỦ</Link>,
                    },
                  ],
                }}
              >
                <Space size={3} style={{ cursor: "pointer" }}>
                  <Link style={{ color: "white" }} to={ROUTES.USER.HOME}>
                    TRANG CHỦ
                  </Link>
                </Space>
              </Dropdown>
            </div>
            <div className="nav-link-item">
              <Dropdown
                menu={{
                  items: [
                    {
                      key: "about",
                      label: <Link to={ROUTES.USER.ABOUT}>VỀ CHÚNG TÔI</Link>,
                    },
                    {
                      key: "2",
                      label: (
                        <Link to={ROUTES.USER.ABOUT_POLICY}>CHÍNH SÁCH</Link>
                      ),
                    },
                  ],
                }}
              >
                <Space size={2} style={{ cursor: "pointer" }}>
                  GIỚI THIỆU <DownOutlined style={{ fontSize: "12px" }} />
                </Space>
              </Dropdown>
            </div>
            <div className="nav-link-item">
              <Dropdown
                menu={{
                  items: [
                    {
                      key: "rolex",
                      label: (
                        <Link
                          to={ROUTES.USER.PRODUCT_LIST}
                          state={{ categoryId: 1 }}
                        >
                          ĐỒNG HỒ ROLEX
                        </Link>
                      ),
                    },
                    {
                      key: "hublot",
                      label: (
                        <Link
                          to={ROUTES.USER.PRODUCT_LIST}
                          state={{ categoryId: 2 }}
                        >
                          ĐỒNG HỒ HUBLOT
                        </Link>
                      ),
                    },
                    {
                      key: "patekphilippe",
                      label: (
                        <Link
                          to={ROUTES.USER.PRODUCT_LIST}
                          state={{ categoryId: 3 }}
                        >
                          ĐỒNG HỒ PATEK PHILIPPE
                        </Link>
                      ),
                    },
                    {
                      key: "franck muller",
                      label: (
                        <Link
                          to={ROUTES.USER.PRODUCT_LIST}
                          state={{ categoryId: 4 }}
                        >
                          ĐỒNG HỒ FRANCK MULLER
                        </Link>
                      ),
                    },
                    {
                      key: "omega",
                      label: (
                        <Link
                          to={ROUTES.USER.PRODUCT_LIST}
                          state={{ categoryId: 5 }}
                        >
                          ĐỒNG HỒ OMEGA
                        </Link>
                      ),
                    },
                    {
                      key: "longines",
                      label: (
                        <Link
                          to={ROUTES.USER.PRODUCT_LIST}
                          state={{ categoryId: 6 }}
                        >
                          ĐỒNG HỒ LONGINES
                        </Link>
                      ),
                    },
                    {
                      key: "breitling",
                      label: (
                        <Link
                          to={ROUTES.USER.PRODUCT_LIST}
                          state={{ categoryId: 7 }}
                        >
                          ĐỒNG HỒ BREITLING
                        </Link>
                      ),
                    },
                    {
                      key: "jlc",
                      label: (
                        <Link
                          to={ROUTES.USER.PRODUCT_LIST}
                          state={{ categoryId: 8 }}
                        >
                          ĐỒNG HỒ JLC
                        </Link>
                      ),
                    },
                    {
                      key: "zenith",
                      label: (
                        <Link
                          to={ROUTES.USER.PRODUCT_LIST}
                          state={{ categoryId: 9 }}
                        >
                          ĐỒNG HỒ ZENITH
                        </Link>
                      ),
                    },
                  ],
                }}
              >
                <Space size={3} style={{ cursor: "pointer" }}>
                  <Link
                    style={{ color: "white" }}
                    to={ROUTES.USER.PRODUCT_LIST}
                  >
                    DANH SÁCH SẢN PHẨM
                  </Link>
                  <DownOutlined style={{ fontSize: "12px" }} />
                </Space>
              </Dropdown>
            </div>
          </div>
        </S.HeaderDropdownNav>
      </S.HeaderDropdown>
    </S.Headerwrapper>
  );
}
export default AdminHeader;
