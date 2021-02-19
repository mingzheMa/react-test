import React, { useState } from "react";

export default function Home() {
  const [num, setNum] = useState(0);
  return (
    <div>
      <h1>num：{num}</h1>
      <button onClick={() => {
        setNum(num + 1)
      }}>++</button>
    </div>
  );
}
