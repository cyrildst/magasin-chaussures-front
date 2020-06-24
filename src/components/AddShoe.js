import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class AddShoe extends Component {


    state = {
        formValid: false,
        brands: [],
        brand: '',
        colors: [],
        color: '',
        types: [],
        type: '',
        materials: [],
        material: '',
        wearColor: [],
        price: 0,
        sale: '',
        messageApi: '',
    }

    componentDidMount() {

        fetch('http://localhost:5000/shoe/brands')
            .then(res => res.json())
            .then((dataFromApi) => {
                this.setState({ brands: dataFromApi })
            })
            .catch(console.log);

        fetch('http://localhost:5000/shoe/colors')
            .then(res => res.json())
            .then((dataFromApi) => {
                var tranformationValueLabel = dataFromApi.map((item,index) => ({'key':index, 'value':item, 'label':item}));
                this.setState({ colors: tranformationValueLabel })
            })
            .catch(console.log);

        fetch('http://localhost:5000/shoe/types')
            .then(res => res.json())
            .then((dataFromApi) => {
                this.setState({ types: dataFromApi })
            })
            .catch(console.log);

        fetch('http://localhost:5000/shoe/materials')
            .then(res => res.json())
            .then((dataFromApi) => {
                this.setState({ materials: dataFromApi })
            })
            .catch(console.log);

        const id = this.props.match.params.id;
        if (id !== undefined) {
            fetch('http://localhost:5000/shoe/get/' + id)
                .then(res => res.json())
                .then((dataFromApi) => {
                    console.log(dataFromApi)
                    const sale = new Date(dataFromApi.sale).toISOString().substr(0,10);
                    this.setState({
                        brand: dataFromApi.brand,
                        color: dataFromApi.color,
                        type: dataFromApi.type,
                        material: dataFromApi.material,
                        wearColor: dataFromApi.wearcolors,
                        price: dataFromApi.price,
                        sale: sale,
                    }, this.validateForm)
                })
                .catch(console.log)
        }
    }

    handleBrandChange = event => {
        this.setState({
            brand: event.target.value
        }, this.validateForm);
    }

    handleColorChange = event => {
        this.setState({
            color: event.target.value
        }, this.validateForm);
    }

    handleTypeChange = event => {
        this.setState({
            type: event.target.value
        }, this.validateForm);
    }

    handleMaterialChange = event => {
        this.setState({
            material: event.target.value
        }, this.validateForm);
    }

    handleWearColorChange = event => {

        var avaiableColors = event.target.options;
        var selectedColors = [];
        for (var i = 0, l = avaiableColors.length; i < l; i++) {
            if (avaiableColors[i].selected) {
                selectedColors.push(avaiableColors[i].value);
            }
        }

        this.setState({
            wearColor: selectedColors
        }, this.validateForm);
    }

    handleInputChange = event => {

        const field = event.target.name;
        const value = event.target.value;

        this.setState({
            [field]: value
        }, this.validateForm);
    }

    handleCancel = () => {
        this.setState({
            brand: '',
            color: '',
            type: '',
            material: '',
            price: 0,
            sale: '',
            messageApi: '',
        }, this.validateForm);
    }

    handleSubmit = (event) => {

        let shoe = {};

        shoe.brand = this.state.brand;
        shoe.color = this.state.color;
        shoe.type = this.state.type;
        shoe.material = this.state.material;
        shoe.wearcolors = this.state.wearColor;
        shoe.price = this.state.price;
        shoe.sale = this.state.sale;

        /* if we have an ID, we have to edit, otherwise it's a creation */
        /* the body is the same in all cases */
        let params = {};
        const id = this.props.match.params.id;
        if(id === undefined){
            params.url = 'http://localhost:5000/shoe/post';
            params.method = 'POST';
        }else{
            params.url = 'http://localhost:5000/shoe/edit?shoeID=' + id;
            params.method = 'PUT';
        }


        fetch(params.url, {
            method: params.method,
            headers: { 'Content-Type': 'application/json' },
            // We convert the React state to JSON and send it as the POST body
            body: JSON.stringify(shoe)
        }).then(response => response.json())
            .then((dataFromApi) => {
                this.setState({
                    messageApi: dataFromApi.message,
                    formValid: false,
                })
            })

        event.preventDefault();
    }

    handleDelete = (event) => {

        const id = this.props.match.params.id;
        
        fetch('http://localhost:5000/shoe/delete?shoeID=' + id, {
            method: 'DELETE',
        }).then(response => response.json())
            .then((dataFromApi) => {
                this.setState({
                    messageApi: dataFromApi.message,
                    formValid: false,
                })
            })

        event.preventDefault();
    }

    validateForm() {

        this.setState({
            formValid:
                this.state.brand !== '' &&
                this.state.color !== '' &&
                this.state.type !== '' &&
                this.state.material !== '' &&
                this.state.wearColor.length > 0 &&
                this.state.price !== '' &&
                this.state.sale !== ''
        });
    }

    render() {

        return (
            <div className="container">
                <h1>Shoes Form</h1>
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group row">
                        <label htmlFor="brand" className="col-sm-2 col-form-label">Brand</label>
                        <div className="col-sm-10">
                            <select className="form-control" value={this.state.brand} onChange={this.handleBrandChange} id="brand">
                                <option value=''>Select a brand</option>
                                {this.state.brands.map((brand, index) => (
                                    <option key={index} value={brand}>{brand}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="color" className="col-sm-2 col-form-label">Color </label>
                        <div className="col-sm-10">
                            <select value={this.state.color} onChange={this.handleColorChange} className="form-control" id="color">
                                <option value=''>Select a color</option>
                                {this.state.colors.map((color) => (
                                    <option key={color.key} value={color.value}>{color.label}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="type" className="col-sm-2 col-form-label">type</label>
                        <div className="col-sm-10">
                            <select value={this.state.type} onChange={this.handleTypeChange} className="form-control" id="type">
                                <option value=''>Select a type</option>
                                {this.state.types.map((type, index) => (
                                    <option key={index} value={type}>{type}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="material" className="col-sm-2 col-form-label">material</label>
                        <div className="col-sm-10">
                            <select value={this.state.material} onChange={this.handleMaterialChange} className="form-control" id="material">
                                <option value=''>Select a material</option>
                                {this.state.materials.map((material, index) => (
                                    <option key={index} value={material}>{material}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="wear" className="col-sm-2 col-form-label">Color to wear with</label>
                        <div className="col-sm-10">
                            <select multiple={true} size={this.state.colors.length} value={this.state.wearColor} onChange={this.handleWearColorChange} className="form-control" id="wear">
                                {this.state.colors.map((color) => (
                                    <option key={color.key} value={color.value}>{color.label}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="price" className="col-sm-2 col-form-label">Price</label>
                        <div className="col-sm-10">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">€</span>
                                </div>
                                <input
                                    name="price" type="number"
                                    value={this.state.price}
                                    onChange={this.handleInputChange}
                                    min="0.00" step="0.01" max="1000" className="form-control" id="price" />
                            </div>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="sale" className="col-sm-2 col-form-label">Date of Sale</label>
                        <div className="col-sm-10">
                            <input type="date" name="sale"
                                value={this.state.sale}
                                onChange={this.handleInputChange} className="form-control" id="sale" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <button type="submit" value="Submit" disabled={!this.state.formValid} className="btn btn-primary">Save</button>
                        <button type="reset" value="Reset" onClick={this.handleCancel} className="btn btn-secondary" hidden={this.props.match.params.id !== undefined}>Reset</button>
                        <button onClick={this.handleDelete} className="btn btn-danger" hidden={this.props.match.params.id === undefined}>Delete</button>
                    </div>

                    <div className="form-group row">
                        <p>{this.state.messageApi}</p>
                    </div>
                    

                </form>
            </div>
        )
    }
}

export default withRouter(AddShoe);