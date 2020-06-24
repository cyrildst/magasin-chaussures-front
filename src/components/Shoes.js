import React, { Component, Fragment } from 'react';
import ShoeColoredIcon from './ShoeColoredIcon'
import BrandIcon from './BrandIcon'
import WearColors from './WearColors'
import {Link} from 'react-router-dom'

class Shoes extends Component {

    state = {
        shoes: []
    }

    componentDidMount() {
        fetch('http://localhost:5000/shoe/get')
            .then(res => res.json())
            .then((dataFromApi) => {
                this.setState({ shoes: dataFromApi })
            })
            .catch(console.log)
    }

    render() {
        return (
            <Fragment>
                <center><h1>Shoes List</h1></center>

                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Brand</th>
                            <th>Color</th>
                            <th>Type</th>
                            <th>Material</th>
                            <th>Wear with colors</th>
                            <th>Price</th>
                            <th>Date of Sale</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.shoes.map((shoe, index) => (
                            <tr key={index}>
                                <td><Link to={`/shoe/${shoe._id}`}>Edit</Link></td>
                                <td><BrandIcon brand={shoe.brand} /></td>
                                <td><ShoeColoredIcon color={shoe.color} /></td>
                                <td>{shoe.type}</td>
                                <td>{shoe.material}</td>
                                <td><WearColors colors={shoe.wearcolors} /></td>
                                <td style={{ textAlign: 'right' }}>{new Intl.NumberFormat("fr-FR", {
                                    style: "currency",
                                    currency: "EUR"
                                }).format(shoe.price)}</td>
                                <td style={{ textAlign: 'left' }}>{new Intl.DateTimeFormat("fr-FR", {
                                    year: "numeric",
                                    month: "long",
                                    day: "2-digit"
                                }).format(Date.parse(shoe.sale))}</td>
                            </tr>
                        ))}

                    </tbody>

                </table>

            </Fragment>
        )
    }
}

export default Shoes;