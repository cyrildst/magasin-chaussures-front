import React, { Component, Fragment } from 'react';

class BrandIcon extends Component {

    render() {
        return (
            <Fragment>
                <img src={`${this.props.brand}.png`} width="50px" heigth="50px" alt={this.props.brand} />
            </Fragment>
        )
    }
}

export default BrandIcon;