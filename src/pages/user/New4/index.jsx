import { useMemo } from "react";
import { Link, generatePath } from "react-router-dom";

import { Card, Row, Col, Breadcrumb, Divider } from "antd";
import * as S from "./styles";

import { useSelector } from "react-redux";

import { ROUTES } from "constants/routes";

function New4Page() {
  const { productList } = useSelector((state) => state.product);

  const renderProductListFilter = useMemo(() => {
    return productList.data.map((item) => {
      return (
        <Link
          style={{ color: "black" }}
          to={generatePath(ROUTES.USER.PRODUCT_DETAIL, { id: item.id })}
        >
          <Row>
            <Col span={12}>
              <img
                alt=""
                src={item?.images[0]?.url}
                width="150px"
                height="auto"
              />
            </Col>
            <Col span={12} style={{ alignItems: "center" }}>
              <span>{item.name}</span>
            </Col>
            <Divider style={{ margin: "4px auto", borderColor: "#888080" }} />
          </Row>
        </Link>
      );
    });
  }, [productList.data]);
  return (
    <S.NewsWrapper>
      <Breadcrumb
        style={{ fontSize: "large", margin: "24px auto" }}
        items={[
          {
            title: <Link to={ROUTES.USER.HOME}>TRANG CHỦ</Link>,
          },

          {
            title: <Link to={ROUTES.USER.NEWS_1}>TIN TỨC</Link>,
          },
        ]}
      />
      <Row gutter={[16, 16]}>
        <Col span={18}>
          <h1>Đồng hồ Patek Philippe xa xỉ cỡ nào?</h1>
          <p>
            <br />
          </p>
          <p class="ql-align-center">
            <img
              alt=""
              src="https://luxurywatchvip.vn/wp-content/uploads/2022/12/images.jpeg"
              height="412"
              width="660"
            />
          </p>
          <p class="ql-align-center">
            <br />
          </p>
          <p>
            Patek Philippe là một thương hiệu đồng hồ nổi tiếng với những chiếc
            đồng hồ đắt nhất thế giới. Hãy cùng Luxury Watch đánh giá đồng hồ
            Patek Philippe để có cái nhìn tổng quan hơn về thương hiệu đồng hồ
            cao cấp nhất thế giới này nhé.
          </p>
          <p>
            <br />
          </p>
          <h2>Lịch sử ra đời của đồng hồ Patek Philippe</h2>
          <p>
            <br />
          </p>
          <span style={{ fontSize: "16px" }}>
            Patek Philippe ra đời năm 1839 do&nbsp;Norbert Antoine de Patek và
            Franciszek Czapek cùng nhau tạo nên thương hiệu “Patek, Czapek &amp;
            Cie” tại Geneva. Đến năm 1845, hai người đã dừng hợp tác với nhau và
            Norbert Antoine de Patek đã quyết định đổi tên thương hiệu thành
            Patek &amp; Cie.
          </span>
          <span style={{ fontSize: "16px" }}>
            Năm 1851, Norbert Antoine de Patek gặp Adrien Philippe, một người
            thợ đồng hồ danh tiếng người Pháp, hai người đã cùng nhau phát triển
            và đổi tên thương hiệu thành Patek Philippe &amp; Cie.
          </span>
          <p>
            <br />
          </p>
          <span style={{ fontSize: "16px" }}>
            Năm 1901, thương hiệu lại một lần nữa đổi tên thành Ancienne
            Manufacture d’Horlogerie Patek Philippe &amp; Cie, S.A. Năm 1932,
            anh em nhà Stern đã mua lại Patek Philippe và cho đến tận ngày nay
            thương hiệu này vẫn do nhà Stern sở hữu.&nbsp;
          </span>
          <span style={{ fontSize: "16px" }}>
            Với gần 200 năm lịch sử phát triển, hiện nay Patek Philippe đã trở
            thành thương hiệu đồng hồ Thụy Sỹ cao cấp và đắt nhất hiện
            nay.&nbsp;
          </span>
          <p>
            <br />
          </p>
          <p>
            <img
              src="https://luxurywatchvip.vn/wp-content/uploads/2022/11/patek3-1024x834.jpg"
              alt="đồng hồ patek philippe xa xỉ"
              height="680"
              width="1024"
            />
          </p>
          <blockquote>
            <em>Đồng hồ Patek Philippe Nautilus 5712/1A-001</em>
          </blockquote>
          <p>
            <br />
          </p>
          <h2>
            Tại sao Patek Philippe lại là mẫu đồng hồ đắt đỏ bậc nhất thế
            giới?&nbsp;
          </h2>
          <p>
            <br />
          </p>
          <span style={{ fontSize: "16px" }}>
            Là một thương hiệu đồng hồ cao cấp nhất thế giới với chất lượng và
            thiết kế đều xa xỉ, tuyệt vời, những chiếc đồng hồ Patek Philippe
            luôn được giới chuyên môn dành cho những đánh giá rất cao.
          </span>
          <span style={{ fontSize: "16px" }}>
            Sở hữu chất liệu cao cấp&nbsp;
          </span>
          <span style={{ fontSize: "16px" }}>
            Một trong những lý do khiến Patek Philippe trở thành một trong những
            siêu phẩm đắt đỏ bậc nhất trên thế giới là bởi toàn bộ đồng hồ được
            thiết kế từ những chất liệu đắt đỏ bậc nhất như vàng thật, kim
            cương, đá quý kính Sapphire chống xước cao, da Cá sấu, da Đà điểu…
            Với những vật liệu cao cấp này làm cho chiếc Patek Philippe trở nên
            vô cùng xa xỉ.&nbsp;
          </span>
          <span style={{ fontSize: "16px" }}>Bộ máy nổi tiếng&nbsp;</span>
          <span style={{ fontSize: "16px" }}>
            Patek Philippe là thương hiệu nổi tiếng với những mẫu đồng hồ cơ
            (đồng hồ Automatic).
          </span>
          <span style={{ fontSize: "16px" }}>
            &nbsp;Mỗi dòng đồng hồ chính hãng Patek Philippe lại được sử dụng
            một bộ máy khác nhau. Tuy nhiên các cỗ máy Inhouse của Patek đều có
            điểm chung là thiết kế&nbsp;thì khỏi phải nói về mức độ tỉnh xảo và
            phức tạp, các chi tiết được làm tỉ mỉ và kiểm tra rất kỹ càng dẫn
            đến sự ổn định và sai số tối thiểu.
          </span>
          <p>
            <br />
          </p>
          <p>
            <img
              src="https://luxurywatchvip.vn/wp-content/uploads/2022/12/Anh-chup-Man-hinh-2022-12-15-luc-11.24.23-1024x679.png"
              alt="Đồng hồ Patek Philippe xa xỉ cỡ nào? "
              height="680"
              width="1024"
            />
          </p>
          <p>
            <br />
          </p>
          <p>Về độ chống nước</p>
          <p>
            Mỗi mẫu đồng hồ sẽ sở hữu một mức độ chống nước nhất định. Tuy nhiên
            phần lớn đồng hồ Patek Philippe sở hữu độ chịu nước không cao lắm, ở
            mức 30m.&nbsp;
          </p>
          <p>
            Ngoài ra có dòng Nautilus có độ chống nước cao hơn ở 60 mét độ sâu,
            và cao nhất là dòng Aquanaut có độ chống nước ở mức 120 mét độ sâu.
            Với khả năng chống nước chỉ ở mức cơ bản này, bạn chỉ có thể đeo
            đồng hồ Patek Philippe khi rửa tay, gặp những cơn mưa bất chợt, còn
            trong các hoạt động thể thao liên quan đến nước như bơi lội hay lặn
            sâu thì bạn không nên đeo những chiếc đồng hồ này.
          </p>
          <p>Thiết kế tỉ mỉ, cẩn thận đến từng chi tiết nhỏ&nbsp;</p>
          <p>
            Thiết kế của những chiếc đồng hồ Patek Philippe luôn toát lên sự tỉ
            mỉ, xa xỉ trong từng chi tiết. Như chiếc Patek Philippe Grand
            Complications 6102 Sky Moon Celestial nằm trong bộ sưu tập Grand
            Complications sở hữu một bộ vỏ tròn có đường kính lên tới 44mm, dày
            chỉ 10,58 mm, có hai phiên bản là vàng hồng mặt số đen và phiên bản
            có bộ vỏ bạch kim kết hợp cùng mặt số xanh. Điểm đặc biệt nhất của
            thiết kế này là mặt đồng hồ với thiết kế có một biểu đồ mô tả bầu
            trời sao từ một vĩ độ tại bán cầu trong khoảng thời gian cụ thể.
            Nhìn qua dễ dàng có thể cảm nhận được bầu trời đầy sao ngay trên
            chính cổ tay của bạn.&nbsp;
          </p>
          <p>
            <br />
          </p>
          <p>
            <img
              src="https://luxurywatchvip.vn/wp-content/uploads/2022/12/14.png"
              alt="Đồng hồ Patek Philippe"
              height="517"
              width="785"
            />
          </p>
          <p>
            <br />
          </p>
          <p>
            Với những thiết kế độc đáo, không ngừng sáng tạo, vượt qua mọi giới
            hạn như thế này thì có thể hiểu vì sao những chiếc đồng hồ Patek
            Philippe luôn trở thành tâm điểm của mọi sự chú ý và khan hiếm đến
            như thế.
          </p>
          <p>
            <br />
          </p>
          <h2>Patek Philippe Xa xỉ đến cỡ nào?</h2>
          <p>
            <br />
          </p>
          <p>
            Đồng hồ Patek Philippe &nbsp;là thương hiệu sở hữu những đồng hồ
            Thụy Sỹ đắt giá nhất trên thế giới, có tiền chưa chắc đã mua được.
            Với mỗi mẫu đồng hồ Patek Philippe, hãng chỉ sản xuất phiên bản giới
            hạn vài chục sản phẩm, thậm chí chỉ vài sản phẩm và thời gian để chế
            tác một chiếc đồng hồ Patek Philippe chính hãng thường mất 3-5 năm,
            thậm chí&nbsp;dòng đồng hồ Patek Philippe Reference 1563 còn mất 24
            năm để hoàn thành. Chính vì thế, đồng hồ Patek Philippe có giá từ
            $12.000 như mẫu đồng hồ Patek Philippe 5565 giá 47.000 USD, đồng hồ
            Ref. 2499/100 đời thứ tư có giá hơn 400.000 USD, đồng hồ Nautilus
            giá 50.000 USD, đồng hồ Patek Philippe 5208P có giá hơn 1 triệu USD
            của Tổng thống Nga,…
          </p>
          <p>
            <br />
          </p>
          <p>
            <img
              alt=""
              src="https://luxurywatchvip.vn/wp-content/uploads/2022/12/Patek-Philippe-Ref.-5531-World-Time-Minute-Repeater-New-York-Special-Edition-2-1024x683.jpg"
              height="580"
              width="1024"
            />
          </p>
          <p>
            Những chiếc đồng hồ Patek Philippe chính hãng là những chiếc đồng hồ
            rất đáng để bạn mua, nhưng giá thành của nó lại quá đắt, vậy nên hãy
            xem xét thật kỹ trước khi có ý định mua những chiếc đồng hồ của
            thương hiệu này nhé.
          </p>
          <p>
            <br />
          </p>
          <span style={{ fontSize: "18px" }}>
            Luxury Watch&nbsp;tự hào là cơ sở uy tín cung cấp đồng hồ Patek
            Philippe cùng nhiều mẫu đồng hồ chính hãng trên thế giới. Mỗi mẫu
            đồng hồ, đặc biệt là các dòng like new, đồng hồ cũ đều được đội ngũ
            chuyên gia kiểm tra cẩn thận trước khi đến tay khách hàng. Đảm bảo
            trải nghiệm mua sắm hoàn hảo!&nbsp;
          </span>
        </Col>
        <Col span={6}>
          <Card title={false} size="small">
            <h5 style={{ fontSize: "16px" }}>SẢN PHẨM</h5>
            <Divider style={{ margin: "4px auto", borderColor: "#888080" }} />
            {renderProductListFilter}
          </Card>
        </Col>
      </Row>
    </S.NewsWrapper>
  );
}

export default New4Page;
