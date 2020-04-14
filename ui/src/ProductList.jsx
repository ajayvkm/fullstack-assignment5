/* eslint "react/react-in-jsx-scope": "off" */
/* globals React ReactDOM PropTypes */
/* eslint "react/jsx-no-undef": "off" */
/* eslint "react/no-multi-comp": "off" */

import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';

import {graphQLFetch} from './graphQLFetch.js';
import ProductAdd from './ProductAdd.jsx';
import ProductTable from "./ProductTable.jsx";

export default class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
        this.createProduct = this.createProduct.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }

    async loadData() {
        const query = `query {
            productList {
                id
                productName
                price
                category
                imageUrl
            }
        }`;

        const response = await graphQLFetch(query);
        if(response) {
            this.setState({ products: response.productList});
        }
    }

    async createProduct(product) {
        const query = `mutation productAdd($product: ProductInputs!) {
            productAdd(product: $product) {
                id
            }
        }`;

        const data = await graphQLFetch(query, { product });
        if (data) {
            this.loadData();
        }
    }

    render() {
        return (
            <React.Fragment>
                <h1>Product Tracker</h1>
                <ProductTable products={this.state.products}/>
                <hr/>
                <ProductAdd createProduct={this.createProduct}/>
            </React.Fragment>
        )
    }
}