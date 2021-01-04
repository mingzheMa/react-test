import React, { Component } from 'react'

export default class Slot extends Component {
    render() {
        return (
            <div>
                {/* 具名插槽 */}
                {this.props.header}

                {/* 默认插槽 */}
                {this.props.children}

                {/* 具名插槽 */}
                {this.props.footer}
            </div>
        )
    }
}


