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
import TodoList from "../pages/admin/TodoList";
import ToDoDetailPage from "../pages/admin/TodoDetail";

import { ROUTES } from "../constants/routes";
import { getUserInfoAction } from "../redux/actions";

import HomePage from "../pages/user/Home";
import ProductListPage from "../pages/user/ProductList";
import AboutPage from "../pages/user/About";
import AboutPagePolicy from "../pages/user/AboutPolicy";
import CartPage from "../pages/user/Cart";
import InfoPage from "../pages/user/Info";
import SuccessPage from "../pages/user/CheckoutSuccess";
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
            <Route path={ROUTES.ADMIN.TODO_LIST} element={<TodoList />} />
            <Route
              path={ROUTES.ADMIN.TODO_DETAIL}
              element={<ToDoDetailPage />}
            />
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
