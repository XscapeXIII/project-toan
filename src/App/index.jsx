import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ConfigProvider } from "antd";
import jwtDecode from "jwt-decode";
import "moment/locale/vi";

import { ThemeProvider } from "styled-components";

import "../App.css";

import AdminLayout from "../layouts/AdminLayout";
import UserLayout from "../layouts/UserLayout";
import FormLayout from "../layouts/FormLayout";

import Dashboard from "../pages/admin/Dashboard";
import ProductManagementPage from "../pages/admin/ProductManagement";
import CreateProductPage from "../pages/admin/CreateProduct";
// import UpdateProductPage from "../pages/admin/UpdateProduct";

import { ROUTES } from "../constants/routes";
import { getUserInfoAction } from "../redux/actions";

import HomePage from "../pages/user/Home";
import ProductListPage from "../pages/user/ProductList";
import AboutPage from "../pages/user/About";
import AboutPagePolicy from "../pages/user/AboutPolicy";
import New1Page from "../pages/user/New1";
import New2Page from "../pages/user/New2";
import New3Page from "../pages/user/New3";
import New4Page from "../pages/user/New4";
import CartPage from "../pages/user/Cart";
import InfoPage from "../pages/user/Info";
import SuccessPage from "../pages/user/CheckoutSuccess";
import ProfilePage from "../pages/user/Profile";
import ProductDetailPage from "../pages/user/ProductDetail";

import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";

import { dark, light } from "../themes";

import { useSelector, useDispatch } from "react-redux";

function App() {
  const { theme } = useSelector((state) => state.common);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      const tokenData = jwtDecode(accessToken);
      dispatch(getUserInfoAction({ id: tokenData.sub }));
    }
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "",
        },
      }}
    >
      <ThemeProvider theme={theme === "light" ? light : dark}>
        <Routes>
          <Route element={<AdminLayout />}>
            <Route path={ROUTES.ADMIN.DASHBOARD} element={<Dashboard />} />
            <Route
              path={ROUTES.ADMIN.PRODUCT_MANAGEMENT}
              element={<ProductManagementPage />}
            />
            <Route
              path={ROUTES.ADMIN.CREATE_PRODUCT}
              element={<CreateProductPage />}
            />
            {/* <Route
              path={ROUTES.ADMIN.UPDATE_PRODUCT}
              element={<UpdateProductPage />}
            /> */}
          </Route>
          <Route element={<UserLayout />}>
            <Route path={ROUTES.USER.HOME} element={<HomePage />} />
            <Route
              path={ROUTES.USER.PRODUCT_LIST}
              element={<ProductListPage />}
            />
            <Route path={ROUTES.USER.ABOUT} element={<AboutPage />} />
            <Route
              path={ROUTES.USER.ABOUT_POLICY}
              element={<AboutPagePolicy />}
            />
            <Route path={ROUTES.USER.CART_LIST} element={<CartPage />} />
            <Route path={ROUTES.USER.CHECKOUT_INFO} element={<InfoPage />} />
            <Route path={ROUTES.USER.PROFILE} element={<ProfilePage />} />
            <Route path={ROUTES.USER.NEWS_1} element={<New1Page />} />
            <Route path={ROUTES.USER.NEWS_2} element={<New2Page />} />
            <Route path={ROUTES.USER.NEWS_3} element={<New3Page />} />
            <Route path={ROUTES.USER.NEWS_4} element={<New4Page />} />

            <Route
              path={ROUTES.USER.CHECKOUT_SUCCESS}
              element={<SuccessPage />}
            />
            <Route
              path={ROUTES.USER.PRODUCT_DETAIL}
              element={<ProductDetailPage />}
            />
          </Route>
          <Route element={<FormLayout />}>
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
          </Route>
          <Route path="*" element={<div>404 not found</div>} />
        </Routes>
      </ThemeProvider>
    </ConfigProvider>
  );
}
export default App;
