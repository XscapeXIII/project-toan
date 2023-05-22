import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Card } from "antd";
import { Link, generatePath } from "react-router-dom";
import { ROUTES } from "constants/routes";

export const SimpleSlider = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "grey",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "grey" }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: true,
    accessibility: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // autoplay: true,
    // autoplaySpeed: 2000,
    // pauseOnHover: true,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

  const { productList } = useSelector((state) => state.product);

  const renderProductList = useMemo(() => {
    return productList.data.map((item) => {
      return (
        <div key={item.id} xs={6}>
          <Link to={generatePath(ROUTES.USER.PRODUCT_DETAIL, { id: item.id })}>
            <Card
              title={item.category?.name}
              size="small"
              style={{ textAlign: "center" }}
            >
              <img key={item.id} alt="" src={item?.images[0]?.url} />
              <p>{item.name}</p>
              <p>{item.price.toLocaleString()} ₫</p>
            </Card>
          </Link>
        </div>
      );
    });
  }, [productList.data]);
  return <Slider {...settings}>{renderProductList}</Slider>;
};

export default SimpleSlider;
