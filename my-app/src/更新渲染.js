import ReactDOM from "react-dom";
ReactDOM.render(null, document.getElementById("root"));

// react页面更新场景：
// 1.使用ReactDOM.render重新渲染根节点
// 2.使用setState更新类组件状态

// ReactDOM.render：递归根节点对比更新（diff）
// setState：
// 1.执行生命周期函数static getDerivedStateFromProps
// 2.执行生命周期函数shouldComponentUpdate，如果返回false，更新终止
// 3.执行生命周期函数runder，递归返回的子节点进行 对比更新（diff）
// 4.对比更新结束后将生命周期函数getSnapshotBeforeUpdate放入执行队列
// 5.将生命周期函数componentDidUpdate放入执行队列

// 更新后续：
// 1.更新虚拟DOM树
// 2.挂载虚拟DOM树
// 3.执行队列中生命周期函数componentDidMount
// 4.执行队列中生命周期函数getSnapshotBeforeUpdate
// 5.执行队列中生命周期函数componentDidUpdate

// react为了提升对比效率做出如下假设：
// 1.节点的层级不发生变动
// 2.节点类型相同则节点相同，否则为不同：react节点的type相同
// 3.多个相同兄弟节点通过key进行对比

// key的作用：通过旧节点的key去查找新节点的key值，如果有则对比，如果没有则删掉

// react根据旧的虚拟DOM树去找新的虚拟DOM树中的节点

// 找到相同结构的相同节点（层级一样，位置一样，节点类型一样）则进行对比
// 不同的对比结果做的事情不一样：

// 对比结果相同：
//  空节点：什么也不做
//  文本节点：重用之前的真实DOM元素，记录更改的属性以便后续更新
//  DOM节点：重用之前的真实DOM元素，遍历子节点递归进行对比
//  函数组件节点：调用函数，递归返回结果中的根节点进行对比
//  数组节点：遍历数组，递归对比数组中的每一项
//  类组件节点：
//    1.重用之前的类实例对象
//    2.调用生命周期函数static getDerivedStateFromProps
//    3.调用生命周期函数shouldComponentUpdate，如果返回false，当前组件更新终止
//    4.调用生命周期函数runder，递归返回结果中的根节点进行对比
//    5.对比更新结束后将生命周期函数getSnapshotBeforeUpdate放入执行队列
//    6.将生命周期函数componentDidUpdate放入执行队列

// 对比结果不相同：先创建后卸载
// 类组件节点：
//    1.卸载改节点
//    2.调用生命周期函数componentWillUnMount
//    3.递归卸载子节点
// 其他节点：
//    1.卸载该节点
//    2.递归卸载子节点

// 没有找到对比对象
// 添加新的，卸载旧的