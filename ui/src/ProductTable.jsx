import React from 'react';

class ProductRow extends React.Component {
    render() {
        const product = this.props.product;

        return (
            <tr>
                <td>{product.id}</td>
                <td>{product.productName}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td><a href={product.imageUrl} target="_blank">View</a></td>
            </tr>
        );
    }
}

export default class ProductTable extends React.Component {
    render() {
        const productRows = this.props.products.map(product =>
            <ProductRow product={product}/>
        );

        return (
            <div>
                <h4>Showing all available products</h4>
                <hr/>
                <table>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Image</th>
                    </tr>
                    </thead>
                    <tbody>
                    {productRows}
                    </tbody>
                </table>
            </div>
        );
    }
}