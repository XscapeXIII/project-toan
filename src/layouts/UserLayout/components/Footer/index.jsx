import * as S from "./styles";
import { Row, Col, Divider } from "antd";
import { Link } from "react-router-dom";
import { ROUTES } from "constants/routes";

function Footer() {
  return (
    <S.Footerwrapper>
      <S.FooterContainer>
        <S.FooterContent>
          <Row gutter={[16, 16]} style={{ color: "white", width: "100%" }}>
            <Col span={6}>
              <h5>LIÊN HỆ VỚI CHÚNG TÔI</h5>
              <Divider
                style={{
                  borderColor: "#201111",
                  margin: "12px 0",
                  border: "1px solid",
                }}
              />
              <span style={{ marginBottom: "16px" }}>
                +84.9999999999
                <br></br>
                Địa chỉ Shop: Lorem ipsum dolor sit, amet consectetur
                adipisicing elit
              </span>
              <br></br>
              <br></br>
              <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolorum ullam voluptas iure cum earum odio dolore tempora
              </span>
            </Col>
            <Col span={6}>
              <h5>PHƯƠNG THỨC THANH TOÁN</h5>
              <Divider
                style={{
                  borderColor: "#201111",
                  margin: "12px 0",
                  border: "1px solid",
                }}
              />
              <img
                style={{ maxWidth: "60px", maxHeight: "60px" }}
                alt=""
                src="https://luxurywatchvip.vn/wp-content/uploads/2022/05/mastercard.svg"
              />
              <img
                style={{ maxWidth: "60px", maxHeight: "60px" }}
                alt=""
                src="https://luxurywatchvip.vn/wp-content/uploads/2022/05/visa.svg"
              />
            </Col>
            <Col span={6}>
              <h5>LUXURY WATCH</h5>
              <Divider
                style={{
                  borderColor: "#201111",
                  margin: "12px 0",
                  border: "1px solid",
                }}
              />
              <Link to={ROUTES.USER.PRODUCT_LIST} state={{ categoryId: 1 }}>
                <h5 style={{ color: "white" }}>ĐỒNG HỒ ROLEX</h5>
              </Link>
              <Divider
                style={{
                  borderColor: "#be9191",
                  margin: "6px 0",
                }}
              />
              <Link to={ROUTES.USER.PRODUCT_LIST} state={{ categoryId: 2 }}>
                <h5 style={{ color: "white" }}>ĐỒNG HỒ HUBLOT</h5>
              </Link>
              <Divider
                style={{
                  borderColor: "#be9191",
                  margin: "6px 0",
                }}
              />
              <Link to={ROUTES.USER.PRODUCT_LIST} state={{ categoryId: 3 }}>
                <h5 style={{ color: "white" }}>ĐỒNG HỒ PATEK PHILIPPE</h5>
              </Link>
              <Divider
                style={{
                  borderColor: "#be9191",
                  margin: "6px 0",
                }}
              />
              <Link to={ROUTES.USER.PRODUCT_LIST} state={{ categoryId: 4 }}>
                <h5 style={{ color: "white" }}>ĐỒNG HỒ FRANCK MULLER</h5>
              </Link>
              <Divider
                style={{
                  borderColor: "#be9191",
                  margin: "6px 0",
                }}
              />
              <Link to={ROUTES.USER.PRODUCT_LIST} state={{ categoryId: 5 }}>
                <h5 style={{ color: "white" }}>ĐỒNG HỒ OMEGA</h5>
              </Link>
              <Divider
                style={{
                  borderColor: "#be9191",
                  margin: "6px 0",
                }}
              />
              <Link to={ROUTES.USER.PRODUCT_LIST} state={{ categoryId: 6 }}>
                <h5 style={{ color: "white" }}>ĐỒNG HỒ LONGINES</h5>
              </Link>
              <Divider
                style={{
                  borderColor: "#be9191",
                  margin: "6px 0",
                }}
              />
            </Col>
            <Col span={6}>
              <h5>VỀ CHÚNG TÔI</h5>
              <Divider
                style={{
                  borderColor: "#201111",
                  margin: "12px 0",
                  border: "1px solid",
                }}
              />
              <h5>LIÊN HỆ</h5>
              <Divider
                style={{
                  borderColor: "#be9191",
                  margin: "6px 0",
                }}
              />
              <h5>SẢN PHẨM</h5>
              <Divider
                style={{
                  borderColor: "#be9191",
                  margin: "6px 0",
                }}
              />
              <h5>HỆ THỐNG CỬA HÀNG</h5>
              <Divider
                style={{
                  borderColor: "#be9191",
                  margin: "6px 0",
                }}
              />
              <h5>GIỚI THIỆU</h5>
              <Divider
                style={{
                  borderColor: "#be9191",
                  margin: "6px 0",
                }}
              />
            </Col>
          </Row>
        </S.FooterContent>
      </S.FooterContainer>
    </S.Footerwrapper>
  );
}
export default Footer;
