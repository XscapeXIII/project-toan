import { useEffect } from "react";
import { Button, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";

const PersonalInfo = () => {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);

  const initialValues = {
    fullName: userInfo.data.fullName,
    email: userInfo.data.email,
  };
  const [profileForm] = Form.useForm();

  useEffect(() => {
    if (userInfo.data.id) {
      profileForm.resetFields();
    }
  }, [profileForm, userInfo.data.id]);

  return (
    <Form
      name="infoForm"
      form={profileForm}
      layout="vertical"
      initialValues={initialValues}
      //   onFinish={(values) => handleChangeProfile(values)}
    >
      <Form.Item label="Tên Đăng nhập:" name="fullName">
        <Input />
      </Form.Item>
      <Form.Item
        label="Email:"
        name="email"
        rules={[
          {
            whitespace: true,
            message: "Vui lòng điền tên người nhận hàng",
          },
        ]}
      >
        <Input disabled />
      </Form.Item>
      <Form.Item label="Mật Khẩu Mới:" name="password">
        <Input />
      </Form.Item>
      <Form.Item label="Xác Nhận Mật Khẩu Mới:" name="confirmPassword">
        <Input />
      </Form.Item>
      <Button>Thay đổi Thông Tin Cá Nhân</Button>
    </Form>
  );
};

export default PersonalInfo;
