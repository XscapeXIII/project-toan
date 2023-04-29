import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import * as S from "./styles";

function AdminHeader({ setIsShowSidebar, isShowSidebar }) {
  const navigate = useNavigate();
  const handleLogOut = () => {
    navigate(ROUTES.USER.HOME);
  };

  return (
    <S.Headerwrapper>
      <S.Buttonsidebar
        type="primary"
        width="75px"
        onClick={() => setIsShowSidebar(!isShowSidebar)}
      >
        Menu
      </S.Buttonsidebar>
      <div>
        <button onClick={() => handleLogOut()}>Log Out</button>
      </div>
    </S.Headerwrapper>
  );
}
export default AdminHeader;
