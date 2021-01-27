import React, { Component } from "react";
import "./index.css";

export default class index extends Component {
  //   获取总页数
  getPageNum() {
    const { total, pageSize } = this.props;
    return Math.ceil(total / pageSize);
  }

  //   是否为开头
  isStart() {
    return this.props.current === 1;
  }

  //   是否未结尾
  isEnd() {
    return this.props.current === this.getPageNum();
  }

  //   跳转分页
  toPage = page => {
    if (page > 0 && page <= this.getPageNum() && page !== this.props.current) {
      this.props.onChange && this.props.onChange(page);
    }
  };

  // 预览页
  previewPage() {
    const all = this.getPageNum();
    const cur = this.props.current;
    const prv = this.props.previewPage || 10;
    const min = cur - Math.floor(prv / 2);
    const minPage = min > 0 ? (min > all - prv ? all - prv + 1 : min) : 1;
    const max = minPage + prv - 1;
    const maxPage = max > all ? all : max;

    const pages = [];
    for (let i = minPage; i <= maxPage; i++) {
      pages.push(
        <li
          className={cur === i ? "page-item page--select" : "page-item"}
          onClick={() => this.toPage(i)}
          key={i}>
          {i}
        </li>
      );
    }

    return pages;
  }

  render() {
    return (
      <ul className="page">
        <li
          className={this.isStart() ? "page-item page--disable" : "page-item"}
          onClick={() => this.toPage(1)}>
          首页
        </li>
        <li
          className={this.isStart() ? "page-item page--disable" : "page-item"}
          onClick={() => this.toPage(this.props.current - 1)}>
          上一页
        </li>
        {this.previewPage()}
        <li
          className={this.isEnd() ? "page-item page--disable" : "page-item"}
          onClick={() => this.toPage(this.props.current + 1)}>
          下一页
        </li>
        <li
          className={this.isEnd() ? "page-item page--disable" : "page-item"}
          onClick={() => this.toPage(this.getPageNum())}>
          尾页
        </li>

        <li>
          {this.props.current} / {this.getPageNum()}
        </li>
      </ul>
    );
  }
}
