import React, { Component } from 'react'

export default class Box extends Component {
  state = {
    name:"Box"
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
