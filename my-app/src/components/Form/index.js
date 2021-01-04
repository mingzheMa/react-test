import React, { Component } from "react";

export default class Form extends Component {
  state = {
    name: "marx",
    say: "哈哈",
    lovers: ["写代码"],
    six: "男"
  };

  updateState = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  setLovers = (type, isSelect) => {
    if (isSelect) {
      return this.state.lovers.concat(type);
    } else {
      return this.state.lovers.filter(l => l !== type);
    }
  };

  render() {
    return (
      <>
        <div>
          <input
            value={this.state.name}
            onChange={e => this.updateState("name", e.target.value)}
          />

          <select onChange={e => this.updateState("say", e.target.value)}>
            <option value="哈哈">哈哈</option>
            <option value="呵呵">呵呵</option>
            <option value="嘿嘿">嘿嘿</option>
          </select>

          <label>
            <input
              type="checkbox"
              value={this.state.lovers.includes("看电影")}
              onChange={e =>
                this.updateState(
                  "lovers",
                  this.setLovers("看电影", e.target.checked)
                )
              }
            />
            看电影
          </label>

          <label>
            <input
              type="radio"
              name="six"
              checked={this.state.six === "男"}
              onChange={e => this.updateState("six", "男")}
            />
            男
          </label>

          <label>
            <input
              type="radio"
              name="six"
              checked={this.state.six === "女"}
              onChange={e => this.updateState("six", "女")}
            />
            女
          </label>
        </div>

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
