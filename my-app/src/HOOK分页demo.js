import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Page from "./components/Page";

export default function Test() {
  const [page, setpage] = useState(1);
  const [size, setsize] = useState(10);
  const [total, settotal] = useState(0);

  const [students, setstudents] = useState([]);

  useEffect(() => {
    (async function () {
      const list = await getStudents(page, size);
      setstudents(list.data.data.findByPage);
      settotal(list.data.data.cont);
    })();
  }, [page, size]);

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
        {students.map(s => (
          <li key={s.id}>
            {s.name}；{s.sex ? "男" : "女"}
          </li>
        ))}
      </ul>

      <Page
        current={page}
        pageSize={size}
        total={total}
        onChange={page => setpage(page)}
      />
    </>
  );
}

ReactDOM.render(<Test />, document.getElementById("root"));

// 获取学生列表
function getStudents(page = 1, size = 10) {
  const appkey = "demo13_1545210570249";
  return axios.get(
    `/api/student/findByPage?appkey=${appkey}&page=${page}&size=${size}`
  );
}
