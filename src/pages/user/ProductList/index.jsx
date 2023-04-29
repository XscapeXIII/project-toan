import { useEffect, useMemo, useState } from "react";
import { Link, generatePath } from "react-router-dom";

import { Button, Card, Row, Col, Input, Select, Checkbox, Spin } from "antd";
import * as S from "./styles";

import { useDispatch, useSelector } from "react-redux";

import {
  getProductListAction,
  getCategoryListAction,
} from "../../../redux/actions";

import { ROUTES } from "../../../constants/routes";
import { PRODUCT_LIMIT } from "../../../constants/paging";

function ProductListPage() {
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.product);
  const { categoryList } = useSelector((state) => state.category);

  const [filterParams, setFilterParams] = useState({
    categoryId: [],
    searchKey: "",
    sort: "",
  });
  // console.log(filterParams);
  useEffect(() => {
    dispatch(
      getProductListAction({
        page: 1,
        limit: PRODUCT_LIMIT,
      })
    );
    dispatch(getCategoryListAction());
  }, []);

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

  const renderProductList = useMemo(() => {
    return productList.data.map((item) => {
      return (
        <Col key={item.id} xs={12} xl={8}>
          <Link to={generatePath(ROUTES.USER.PRODUCT_DETAIL, { id: item.id })}>
            <Card title={item.name} size="small">
              <p>{item.category?.name}</p>
              <p>{item.price.toLocaleString()} VNĐ</p>
            </Card>
          </Link>
        </Col>
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
      <Row gutter={[16, 16]} size="small">
        <Col span={6}>
          <Card title="Filter">
            <Checkbox.Group
              onChange={(values) => handleFilter("categoryId", values)}
            >
              <Row>{renderCategoryFilter}</Row>
            </Checkbox.Group>
          </Card>
        </Col>
        <Col span={18}>
          <Row gutter={[8, 8]} style={{ marginBottom: 16 }}>
            <Col span={18}>
              <Input
                onChange={(e) => handleFilter("searchKey", e.target.value)}
                placeholder="Search..."
              />
            </Col>
            <Col span={6}>
              <Select
                onChange={(value) => handleFilter("sort", value)}
                placeholder="Sort by..."
                style={{ width: "100%" }}
              >
                <Select.Option value="name.decs">Tên A-Z</Select.Option>
                <Select.Option value="name.asc">Tên Z-A</Select.Option>
                <Select.Option value="price.asc">Giá tăng dần</Select.Option>
                <Select.Option value="price.desc">Giá giảm dần</Select.Option>
              </Select>
            </Col>
          </Row>
          <Spin spinning={productList.load}>
            <Row gutter={[16, 16]}>{renderProductList}</Row>
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
