import { useState, Fragment, useMemo } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addToDoAction } from "../../../redux/actions";

import { Form, Input, Card, Button } from "antd";

import TodoItem from "./TodoItem";

function ToDoList() {
  const dispatch = useDispatch();
  //Lấy selector là cái tên đặt ở trong store.js
  const { toDoList } = useSelector((state) => state.todo);
  const [addForm] = Form.useForm();

  const [searchKey, setSearchKey] = useState("");
  const [text, setText] = useState("");

  const filterToDoList = useMemo(
    () =>
      toDoList.filter((item) =>
        item.title.toLowerCase().includes(searchKey.toLowerCase())
      ),
    [searchKey, toDoList]
  );

  const renderToDoList = useMemo(() => {
    return filterToDoList.map((item) => {
      return (
        <Fragment key={item.id}>
          <TodoItem
            key={item.id}
            id={item.id}
            title={item.title}
            content={item.content}
          />
        </Fragment>
      );
    });
  }, [filterToDoList]);

  return (
    <div>
      <Card size="small">
        <Form
          name="addTodo"
          form={addForm}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          onFinish={(values) => {
            dispatch(addToDoAction(values));
            addForm.resetFields();
          }}
        >
          <Form.Item
            label="Title"
            name="title"
            validateFirst
            rules={[
              {
                required: true,
                whitespace: true,
                message: "Title là bắt buộc!",
              },
              {
                min: 3,
                type: "string",
                message: "Title phải dài hơn 3 kí tự",
              },
              {
                pattern: /^[A-Z].{0,}$/g,
                message: "Chữ cái đầu tiên phải viết hoa",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Content"
            name="content"
            validateFirst
            rules={[
              {
                required: true,
                whitespace: true,
                message: "Content là bắt buộc!",
              },
              {
                max: 20,
                type: "string",
                message: "Content phải ngắn hơn 20 kí tự",
              },
              {
                pattern: /^[A-Z].{0,}$/g,
                message: "Chữ cái đầu tiên phải viết hoa",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit" block>
            Add
          </Button>
        </Form>
      </Card>
      <Input
        onChange={(e) => setSearchKey(e.target.value)}
        style={{ marginTop: 16 }}
      />
      {/* <Button onClick={() => renderToDoList}>Search</Button> */}
      {renderToDoList}
      <Input
        onChange={(e) => setSearchKey(e.target.value)}
        style={{ marginTop: 16 }}
      />
    </div>
  );
}

export default ToDoList;
