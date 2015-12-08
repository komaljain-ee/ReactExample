import React from 'react';
import ReactDOM from 'react-dom';
import ProductDetails from './productDetails.jsx';

var ProductGrid = React.createClass({
    render: function() {
        return(
            <div className="row product-row">
                <ProductDetails/>
            </div>
        )
    }
});

ReactDOM.render(<ProductGrid/>, document.getElementById('app'));