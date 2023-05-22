import { useMemo } from "react";
import { Link, generatePath } from "react-router-dom";

import { Card, Row, Col, Breadcrumb, Divider } from "antd";
import * as S from "./styles";

import { useSelector } from "react-redux";

import { ROUTES } from "constants/routes";

function New2Page() {
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
            <br />
          </h1>
          <h1>
            Đồng hồ Chronometer và Chứng nhận COSC là gì và có giá trị thế nào?
          </h1>
          <p>
            <br />
          </p>
          <p class="ql-align-center">
            <img
              alt=""
              src="https://luxurywatchvip.vn/wp-content/uploads/2022/12/dong-ho-omega-speedmaster-chronoscope-co-axial-master-chronometer-chronograph-2021-05-chronoscope-dial-1024x576.jpeg"
              height="574"
              width="1020"
            />
          </p>
          <p>
            <br />
          </p>
          <p>
            <span style={{ fontSize: "18px" }}>
              Đồng hồ Chronometer là gì? Bất kỳ tay chơi đồng hồ Thụy Sĩ cao cấp
              nào cũng đều mong muốn có trong tay mình những chiếc Chronometer.
              Và các nhà sản xuất cũng muốn những chiếc đồng hồ của mình được
              gắn nhãn hiệu Chronometer và sở hữu chứng chỉ của COSC. Vậy những
              chiếc đồng hồ được chứng nhận COSC này có gì khác biệt?
            </span>
          </p>
          <p>
            <br />
          </p>
          <h2>​Về Đồng hồ Chronometer&nbsp;</h2>
          <p>
            <br />
          </p>
          <span style={{ fontSize: "18px" }}>
            COSC là tên viết tắt của Contrôle Officiel Suisse des Chronomètres –
            Viện kiểm tra Chonometer chính thức của Thụy Sĩ. Đây là tổ chức độc
            lập, chuyên tiến hành các phép thử và chịu trách nhiệm quản lý chất
            lượng, cấp giấy phép Chronometer.Với mỗi chiếc đồng hồ muốn gắn nhãn
            hiệu Chronometer khi được đưa đến COSC sẽ đều phải trải qua các bài
            kiểm tra riêng bộ máy và tổng thể của chiếc đồng hồ. Nếu vượt qua
            các cuộc thử nghiệm, COSC sẽ cấp giấy chứng nhận cho phép gắn tên
            Chronometer lên đồng hồ.
          </span>
          <p>
            <br />
          </p>
          <p>
            <img
              src="https://luxurywatchvip.vn/wp-content/uploads/2022/12/dong-ho-chronometre.png"
              alt="Đồng hồ Chronometer&nbsp;"
              height="574"
              width="975"
            />
          </p>
          <h2>
            <br />
          </h2>
          <h2>Cách để đạt được&nbsp;chứng nhận “Chronometer” của COSC</h2>
          <p>
            <br />
          </p>
          <span style={{ fontSize: "18px" }}>
            Để đạt được chứng nhận “Chronometer” của COSC, bộ máy của chiếc đồng
            hồ phải vượt qua được hàng loạt cuộc thử nghiệm khắc nghiệt được
            tiến hành trong vòng 15 ngày, 15 đêm liên tục ở 5 vị trí và 3 mức
            nhiệt độ khác nhau. COSC sẽ tiến hành 7 phép thử. Các phép đo được
            thực hiện hàng ngày với sự trợ giúp của camera, máy tính cùng 2
            chiếc đồng hồ nguyên tử có độ chính xác tuyệt đối để phân tích dữ
            liệu.
          </span>
          <p>&nbsp;</p>
          <ol>
            <li>
              Tốc độ trung bình 1 ngày: Sau 10 ngày thử nghiệm, đồng hồ chỉ được
              phép sai lệch từ -4 đến +6 giây/ngày.
            </li>
            <li>
              Tốc độ thay đổi trung bình: COSC theo dõi đồng hồ ở 5 điểm khác
              nhau (2 chiều nằm ngang và 3 chiều thẳng đứng) mỗi ngày. Trong
              thời gian 10 ngày sẽ có 50 điểm và sự sai lệch không quá 2s.
            </li>
            <li>
              Tốc độ thay đổi lớn nhất ở 5 vị trí khác nhau không lớn hơn
              5s/ngày.
            </li>
            <li>
              COSC trừ giá trị trung trung bình theo chiều thẳng đứng cho giá
              trị trung bình theo chiều nằm ngang, độ sai lệch phải nằm trong
              khoảng -6 đến +8s.
            </li>
            <li>
              Sự khác nhau giữa tốc độ lớn nhất trong ngày với tốc độ trung bình
              trong ngày không quá 10s/ngày.
            </li>
            <li>
              COSC thử nghiệm tốc độ đồng hồ tại 8 độ C và 38 độ C; sự sai khác
              về thời gian không được quá 0.6 giây mỗi ngày.
            </li>
            <li>
              Sai số lũy tiến: được xác định bằng sai số giữa tốc độ trung bình
              trong ngày ở 2 ngày thử nghiệm đầu tiên và cuối cùng, sai lệch
              không được vượt quá 5s.
            </li>
          </ol>
          <p>
            <br />
          </p>
          <p>
            <br />
          </p>
          <p>
            ​
            <img
              src="https://luxurywatchvip.vn/wp-content/uploads/2022/11/z3904387889836_d6d7f39b415a2967f5b4090d8faaa176-1024x682.jpg"
              alt="Đồng hồ Chronometer&nbsp; hublot"
              height="574"
              width="1024"
            />
          </p>
          <br />
          <p>
            <span style={{ fontSize: "18px" }}>
              Thống kê cho thấy, chỉ có khoảng 3% số lượng đồng hồ ở Thụy Sĩ đạt
              chứng nhận COSC và trở thành đồng hồ Chronometer. Và các thương
              hiệu có nhiều đồng hồ Chronometer có thể kể đến như Rolex,
              Breitling, Omega, Tag Heuer… Cũng bởi sự gắt gạo thẩm định mà phần
              lớn các mẫu đồng hồ này đều có giá trị lớn lên tới hàng trăm triệu
              đồng.
            </span>
          </p>
          <p>
            <br />
          </p>
          <p>
            <br />
          </p>
          <p>
            <img
              src="https://luxurywatchvip.vn/wp-content/uploads/2022/06/hublot-541.NX_.7170.LR_.8-1024x683.jpg"
              alt="Đồng hồ Chronometer&nbsp;"
              height="574"
              width="1024"
            />
            ​&nbsp;
          </p>
          <span style={{ fontSize: "18px" }}>
            Luxury Watch&nbsp;là địa chỉ cung cấp các mẫu đồng hồ chính hãng
            100% và những mẫu đồng hồ đạt chứng nhận “Chronometer” của COSC. Các
            sản phẩm tại đây đều được kiểm tra, thẩm định kỹ càng bởi chuyên gia
            trước khi bày bán, đảm bảo sự hài lòng của quý khách hàng!
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

export default New2Page;
