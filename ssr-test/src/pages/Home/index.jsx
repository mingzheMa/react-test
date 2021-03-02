import React, { useState } from "react";
import indexCss from "./index.css";
import imgURL from "@/assets/img/jienuo_qibeilin.png";
console.log(indexCss);

export default function Home() {
  const [num, setNum] = useState(0);
  return (
    <div>
      <h1 className={indexCss.redFont,indexCss.imgBg}>num：{num}</h1>
      {num === 5 && <img src={imgURL} alt="" />}
      <button
        onClick={() => {
          setNum(num + 1);
        }}>
        ++
      </button>
    </div>
  );
}
