import React, { useState } from "react";
import { connect } from "react-redux";

import indexCss from "./index.css";
import imgURL from "@/assets/img/jienuo_qibeilin.png";
import { add, minus } from "@/store/action/num";
// console.log(indexCss);

function Home({ storeNum, onAddStoreNum, onMinusStoreNum }) {
  // const [num, setNum] = useState(0);
  // console.log(props);
  return (
    <div>
      {/* <h1 className={(indexCss.redFont, indexCss.imgBg)}>num：{num}</h1>
      {num === 5 && <img src={imgURL} alt="" />}
      <button
        onClick={() => {
          setNum(num + 1);
        }}>
        ++
      </button> */}

      <h1>STORE</h1>
      <button onClick={() => onMinusStoreNum(1)}>--</button>

      <h1>{storeNum}</h1>

      <button onClick={() => onAddStoreNum(1)}>++</button>
    </div>
  );
}

function mapStateToProps(store) {
  return {
    storeNum: store.num
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAddStoreNum(num) {
      dispatch(add(num));
    },
    onMinusStoreNum(num) {
      dispatch(minus(num));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
