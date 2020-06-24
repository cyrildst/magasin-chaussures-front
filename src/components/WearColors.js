import React, { Component } from 'react';
import WearColor from './WearColor'

class WearColors extends Component {
    render() {
        return (
            <>
                {this.props.colors.map((color, index) => (
                    <WearColor key={index} color={color} />
                ))}
            </>
        )
    }
}

export default WearColors;