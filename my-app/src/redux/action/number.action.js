/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

// actionCreators
// 1.函数必须为纯函数（不能修改参数、外部、不能有异步）
// 2.返回值是一个plain-object（平面对象，__proto__指向Object.prototype）
// 3.返回值必须有操作类型type，变量payload（一般叫payload，并没有严格要求）
export default {
  jiaAction(payload) {
    return {
      type: "+",
      payload
    };
  },

  jiajiaAction() {
    return {
      type: "++"
    };
  },

  jianAction(payload) {
    return {
      type: "-",
      payload
    };
  },

  jianjianAction() {
    return {
      type: "--"
    };
  }
};
