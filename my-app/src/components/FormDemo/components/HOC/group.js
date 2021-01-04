import React, { Component } from "react";
import PT from "prop-types";

export default function group(Comp) {
  return class Group extends Component {
    static propTypes = {
      datas: PT.arrayOf(
        PT.shape({
          label: PT.string,
          value: PT.string
        })
      ).isRequired
    };

    render() {
      const boxs = this.props.datas.map(d => (
        <Comp key={d.value} info={d} {...this.props} />
      ));

      return <>{boxs}</>;
    }
  };
}
