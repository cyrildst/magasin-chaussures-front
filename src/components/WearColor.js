import React, { Component } from 'react';

class WearColor extends Component {
    render() {
        return (
            <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">

                <g>
                    <title>background</title>
                    <rect fill="none" id="canvas_background" height="402" width="582" y="-1" x="-1" />
                </g>
                <g fill='black'>
                    <title>Layer 1</title>
                    <circle id="svg_1" r="16" cy="16" cx="16" />
                </g>
                <g fill={this.props.color}>
                    <title>Layer 2</title>
                    <circle id="svg_1" r="15" cy="16" cx="16" />
                </g>
            </svg>
        )
    }
}

export default WearColor;