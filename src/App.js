import React, { Component } from 'react';
import './App.css';


class ProductForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      product : {
        name: "",
        price: 1
      }
    }
  }

  newProduct = (e) => {
    e.preventDefault();
    // let p = [...this.state.products];
    // p.push(this.state.product);
    // this.setState({products: p});
    // console.log(this.state.product);
    this.props.onFormSubmit(this.state.product);
    this.setState({product: {name: "", price: "1.00"}});
  }

  changeName = (e) => {
    let p = {...this.state.product};
    p.name = e.target.value;
    this.setState({product: p});
  }

  changePrice = (e) => {
    let p = {...this.state.product};
    p.price = e.target.value;
    this.setState({product: p});
  }

  render() {
    return (
      <form onSubmit={this.newProduct} className="product">
        <p>
          Name:
          <input 
            type="text" 
            name="name" 
            id="name" 
            onChange={this.changeName} 
            value={this.state.product.name}
          />
        </p>
        <p>
          Price:
          <input 
            type="number" 
            step="0.01" 
            name="price" 
            id="price" 
            min="1" 
            onChange={this.changePrice} 
            value={this.state.product.price}
          />
        </p>
        <input type="submit" />
      </form>
    );
  }
}

class Product extends Component {
  render() {
    return (
      <div className="product">
        <h3>Name: {this.props.x.name}</h3>
        <p>Price: {this.props.x.price}</p>
        <input type="number" name="quantity" min="0" max="10" />
        <button>Add to Cart</button>
      </div>
    );
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: [
        {name: "Coffee Mug!!!", price: "$8.99"},
        {name: "Mouse Pad", price: "$15.49"},
        {name: "Monitor Stand", price: "$24.99"},
        {name: "Helmet", price: "$58.99"},
        {name: "Markers", price: "$53.49"}
      ],
      product: {
        name: "",
        price: 1
      }
    };
  }

  onNewProduct = (product) => {
    let p = [...this.state.products];
    p.push(product);
    this.setState({products: p});
  }

  render() {
    return (
      <div className="container">
        <h1 className="jumbo">React Store!</h1>
        {
          this.state.products.map( (prod, index) => 
            <Product x={prod} key={index} />
          )
        }
        <ProductForm onFormSubmit={this.onNewProduct} />
      </div>
    );
  }
}

export default App;
