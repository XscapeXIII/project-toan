import * as S from "./styles";
import { Row, Col, Space, Divider } from "antd";

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
                  width: "15%",
                  maxWidth: "5px",
                  margin: "6px 0",
                  height: "3px",
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
                  width: "15%",
                  maxWidth: "5px",
                  margin: "6px 0",
                  height: "3px",
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
            </Col>
            <Col span={6}>
              <h5>VỀ CHÚNG TÔI</h5>
            </Col>
          </Row>
        </S.FooterContent>
      </S.FooterContainer>
    </S.Footerwrapper>
  );
}
export default Footer;
