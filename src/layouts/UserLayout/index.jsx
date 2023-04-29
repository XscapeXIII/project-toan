import { Outlet } from "react-router-dom";
import * as S from "./styles";
import UserHeader from "../UserHeader";
import Footer from "../Footer";

function UserLayout() {
  return (
    <div className="wrapper">
      <UserHeader />
      <S.MainWrapper>
        <Outlet />
      </S.MainWrapper>
      <Footer />
    </div>
  );
}
export default UserLayout;
