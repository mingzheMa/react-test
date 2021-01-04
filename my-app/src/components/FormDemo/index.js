import React, { Component } from "react";
import Input from "./components/Input";
import Select from "./components/Select";
import CheckboxGroup from "./components/CheckboxGroup";
import RadioGroup from "./components/RadioGroup";

export default class Form extends Component {
  state = {
    name: "marx",
    say: "haha",
    lovers: ["音乐"],
    sex: "1"
  };

  says = [
    {
      label: "嘿嘿",
      value: "heihei"
    },
    {
      label: "呵呵",
      value: "hehe"
    },
    {
      label: "哈哈",
      value: "haha"
    }
  ];

  lovers = [
    {
      label: "电影",
      value: "电影"
    },
    {
      label: "音乐",
      value: "音乐"
    },
    {
      label: "美术",
      value: "美术"
    }
  ];

  sex = [
    {
      label: "男",
      value: "1"
    },
    {
      label: "女",
      value: "0"
    }
  ];

  updateState = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  render() {
    return (
      <>
        <Input
          value={this.state.name}
          onChange={e => this.updateState("name", e)}
        />

        <Select
          value={this.state.say}
          options={this.says}
          onChange={e => this.updateState("say", e)}
        />

        <CheckboxGroup
          value={this.state.lovers}
          datas={this.lovers}
          onChange={e => this.updateState("lovers", e)}
        />

        <RadioGroup
          name="sex"
          value={this.state.sex}
          datas={this.sex}
          onChange={e => this.updateState("sex", e)}
        />

        <div>
          {Object.keys(this.state).map(s => (
            <p key={s}>
              {s}：{this.state[s]}
            </p>
          ))}
        </div>
      </>
    );
  }
}
