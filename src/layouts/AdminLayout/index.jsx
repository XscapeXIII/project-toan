import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import * as S from "./styles";

import AdminHeader from "./components/Header";
import Sidebar from "./components/Sidebar";
import { ROUTES } from "../../constants/routes";

function AdminLayout() {
  const [isShowSidebar, setIsShowSidebar] = useState(true);

  const { userInfo } = useSelector((state) => state.auth);

  const accessToken = localStorage.getItem("accessToken");

  if (accessToken && userInfo.load) {
    return <div>Loading...</div>;
  } else if (userInfo.data.role !== "admin") {
    return <Navigate to={ROUTES.USER.HOME} />;
  }
  return (
    <div className="wrapper">
      <AdminHeader
        isShowSidebar={isShowSidebar}
        setIsShowSidebar={setIsShowSidebar}
      />
      <div className="container">
        <Sidebar isShowSidebar={isShowSidebar} />
        <S.MainWrapper isFull={!isShowSidebar}>
          <Outlet />
        </S.MainWrapper>
      </div>
    </div>
  );
}
export default AdminLayout;
