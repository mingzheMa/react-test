import ReactDOM from "react-dom";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import qs from "query-string";

// 当组件传入Route的component属性时，Route会给该组件添加三个props（只有component属性中的组件有路由参数）
// 1.history：和window.history上的方法一致，但是两者不是同一个对象
// 2.location：本质上就是history.location对象，两者是一个对象，只是为了方便获取
// 3.match：匹配到的路由信息

// 如果不是上述情况的组件，并且需要访问路由参数时
// 1.父组件将路由参数一层一层传递到子组件
// 2.使用react-router-dom中的withRouter高阶组件

// function Page1(props) {
//   return (
//     <div>
//       <h1>page1</h1>
//       <button
//         onClick={() => {
//           props.history.push("/2?canshu1=1&canshu2=2#hash", "page1"); //第二个参数传递数据，可以是任意类型，在location.state中获取
//         }}>
//         jump
//       </button>
//     </div>
//   );
// }

// function Page2(props) {
//   // 可以使用query-string解析search字符串
//   console.log(qs.parse(props.location.search));
//   return (
//     <div>
//       <h1>page2</h1>
//       <button
//         onClick={() => {
//           props.history.push("/1", "page1");
//         }}>
//         jump
//       </button>
//     </div>
//   );
// }

function News(props) {
  console.log(props);
  const params = props.match.params;
  return (
    <div>
      date：{params.YYYY || "XXXX"}-{params.MM || "XX"}-{params.DD || "XX"}
    </div>
  );
}

function BackBtn(props) {
  console.log(props);
  return (
    <button
      onClick={() => {
        props.history.goBack();
      }}>
      back
    </button>
  );
}

const BackBtnWithRouter = withRouter(BackBtn);

// withRouter伪代码
// function withRouter(Comp) {
//   const context = 获取上下文中的route参数;
//   return <Comp {...porops} {...context} />;
// }

function NoPage() {
  return (
    <div>
      <p>404</p>
      <BackBtnWithRouter />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route path="/1" exact component={Page1} />
        <Route path="/2" exact component={Page2} />
        <Route path="/" component={Page1} /> */}

        {/* <Route path="/news/:YYYY/:MM/:DD" exact component={News} /> */}
        <Route path="/news/:YYYY?/:MM?/:DD?" exact component={News} />
        <Route path="/" component={NoPage} />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
