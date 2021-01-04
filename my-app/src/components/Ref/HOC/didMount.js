import React, { Component } from "react";

export default function DidMount(Comp) {
  class DidMount extends Component {
    componentDidMount() {
      console.log(`组件${Comp.name}挂载`);
    }

    render() {
      const { forwardRef, ...props } = this.props;
      return <Comp ref={forwardRef} {...props} />;
    }
  }

  return React.forwardRef((props, ref) => (
    <DidMount forwardRef={ref} {...props} />
  ));
}
