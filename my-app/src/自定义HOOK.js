import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Page from "./components/Page";

// 提取首次加载、当前页、页容量更新时获取学生列表HOOK方法
function useGetStudents(page, size) {
  const [list, setlist] = useState([]);
  const [total, settotal] = useState(0);

  useEffect(() => {
    (async function () {
      const info = await getStudents(page, size);
      setlist(info.data.data.findByPage);
      settotal(info.data.data.cont);
    })();
  }, [page, size]);

  return {
    list,
    total
  };
}

// 定时器HOOK
function useTimer(fn, time) {
  useEffect(() => {
    console.log("creat");
    const timer = setInterval(fn, time);

    return () => {
      console.log("clear");
      clearInterval(timer);
    };
  }, []);
}

function Test() {
  const [page, setpage] = useState(1);
  const [size, setsize] = useState(10);

  const students = useGetStudents(page, size);
  useTimer(() => {
    console.log("Test timer");
  }, 1000);
  return (
    <>
      <input
        type="number"
        value={page}
        onChange={e => {
          setpage(e.target.value);
        }}
      />

      <input
        type="number"
        value={size}
        onChange={e => {
          setsize(e.target.value);
        }}
      />

      <ul>
        {students.list.map(s => (
          <li key={s.id}>
            {s.name}；{s.sex ? "男" : "女"}
          </li>
        ))}
      </ul>

      <Page
        current={page}
        pageSize={size}
        total={students.total}
        onChange={page => setpage(page)}
      />
    </>
  );
}

function App() {
  const [isShow, setIsShow] = useState(true);
  return (
    <>
      {isShow && <Test />}
      <button
        onClick={() => {
          setIsShow(!isShow);
        }}>
        显示/隐藏
      </button>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// 获取学生列表
function getStudents(page = 1, size = 10) {
  const appkey = "demo13_1545210570249";
  return axios.get(
    `/api/student/findByPage?appkey=${appkey}&page=${page}&size=${size}`
  );
}
