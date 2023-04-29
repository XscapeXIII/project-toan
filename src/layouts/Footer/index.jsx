import * as S from "./styles";
import { Button } from "antd";

import { useDispatch } from "react-redux";
import { changeThemeAction } from "../../redux/actions";

function Footer() {
  const dispatch = useDispatch();

  const handleChangeTheme = (theme) => {
    dispatch(changeThemeAction(theme));
  };

  return (
    <S.Footerwrapper>
      Footer
      <div>
        <Button
          onClick={() => {
            handleChangeTheme("light");
          }}
        >
          Light
        </Button>
        <Button
          onClick={() => {
            handleChangeTheme("dark");
          }}
        >
          Dark
        </Button>
      </div>
    </S.Footerwrapper>
  );
}
export default Footer;
