import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Input, Row, Col, Card, Divider } from "antd";

import { changePasswordAction, updateUserInfoAction } from "redux/actions";

const PersonalInfo = () => {
  const [changePasswordForm] = Form.useForm();
  const [profileForm] = Form.useForm();

  const { userInfo, changePasswordData } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const initialValues = {
    fullName: userInfo.data.fullName,
    email: userInfo.data.email,
  };

  useEffect(() => {
    if (changePasswordData.error) {
      changePasswordForm.setFields([
        {
          name: "password",
          errors: ["Mật khẩu không đúng!"],
        },
      ]);
    }
  }, [changePasswordData.error, changePasswordForm]);

  const handleChangePassword = (values) => {
    dispatch(
      changePasswordAction({
        id: userInfo.data.id,
        data: {
          email: userInfo.data.email,
          password: values.password,
          newPassword: values.newPassword,
        },
        callback: () => changePasswordForm.resetFields(),
      })
    );
  };

  useEffect(() => {
    if (userInfo.data.id) {
      profileForm.resetFields();
    }
  }, [profileForm, userInfo.data.id]);

  const handleChangeProfile = (values) => {
    dispatch(
      updateUserInfoAction({
        id: userInfo.data.id,
        data: {
          email: userInfo.data.email,
          fullName: values.fullName,
        },
        callback: () => profileForm.resetFields(),
      })
    );
  };

  return (
    <Row gutter={[16, 16]}>
      <Col span={12}>
        <Card title={false} size="small">
          <div style={{ margin: "16px auto" }}>
            <h3>THÔNG TIN TÀI KHOẢN</h3>
          </div>
          <Divider
            style={{
              borderColor: "#201111",
              margin: "12px 0",
              border: "1px solid",
            }}
          />
          <Form
            name="profileForm"
            form={profileForm}
            layout="vertical"
            initialValues={initialValues}
            onFinish={(values) => handleChangeProfile(values)}
            autoComplete="off"
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
                },
              ]}
            >
              <Input disabled />
            </Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              loading={profileForm.load}
            >
              Thay đổi Thông Tin Tài Khoản
            </Button>
          </Form>
        </Card>
      </Col>
      <Col span={12}>
        <Card title={false} size="small">
          <div style={{ margin: "16px auto" }}>
            <h3>THAY ĐỔI MẬT KHẨU</h3>
          </div>
          <Divider
            style={{
              borderColor: "#201111",
              margin: "12px 0",
              border: "1px solid",
            }}
          />
          <Form
            name="changePasswordForm"
            form={changePasswordForm}
            layout="vertical"
            onFinish={(values) => handleChangePassword(values)}
            autoComplete="off"
          >
            <Form.Item
              label="Nhập mật khẩu cũ:"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập mật khẩu!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="Mật Khẩu Mới:"
              name="newPassword"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập mật khẩu mới!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="Xác Nhận Mật Khẩu Mới:"
              name="confirmNewPassword"
              rules={[
                {
                  required: true,
                  message: "Vui lòng xác nhận mật khẩu mới!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("newPassword") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      "The two passwords that you entered do not match!"
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              loading={changePasswordData.load}
            >
              Thay đổi mật khẩu
            </Button>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default PersonalInfo;
