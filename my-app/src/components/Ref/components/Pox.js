import React, { Component } from 'react'

export default class Pox extends Component {
  state = {
    name:"Pox"
  }

  say(){
    console.log("hellow")
  }

  render() {
    return (
      <div>
        我是函数组件{this.state.name}
      </div>
    )
  }
}
