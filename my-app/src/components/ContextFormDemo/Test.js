import React from "react";
import Form from "./Form";

const form = {
  name: "1",
  age: ""
};

export default function Test() {
  return (
    <Form form={form}>
      <Form.Item label="名称：" name="name">
        <Form.Input />
      </Form.Item>

      <Form.Item label="年龄：" name="age">
        <Form.Input />
      </Form.Item>

      <Form.Item>
        <Form.Submit
          submit={form => {
            console.log(form);
          }}>
          submit
        </Form.Submit>
      </Form.Item>
    </Form>
  );
}
