import * as S from "./styles";
import { Outlet } from "react-router-dom";

function FormLayout() {
  return (
    <S.LoginWrapper>
      <Outlet />
    </S.LoginWrapper>
  );
}
export default FormLayout;
