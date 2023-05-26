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
  Breadcrumb,
  Divider,
  Pagination,
} from "antd";
import * as S from "./styles";

import { useDispatch, useSelector } from "react-redux";

import {
  getProductListAction,
  getCategoryListAction,
  addToCartAction,
} from "redux/actions";

import { ROUTES } from "constants/routes";
import { PRODUCT_LIMIT } from "constants/paging";

function ProductListPage() {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const { productList, productDetail } = useSelector((state) => state.product);
  const { categoryList } = useSelector((state) => state.category);

  const [filterParams, setFilterParams] = useState({
    categoryId: state?.categoryId ? [state?.categoryId] : [],
    genderId: state?.genderId ? [state?.genderId] : [],
    price: [0, 1000000000],
    searchKey: "",
    sort: "id.desc",
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
        limit: PRODUCT_LIMIT,
        sort: "id.asc",
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
        limit: PRODUCT_LIMIT,
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
        img: productDetail.data.images[0].url,
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
        <Col key={item.id} xs={12} sm={8} md={6}>
          <Link to={generatePath(ROUTES.USER.PRODUCT_DETAIL, { id: item.id })}>
            <S.CardItem>
              <Card
                title={item.category?.name}
                size="small"
                style={{ textAlign: "center" }}
              >
                <S.CardImg>
                  <img
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      objectFit: "cover",
                    }}
                    key={item.id}
                    alt=""
                    src={item?.images[0]?.url}
                  />
                </S.CardImg>
                <S.CardContent>
                  <p>{item.name}</p>
                </S.CardContent>
                <h4>{item.price.toLocaleString()} ₫</h4>
                <Button onClick={() => handleAddToCard(item)}>
                  Thêm vào giỏ hàng
                </Button>
              </Card>
            </S.CardItem>
          </Link>
        </Col>
      );
    });
  }, [productList.data]);

  const renderProductListFilter = useMemo(() => {
    return [...productList.data].slice(5, 12).map((item) => {
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

  // const handleShowMore = () => {
  //   dispatch(
  //     getProductListAction({
  //       ...filterParams,
  //       page: productList.meta.page + 1,
  //       limit: PRODUCT_LIMIT,
  //       more: true,
  //     })
  //   );
  // };
  const handleChangePage = (page) => {
    dispatch(
      getProductListAction({
        ...filterParams,
        page: page,
        limit: PRODUCT_LIMIT,
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
            {/* <h5 style={{ fontSize: "16px" }}>LỌC THEO GIÁ</h5>
            <Divider style={{ margin: "4px auto", borderColor: "#888080" }} />
            <Slider
              range
              min={0}
              max={1000000000}
              step={1000000}
              defaultValue={filterParams.price}
              formatter={(value) => `${value.toLocaleString()} ₫`}
              onChange={(values) => handleFilter("price", values)}
            /> */}
            {/* <Space
              style={{ justifyContent: "space-between", marginBottom: "16px" }}
            >
              <Button onClick={(values) => handleFilter("price", values)}>
                LỌC
              </Button>
              <h5 color="black">
                Giá: <span>{filterParams.price?.toLocaleString()} ₫</span>
              </h5>
            </Space> */}
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
            Muller, Omega, đồng hồ bằng vàng 18k….có sẵn tại Luxury Watch Điện
            Biên Phủ – Hoàn Kiếm – Hà Nội. Các mẫu đồng hồ nam, nữ chính hãng đã
            qua sử dụng hoặc mới 100% có sẵn, giá tốt nhất Việt Nam. Luxury
            Watch đảm bảo là nơi bán ra những chiếc đồng hồ nam, nữ chính hãng
            số 1 tại Việt Nam. Những chiếc đồng hồ nam nữ không chỉ được đảm bảo
            về chất lượng mà giá cả vô cùng hợp lý. Bảo hành dài hạn, giao hàng
            COD (kiểm tra hàng thanh toán tiền khi nhận hàng).
          </span>
          <Spin spinning={productList.load}>
            <Row gutter={[16, 16]} style={{ marginTop: "16px" }}>
              {renderProductList}
            </Row>
          </Spin>
          {productList.data.length !== productList.meta.total && (
            <Row justify="center" style={{ marginTop: 16 }}>
              {/* <Button onClick={() => handleShowMore()}>Show more</Button> */}
              <Pagination
                current={productList.meta.page}
                pageSize={PRODUCT_LIMIT}
                total={productList.meta.total}
                onChange={(page) => handleChangePage(page)}
                style={{ margin: "16px auto" }}
              />
            </Row>
          )}
        </Col>
      </Row>
    </S.ProductListWrapper>
  );
}
export default ProductListPage;
