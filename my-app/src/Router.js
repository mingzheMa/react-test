import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Router
// 1.路由有两种hash和browser，分别对应HashRouter和BrowserRouter组件
// 2.本身不做任何展示，只提供路由配置，产生一个上下文提供一些路由信息以及方法

// Route
// 1.通过path属性匹配路由
// 2.设置exact是否精确匹配
// 3.设置sensitive是否区分大小写
// 4.匹配上的路由会渲染component属性传入的组件
// 5.无论是否匹配都将渲染children属性传入的组件，并会忽略掉component属性传入的组件

// Switch
// 1.匹配到路由立即停止
// 2.不能再Switch中使用除Route之外的组件

function A() {
  return <h1>A</h1>;
}

function B() {
  return <h1>B</h1>;
}

function C() {
  return <h1>C</h1>;
}

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/b" exact component={B} />
          <Route path="/c" exact component={C} />
          <Route path="/" component={A} />
        </Switch>
      </Router>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
