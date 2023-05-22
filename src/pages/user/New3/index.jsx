import { useMemo } from "react";
import { Link, generatePath } from "react-router-dom";

import { Card, Row, Col, Breadcrumb, Divider } from "antd";
import * as S from "./styles";

import { useSelector } from "react-redux";

import { ROUTES } from "constants/routes";

function New3Page() {
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
          <h1>
            Khám phá kho mặt số họa tiết phong phú của thương hiệu đồng hồ Rolex
          </h1>
          <p>
            <br />
          </p>
          <p class="ql-align-center">
            <img
              alt=""
              src="https://luxurywatchvip.vn/wp-content/uploads/2022/12/Dong-ho-Rolex-mat-so-hoa-1024x738.png"
              height="620"
              width="1020"
            />
          </p>
          <p>
            <br />
          </p>
          <p>
            Khám phá họa tiết phong phú của mặt số Rolex đang là chủ đề được
            nhiều người quan tâm. Rolex từ xưa tới nay vẫn luôn được biết tới là
            thương hiệu đồng hồ số 1 thế giới với những thiết kế vô cùng sang
            trọng, bắt mắt và tinh tế. Bên cạnh những thành công về thiết kế, vỏ
            ngoài, dây đeo, màu sắc,…thì mặt số cũng là một yếu tố làm nên sự
            khác biệt của thương hiệu này so với các thương hiệu đồng hồ khác.
            Bạn có thể sẽ rất ngạc nhiên với số lượng mặt số họa tiết mà Rolex
            đã sản xuất dưới đây. Cùng xem nhé!
          </p>
          <p class="ql-align-center">
            <br />
          </p>
          <h2>
            Khám phá họa tiết phong phú của mặt số Rolex – Mặt số vải lanh
          </h2>
          <p>
            <br />
          </p>
          <p>
            Mặt số vải lanh là một trong những thiết kế mặt số sáng tạo, mới mẻ
            và độc đáo của mặt số Rolex dành cho dòng đồng hồ Day-Date và
            Datejust từ những năm 60. Ngày nay, những chiếc đồng hồ với mặt số
            vải lanh không còn được&nbsp; Rolex &nbsp;sản xuất nữa vì vậy khách
            hàng sẽ không thể tìm thấy chúng trên các dòng sản phẩm đồng hồ
            Rolex hiện tại.&nbsp;
          </p>
          <p>
            <br />
          </p>
          <p>
            <img
              src="https://luxurywatchvip.vn/wp-content/uploads/2022/12/Anh-chup-Man-hinh-2022-12-19-luc-01.59.10-1024x794.png"
              alt="mặt số rolex vải lanh"
              height="620"
              width="1024"
            />
          </p>
          <h2>
            <br />
          </h2>
          <h2>Mặt số Tapestry</h2>
          <p>
            <br />
          </p>
          <p>
            Những chiếc đồng hồ với mặt số đồng hồ Rolex Tapestry được cho là
            xuất hiện trong những thập niên 60.
          </p>
          <p>
            Tapestry trong tiếng anh có nghĩa là “chiếc thảm”. Tới đây ta có thể
            hình dung được những đường kẻ sọc, mỏng…,Đây là một trong những
            thiết kế mặt số khá đơn giản, nhưng những đường gờ dọc mỏng được cắt
            vào bề mặt quay số, tạo cho nó một cảm giác 3D khác biệt và độc đáo.
          </p>
          <p>
            <br />
          </p>
          <h2>
            <img
              alt=""
              src="https://luxurywatchvip.vn/wp-content/uploads/2022/12/Anh-chup-Man-hinh-2022-12-19-luc-02.00.44-1024x878.png"
              height="620"
              width="1024"
            />
          </h2>
          <h2>
            <br />
          </h2>
          <h2>Mặt số Rolex gỗ</h2>
          <p>
            <br />
          </p>
          <p>
            Những chiếc đồng hồ mặt gỗ chỉ xuất hiện trong những năm 1970 trên
            các mẫu Datejust và Day-Date. Thiết kế mặt số bằng gỗ mang tới một
            cảm giác ấm áp khác biệt nhờ những đặc tính riêng có của mình.
          </p>
          <p>
            Để tạo ra mặt số này, Rolex đã sử dụng những lát gỗ mỏng lấy từ thân
            cây bạch dương, gỗ gụ và quả óc chó để ghép vào tấm khung. Những
            đường vân của gỗ tạo ra những hoa văn vô cùng độc đáo và ấn tượng.
            Trong một số trường hợp, một số hoa văn giống như vỏ cây sẽ được
            thêm vào vành đồng hồ và thậm chí là cả các mối nối giữa của dây đeo
            để nhấn mạnh vẻ đẹp ấn tượng này.
          </p>
          <p>
            <br />
          </p>
          <p>
            <div style={{ justifyContent: "center", display: "flex" }}>
              <img
                alt=""
                src="https://luxurywatchvip.vn/wp-content/uploads/2022/12/AVW-Rolex-Day-Date-Wood-Dial-3-510x510-1.jpeg"
                height="510"
                width="510"
              />
            </div>
          </p>
          <h2>
            <br />
          </h2>
          <h2>Mặt số Rolex – Mặt số vi tính Jubilee</h2>
          <p>
            <br />
          </p>
          <p>
            Vào năm 1985, nhân dịp Datejust tròn 40 tuổi, Rolex đã cho ra mắt
            một loại mặt số đặc biệt để đánh dấu sự kiện này. Đó là mặt số vi
            tính Jubilee.
          </p>
          <p>
            Tổng thể là hệ thống những chữ Rolex được lồng ghép vào nhau và lặp
            đi lặp lại trên khắp bề mặt đồng hồ, thiết kế này mang tới hiệu ứng
            3D hấp dẫn, mê hoặc bất kỳ ai với sự mới lạ, hiện đại, mà khó có thể
            thấy được ở những thiết kế truyền thống. Hiện mặt số vi tính này
            được sử dụng trên hầu hết mẫu đồng hồ trong bộ sưu tập Day-Date và
            Lady-Datejust và cũng là một trong những mẫu đồng hồ chính hãng được
            bán chạy nhất, trở thành best seller trong thời gian dài tại Luxury
            Watch.&nbsp;
          </p>
          <p>
            <br />
          </p>
          <p>
            <img
              alt=""
              src="https://luxurywatchvip.vn/wp-content/uploads/2022/11/Rolex-Datejust-126233-8-1024x683.jpg"
              height="680"
              width="1024"
            />
          </p>
          <h2>
            <br />
          </h2>
          <h2>Mặt số Rolex họa tiết Hobnail</h2>
          <p>
            Khách hàng chắc hẳn không còn xa lạ với dòng đồng hồ Rolex Cellini
            hiện tại. Vào năm 2017, chiếc Rolex Cellini Moonphase 50535 được ra
            mắt và giới thiệu tại sự kiện Baselworld đã đánh dấu sự trở lại của
            dòng đồng hồ dresswatch thanh lịch nhất nhà Rolex. Tuy nhiên, từ đầu
            đến giữa của năm 2000, Cellini Prince lại mang vẻ ngoài cực khác với
            mặt số có nhiều họa tiết thú vị. Đơn cử là họa tiết như những đinh
            tán Hobnail (còn được gọi là Clou De Paris) đã từng được Rolex sử
            dụng để trang trí cho mặt số đồng hồ Rolex. Phong cách mặt số này
            kết hợp vỏ chữ nhật bằng đem lại cảm giác rất nghệ thuật, rất cổ
            điển
          </p>
          <p>
            <br />
          </p>
          <h2>
            Mặt số lá cọ nhiệt đới – Palm dial và Mặt số gấp nếp – Fluted&nbsp;
          </h2>
          <p>
            <br />
          </p>
          <p>
            Trong năm nay, Rolex tung ra mẫu đồng hồ Datejust với họa tiết lá cọ
            nhiệt đới và họa tiết gấp nếp mới. Thiết kế mặt số này được thực
            hiện bằng cách chải xước trước tiên rồi mới đến phương pháp
            femtosecond laser (được hiểu là chiếu tia laser cực nhanh trên bề
            mặt để tạo ra hoa văn và hoạ tiết mong muốn). Dưới kỹ thuật hiện
            đại, mặt số lá cọ sẽ hiển thị các khoảng đậm/nhạt theo từng tán lá,
            và do đó, mặt số có những biến hoá trước ánh sáng mạnh, tạo ra vẻ
            đẹp vô cùng độc đáo và mới lạ.
          </p>
          <p>
            <br />
          </p>
          <p>
            <img
              alt=""
              src="https://luxurywatchvip.vn/wp-content/uploads/2022/12/z3924726239044_b26fb3dbec8843fd0db4ebc5a6a81f91-1024x682.jpg"
              height="680"
              width="1024"
            />
          </p>
          <p>
            <br />
          </p>
          <p>
            Ngoài những mặt số họa tiết tiêu biểu kể trên, thương hiệu đồng hồ
            Rolex còn cho ra mắt công chúng những thiết kế mặt số vô cùng độc và
            lạ như: họa tiết cánh bướm, cánh hoa,…
          </p>
          <h1>&nbsp;</h1>
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

export default New3Page;
