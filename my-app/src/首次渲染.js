import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// react元素：通过React.createElement或者jsx创建
// react节点：专注于渲染dom元素的节点，渲染时react会根据react元素创建react节点，而react节点会形成虚拟dom树
// 节点类型：Dom节点、文本节点、空节点(undefined，null，true，false)、数组节点、组件节点

// 渲染顺序
// 1.判断节点类型创建节点
//   Dom节点：通过document.createElement创建，遍历react元素中children属性(根据每一项重新递归函数)
//   文本节点：通过document.createTextNode创建
//   空节点：不创建真实Dom元素，但保留占位节点
//   数组节点：遍历数组每一项(根据每一项重新递归函数)
//   组件节点：
//     函数组件：执行该函数，将props和ref传递给函数参数，得到返回结果(重新递归函数)
//     类组件：创建类的实例，执行生命周期函数static getDerivedStateFromProps，执行生命周期函数runder拿到返回结果(重新递归函数)，将该组件的生命周期函数componentDidMoun加入执行队列，当整个虚拟dom树构建完毕后执行该队列
// 2.将生成的虚拟dom树保存，以便后面更新比较
// 3.将之前创建的dom元素加入到容器中

// const dom = (
//   <div>
//     <p>
//       p-text
//       {[1, "1", true, <i>i</i>]}
//     </p>
//     <span>span-text</span>
//     {undefined}
//   </div>
// );
// ReactDOM.render(dom, document.getElementById("root"));
// 这段代码渲染顺序
// 1.拿到根节点，判断为Dom节点，创建该节点，判断存在children属性并且为数组，遍历children属性
// <p>
// 2.拿到名称为p的Dom节点，创建该节点，判断存在children属性并且为数组，遍历children属性
// 3.拿到为p-text的文本节点，创建该节点
//   {[1, "1", true, <i>i</i>]}
// 4.拿到为{[1, "1", true, <i>i</i>]}的数组节点，创建一个占位节点。遍历数组
// 5.拿到为1的文本节点，创建该节点
// 6.拿到为“1”的文本节点，创建该节点
// 7.拿到为true的空节点，创建一个占位节点
// 8.拿到名称为i的Dom节点，创建该节点，判断存在chiildren属性并判断为Dom节点
// 9.拿到为i的文本节点，创建该节点
// <span>
// 10.拿到名为span的Dom节点，创建改节点，判断存在children属性并判断为Dom节点
// 11.拿到为span-text的文本节点，创建该节点
// {undefined}
// 12.拿到返回值为undefined的空节点，创建一个占位节点

// 上面代码渲染产生虚拟dom树结构
//                                                                     div(dom节点，生成Dom元素)
//                                     /                                          |                                               \
//                 p(dom节点，生成Dom元素)                               span(dom节点，生成Dom元素)                                    undefined(空节点)
//                  /                  \
// p-text(文本节点，生成Dom元素)   [1, "1", true, <i>i</i>](数组节点)
//                               /              |               \
//           1(文本节点，生成Dom元素)     "1"(文本节点，生成Dom元素)  i(dom节点，生成Dom元素)
//                                                                          |
//                                                              i(文本节点，生成Dom元素)

// function Comp1() {
//   return <Comp2 />;
// }
// function Comp2() {
//   return <span>span</span>;
// }
// const dom = (
//   <div>
//     <Comp1 />
//   </div>
// );
// ReactDOM.render(dom, document.getElementById("root"));
// 这端代码渲染顺序
// 1.拿到根组件，判断名为div的Dom节点，创建该节点，判断存在children属性并为函数组件节点
// 2.拿到名为Comp1的函数组件节点，执行该函数获得返回值
// 3.拿到名为Comp2的函数组件节点，执行该函数获得返回值
// 4.拿到名为span的Dom节点，创建该节点，判断存在children属性并为文本节点
// 5.拿到名为span的文本节点，创建该节点

// 上面这端代码渲染产生的虚拟dom树
// div(dom节点，生成Dom元素)
//            |
// Comp1(函数组件节点)
//            |
// Comp2(函数组件节点)
//            |
// span(dom节点，生成Dom元素)
//            |
// span(文本节点，生成Dom元素)

class Comp1 extends Component {
  componentDidMount() {
    console.log("Comp1");
  }
  runder() {
    return <Comp2 />;
  }
}
class Comp2 extends Component {
  componentDidMount() {
    console.log("Comp2");
  }
  runder() {
    return <span>span</span>;
  }
}
const dom = (
  <div>
    <Comp1 />
  </div>
);
ReactDOM.render(dom, document.getElementById("root"));
// 这端代码渲染顺序
// 1.拿到根组件，判断名为div的Dom节点，创建该Dom元素，判断存在children属性并为类组件节点
// 2.拿到名为Comp1的类组件节点，创建该类实例，并执行相关生命周期，得到runder返回值
// 3.拿到名为Comp2的类组件节点，创建该类实例，并执行相关生命周期，得到runder返回值
// 4.拿到名为span的Dom节点，创建该Dom元素，判断存在children属性并为文本节点
// 5.拿到名为span的文本节点，创建该文本元素
// 6.将Comp2的componentDidMount生命周期放入执行队列
// 7.将Comp1的componentDidMount生命周期放入执行队列
// 8.虚拟dom树构建完毕，执行队列，输出：Comp2;Comp1

// 上面这端代码渲染产生的虚拟dom树
// div(dom节点，生成Dom元素)
//            |
// Comp1(类组件节点，创建实例)
//            |
// Comp2(类组件节点，创建实例)
//            |
// span(dom节点，生成Dom元素)
//            |
// span(文本节点，生成Dom元素)