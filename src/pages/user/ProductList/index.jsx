import { useEffect, useMemo, useState } from "react";
import { Link, generatePath, useLocation } from "react-router-dom";

import {
  Button,
  Card,
  Row,
  Col,
  Input,
  Select,
  Checkbox,
  Spin,
  notification,
  Slider,
  Space,
  Breadcrumb,
  Divider,
} from "antd";
import * as S from "./styles";

import { useDispatch, useSelector } from "react-redux";

import {
  getProductListAction,
  getCategoryListAction,
  addToCartAction,
} from "redux/actions";

import { ROUTES } from "constants/routes";
import { PRODUCT_LIMIT, PRODUCT_LIMIT_FILTER } from "constants/paging";

function ProductListPage() {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const { productList } = useSelector((state) => state.product);
  const { categoryList } = useSelector((state) => state.category);

  const [filterParams, setFilterParams] = useState({
    categoryId: state?.categoryId ? [state?.categoryId] : [],
    genderId: state?.genderId ? [state?.genderId] : [],
    price: [0, 1000000000],
    searchKey: "",
    sort: "",
  });

  useEffect(() => {
    dispatch(getCategoryListAction());
  }, []);

  useEffect(() => {
    setFilterParams({
      ...filterParams,
      categoryId: state?.categoryId ? [state?.categoryId] : [],
      genderId: state?.genderId ? [state?.genderId] : [],
    });
    dispatch(
      getProductListAction({
        ...filterParams,
        categoryId: state?.categoryId ? [state?.categoryId] : [],
        genderId: state?.genderId ? [state?.genderId] : [],
        page: 1,
        limit: [PRODUCT_LIMIT, PRODUCT_LIMIT_FILTER],
        sort: "id.desc",
      })
    );
  }, [state]);

  const handleFilter = (key, values) => {
    setFilterParams({
      ...filterParams,
      [key]: values,
    });
    dispatch(
      getProductListAction({
        ...filterParams,
        [key]: values,
        page: 1,
        limit: [PRODUCT_LIMIT, PRODUCT_LIMIT_FILTER],
      })
    );
  };

  const renderCategoryFilter = useMemo(() => {
    return categoryList.data.map((item) => {
      return (
        <Col span={24} key={item.id}>
          <Checkbox value={item.id}>
            {item.name} ({item.products.length})
          </Checkbox>
        </Col>
      );
    });
  }, [categoryList.data]);

  const handleAddToCard = (product) => {
    dispatch(
      addToCartAction({
        id: parseInt(product.id),
        name: product.name,
        price: product.price,
        img: product.img,
        quantity: 1,
      })
    );
    notification.success({
      message: "Thêm vào giỏ hàng thành công ^^!",
    });
  };

  const renderProductList = useMemo(() => {
    return productList.data.map((item) => {
      return (
        <Col key={item.id} xs={6}>
          <Link to={generatePath(ROUTES.USER.PRODUCT_DETAIL, { id: item.id })}>
            <Card
              title={item.category?.name}
              size="small"
              style={{ textAlign: "center" }}
            >
              <img key={item.id} alt="" src={item?.images[0]?.url} />
              <p>{item.name}</p>
              <p>{item.price.toLocaleString()} ₫</p>
              <Button onClick={() => handleAddToCard(item)}>
                Thêm vào giỏ hàng
              </Button>
            </Card>
          </Link>
        </Col>
      );
    });
  }, [productList.data]);

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

  const handleShowMore = () => {
    dispatch(
      getProductListAction({
        ...filterParams,
        page: productList.meta.page + 1,
        limit: PRODUCT_LIMIT,
        more: true,
      })
    );
  };

  return (
    <S.ProductListWrapper>
      <Row justify="space-between" style={{ margin: "16px auto" }}>
        <Col span={12}>
          <Breadcrumb
            style={{ fontSize: "large" }}
            items={[
              {
                title: <Link to={ROUTES.USER.HOME}>TRANG CHỦ</Link>,
              },

              {
                title: (
                  <Link to={ROUTES.USER.PRODUCT_LIST}>DANH SÁCH SẢN PHẨM</Link>
                ),
              },
            ]}
          />
        </Col>
        <Col
          style={{
            display: "flex",
            alignItems: "center",
            padding: "4px",
            fontSize: "large",
            justifyContent: "space-between",
          }}
          span={12}
        >
          <p>Hiển thị 1-16 sản phẩm </p>
          <Select
            onChange={(value) => handleFilter("sort", value)}
            placeholder="Tìm kiếm sản phẩm..."
            style={{ width: "60%" }}
          >
            {/* <Select.Option value="name.decs">Tên A-Z</Select.Option>
            <Select.Option value="name.asc">Tên Z-A</Select.Option> */}
            <Select.Option value="id.desc">Mới nhất</Select.Option>
            <Select.Option value="price.asc">Giá tăng dần</Select.Option>
            <Select.Option value="price.desc">Giá giảm dần</Select.Option>
          </Select>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: "16px" }}>
        <Col span={6}>
          <Card title={false} size="small">
            <h5 style={{ fontSize: "16px" }}>LỌC THEO TÊN SẢN PHẨM</h5>
            <Divider style={{ margin: "4px auto", borderColor: "#888080" }} />
            <Checkbox.Group
              style={{ marginBottom: "16px" }}
              value={filterParams.categoryId}
              onChange={(values) => handleFilter("categoryId", values)}
            >
              <Row>{renderCategoryFilter}</Row>
            </Checkbox.Group>
            <h5 style={{ fontSize: "16px" }}>LỌC THEO GIÁ</h5>
            <Divider style={{ margin: "4px auto", borderColor: "#888080" }} />
            <Slider
              range
              min={0}
              max={1000000000}
              step={1000000}
              defaultValue={filterParams.price}
              formatter={(value) => `${value.toLocaleString()} ₫`}
              onChange={(values) => handleFilter("price", values)}
            />
            <Space
              style={{ justifyContent: "space-between", marginBottom: "16px" }}
            >
              <Button onClick={(values) => handleFilter("price", values)}>
                LỌC
              </Button>
              <h5 color="black">
                Giá: <span>{filterParams.price?.toLocaleString()} ₫</span>
              </h5>
            </Space>
            <h5 style={{ fontSize: "16px" }}>TÌM KIẾM SẢN PHẨM</h5>
            <Divider style={{ margin: "4px auto", borderColor: "#888080" }} />
            <Input
              style={{ margin: "16px auto" }}
              onChange={(e) => handleFilter("searchKey", e.target.value)}
              placeholder="Tìm kiếm..."
            />
            <h5 style={{ fontSize: "16px" }}>SẢN PHẨM TƯƠNG TỰ</h5>
            <Divider style={{ margin: "4px auto", borderColor: "#888080" }} />
            {renderProductListFilter}
          </Card>
        </Col>
        <Col span={18}>
          <span>
            Bảng giá đồng hồ chính hãng 100% Thụy Sỹ như Rolex, Hublot, Franck
            Muller, Omega, đồng hồ bằng vàng 18k….có sẵn tại Luxury Watch số 3
            Điện Biên Phủ – Hoàn Kiếm – Hà Nội. Các mẫu đồng hồ nam, nữ chính
            hãng đã qua sử dụng hoặc mới 100% có sẵn, giá tốt nhất Việt Nam.
            TraLi Luxury Watch đảm bảo là nơi bán ra những chiếc đồng hồ nam, nữ
            chính hãng số 1 tại Việt Nam. Những chiếc đồng hồ nam nữ không chỉ
            được đảm bảo về chất lượng mà giá cả vô cùng hợp lý. Bảo hành dài
            hạn, giao hàng COD (kiểm tra hàng thanh toán tiền khi nhận hàng).
          </span>
          <Spin spinning={productList.load}>
            <Row gutter={[16, 16]} style={{ marginTop: "16px" }}>
              {renderProductList}
            </Row>
          </Spin>
          {productList.data.length !== productList.meta.total && (
            <Row justify="center" style={{ marginTop: 16 }}>
              <Button onClick={() => handleShowMore()}>Show more</Button>
            </Row>
          )}
        </Col>
      </Row>
    </S.ProductListWrapper>
  );
}
export default ProductListPage;
