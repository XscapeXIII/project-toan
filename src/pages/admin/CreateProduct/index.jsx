import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Input, Select, InputNumber, Space, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import ReactQuill from "react-quill";

import { ROUTES } from "constants/routes";
import {
  getCategoryListAction,
  createProductAction,
  getGenderListAction,
} from "redux/actions";

import * as S from "./styles";

const CreateProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [createForm] = Form.useForm();

  const { categoryList, genderList } = useSelector((state) => state.category);
  const { createProductData } = useSelector((state) => state.product);

  const initialValues = {
    name: "",
    price: undefined,
    categoryId: undefined,
    genderId: undefined,
    miniContent: "",
    content: "",
    images: [],
  };

  useEffect(() => {
    dispatch(getCategoryListAction());
    dispatch(getGenderListAction());
  }, [dispatch]);

  const convertImageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleCreateProduct = async (values) => {
    const { images, ...productValues } = values;
    const newImages = [];
    for (let i = 0; i < images.length; i++) {
      const imgBase64 = await convertImageToBase64(images[i].originFileObj);
      await newImages.push({
        name: images[i].name,
        type: images[i].type,
        thumbUrl: images[i].thumbUrl,
        url: imgBase64,
      });
    }
    dispatch(
      createProductAction({
        data: productValues,
        images: newImages,
        callback: () => navigate(ROUTES.ADMIN.PRODUCT_MANAGEMENT),
      })
    );
  };

  const renderProductOptions = useMemo(() => {
    return categoryList.data.map((item) => {
      return <Select.Option key={item.id}>{item.name}</Select.Option>;
    });
  }, [categoryList.data]);

  const renderGenderOptions = useMemo(() => {
    return genderList.data.map((item) => {
      return <Select.Option key={item.id}>{item.name}</Select.Option>;
    });
  }, [genderList.data]);

  return (
    <S.Wrapper>
      <S.TopWrapper>
        <h3>Thêm sản phẩm mới</h3>
        <Button
          type="primary"
          loading={createProductData.load}
          onClick={() => createForm.submit()}
        >
          Tạo sản phẩm
        </Button>
      </S.TopWrapper>
      <Form
        form={createForm}
        layout="vertical"
        initialValues={initialValues}
        onFinish={(values) => handleCreateProduct(values)}
      >
        <Form.Item
          label="Tên sản phẩm:"
          name="name"
          rules={[{ required: true, message: "Điền tên sản phẩm cần thêm!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Loại sản phẩm"
          name="categoryId"
          rules={[{ required: true, message: "Chọn loại sản phẩm cần thêm!" }]}
        >
          <Select>{renderProductOptions}</Select>
        </Form.Item>
        <Form.Item
          label="Đồng hồ nam/ nữ"
          name="genderId"
          rules={[
            { required: true, message: "Chọn giới tính sản phẩm cần thêm!" },
          ]}
        >
          <Select>{renderGenderOptions}</Select>
        </Form.Item>
        <Space>
          <Form.Item
            label="Giá sản phẩm:"
            name="price"
            rules={[{ required: true, message: "Điền giá sản phẩm cần thêm!" }]}
          >
            <InputNumber
              formatter={(value) => value.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
              style={{ width: 200 }}
            />
          </Form.Item>
          <span>₫</span>
        </Space>
        <Form.Item
          label="Thêm hình ảnh:"
          name="images"
          valuePropName="fileList"
          getValueFromEvent={(e) => {
            if (Array.isArray(e)) return e;
            return e?.fileList;
          }}
        >
          <Upload listType="picture-card" beforeUpload={Upload.LIST_IGNORE}>
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item
          label="Thông số kỹ thuật:"
          name="miniContent"
          rules={[{ required: true, message: "Điền mô tả sản phẩm cần thêm!" }]}
        >
          <ReactQuill
            theme="snow"
            onChange={(value) => {
              createForm.setFieldsValue({ content: value });
            }}
          />
        </Form.Item>
        <Form.Item
          label="Mô tả chi tiết sản phẩm"
          name="content"
          rules={[{ required: true, message: "Điền mô tả sản phẩm cần thêm!" }]}
        >
          <ReactQuill
            theme="snow"
            onChange={(value) => {
              createForm.setFieldsValue({ content: value });
            }}
          />
        </Form.Item>
      </Form>
    </S.Wrapper>
  );
};

export default CreateProductPage;
