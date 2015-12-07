import React from 'react';
import ReactDOM from 'react-dom';
import Product from './product.jsx';

var ProductGrid = React.createClass({
    render: function() {
        return(
            <div className="row product-row">
                <Product/>
            </div>
        )
    }
});

ReactDOM.render(<ProductGrid/>, document.getElementById('app'));