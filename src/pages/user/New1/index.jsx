import { useMemo } from "react";
import { Link, generatePath } from "react-router-dom";

import { Card, Row, Col, Breadcrumb, Divider } from "antd";
import * as S from "./styles";

import { useSelector } from "react-redux";

import { ROUTES } from "constants/routes";

function New1Page() {
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
          <br />
          <h1>
            Review chi tiết Hublot One Click Sang Blue – Nghệ thuật hòa quyện
            cùng thời gian ​
          </h1>
          <br />
          <p class="ql-align-center">
            <a
              href="https://luxurywatchvip.vn/review-don-ho-hublot-one-click-sang-blue/"
              style={{
                backgroundColor: "transparent",
                color: "rgb(86, 86, 86)",
              }}
            >
              <img
                src="https://luxurywatchvip.vn/wp-content/uploads/2023/01/hublot-big-bang-one-click-sang-bleu-steel-blue-diamonds-39mm-6-1024x768.jpeg"
                height="765"
                width="960"
                alt=""
              />
            </a>
          </p>
          <br />
          <p>
            <em>
              Review đồng hồ Hublot là chủ đề được nhiều người quan tâm. Đồng hồ
              Hublotmột trong những thương hiệu đồng hồ nổi tiếng nhất trên thế
              giới mà ai cũng ít nhiều một lần nghe tới. Hublot Big bang One
              Click Sang bleu ra đời đã mang đến một luồng gió mới, một vẻ đẹp –
              lạ khiến bao người “điên đảo”. Vậy siêu phẩm này có gì hấp dẫn mà
              khiến bao người say mê như vậy?
            </em>
            <br />
            <br />
          </p>
          <h2>
            Review đồng hồ Hublot với thiết kế mặt đồng hồ lục giác khác biệt
          </h2>
          <br />
          <p>
            Sự kết hợp tuyệt vời giữa phong cách hiện đại và cổ điển tạo nên
            Hublot Big Bang One Click Sang Bleu 39mm mang dấu ấn của nghệ thuật
            đương đại với mặt số bao gồm hệ thống hình học 5 tầng sắc nhọn xếp
            chồng gây ấn tượng mạnh làm từ vỏ thép mạnh mẽ được khảm kim cương
            tỉ mỉ trên vành bezel cùng dây cao su cao cấp.Bộ vỏ khung sandwich
            đa chất liệu 5 lớp xếp tầng được làm từ thép không gỉ. Trên bề mặt
            bezel gắn 6 đinh ốc tròn với chữ H truyền thống – biểu tượng Hublot
            và những viên kim cương trắng tinh khiết. Điểm nhấn thú vị trên vành
            Bezel chính là mặt trong được chải xước tinh tế, mặt ngoài đậm chất
            nghệ sĩ với kỹ thuật đánh bóng gương. Bộ hiển thị thời gian độc đáo
            với các góc hình học đặt trên đĩa có thể xoay tròn, phối hợp cùng
            vòng đếm giờ và phút màu đen để báo thời gian hiện tại.
          </p>
          <br />
          <p>
            <br />

            <img
              src="https://luxurywatchvip.vn/wp-content/uploads/2023/01/Anh-2-Sang-Bleu-King-Gold.png"
              alt="Review đồng hồ Hublot"
              height="680"
              width="960"
            />
            <br />
          </p>
          <br />
          <p>
            <p>
              ​ Thương hiệu đồng hồ hàng đầu Thụy Sĩ đã mạnh dạn cởi bỏ lối
              thiết kế “kín cổng cao tường” để phô bày ra vẻ đẹp cơ khí ở dạng
              Skeleton. Các họa tiết về kim giờ phút và giây đều toát lên hơi
              thở của nghệ thuật đương đại. Qua lớp kính Sapphire trong suốt,
              các vị chủ nhân có thể ngắm nhìn các họa tiết bát giác đối xứng và
              xếp chồng lên nhau rất kỳ công. Đổi dây trong tích tắc với One
              click. Cỗ máy Hublot Big Bang One Click Sang Bleu 39mm sử dụng bộ
              máy tự lên dây cót mang mã hiệu HUB 1710. Máy có thời lượng dự trữ
              năng lượng lên đến 50h đồng hồ, giúp bạn chủ động nạp dây cót khi
              đồng hồ hết cót. Độ chịu nước 100m cũng là con số ấn tượng cho bạn
              đi mưa hay rửa tay mà không phải lo lắng gì.
            </p>
            <br />
          </p>
          <br />
          <p>
            <img
              src="https://luxurywatchvip.vn/wp-content/uploads/2023/01/Hublot-Big-Bang-Sang-Bleu.jpeg"
              alt="Review đồng hồ Hublot"
              height="680"
              width="960"
            />
          </p>
          <p>
            <br />

            <p>
              ​ Một yếu tố không thể không nhắc đến là dây đeo cao su phủ da
              mang lại vẻ đẹp khỏe khoắn, bền bỉ. Dây đeo cao cao su có bề mặt
              da màu đen cao cấp với đường vân ăn khớp với họa tiết hình học
              trên mặt đồng hồ. Đặc biệt, sợi dây này mang tên “One Click” tức
              là chỉ cần một lần bấm người dùng có thể dễ dàng thay dây đồng hồ.
              Điều này giúp cho người đeo có thể thay đổi dây theo từng trang
              phục, phụ kiện hay cảm xúc khác nhau.Tinh tế trong sự thay đổi kim
              giờ
            </p>
          </p>
          <br />
          <p>
            <img
              src="https://luxurywatchvip.vn/wp-content/uploads/2023/01/hublot-big-bang-one-click-sang-bleu-steel-blue-diamonds-39mm-6-1024x768.jpeg"
              alt="Review đồng hồ Hublot"
              height="960"
              width="960"
            />
          </p>
          <br />
          <p>
            <p>
              Với các loại đồng hồ thông thường, kim giờ sẽ nằm ở phía trong.
              Tuy nhiên, với thiết kế mới của Big big One Click Sang Bleu, ta sẽ
              thấy kim giờ của đồng hồ nằm ở phía ngoài cùng, kim phút ở bên
              trong. Còn kim giây chính là đĩa chính giữa xoay tại tâm đồng hồ.
              Ấn tượng đầu tiên có lẽ mọi người sẽ rối mắt vì không quen. Thế
              nhưng, khi nhìn kỹ bạn sẽ thấy thiết kế mặt số rất “cá biệt” nhưng
              lại vô cùng cuốn hút. Khi đeo cỗ máy này trên tay các vị chủ nhân
              sẽ cảm nhận rõ ràng từng nhịp đập chuyển động trên vòng quay thời
              gian. Dòng Hublot One Click Sang Bleu hiện nay có 4 màu chủ đạo:
              trắng, đen, hồng, xanh. Mỗi màu sắc mang đều đến cho chiếc đồng hồ
              một vẻ đẹp khác biệt. Hiện nay, tại shop có 2 màu đó là trắng và
              hồng – 2 màu sắc được phái nữ ưa chuộng nhất.
            </p>
          </p>
          <br />
          <p>
            <img
              src="https://luxurywatchvip.vn/wp-content/uploads/2023/01/gphg2017_dame-big-bang-one-click-sang-bleu_03.jpeg"
              height="960"
              width="960"
              alt=""
            />
          </p>
          <br />
          <p>
            Đồng hồ Hublot &nbsp;là sự kết hợp hoàn hảo giữa nền thủ công nghiệp
            từ đất nước “cha đẻ” ngành chế tác đồng hồ – Thụy Sỹ và phong cách
            thời trang được thiết kế theo kiểu Italia. Đồng hồ Hublot ngày càng
            tiến gần đến cột mốc về sự hoàn hảo phong cách và chức năng. Khiến
            cho triệu khách hàng trên toàn thế giới phải “thèm thuồng” khi nhắc
            đến thương hiệu này.
          </p>
          <ul>
            <li>&nbsp;</li>
          </ul>
          <br />
          <br />
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

export default New1Page;
