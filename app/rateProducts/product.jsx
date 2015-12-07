import React from 'react';

var Product = React.createClass({
        getInitialState: function() {
            return {
                name: "Nike Shoes",
                imageUrl: "../app/images/Shoes1.jpg",
                price: 100,
                rating: 3
            }
        },

        render: function() {
            return(
                    <div className="product">
                        <img className="image-size" src={this.state.imageUrl}/>
                        <div className="product-details">
                            <h4>{this.state.name}</h4>
                            <h4>{this.state.price}</h4>
                            <a href="#" className="btn btn-primary btn-sm buy-button" onclick="">View Details</a>
                        </div>
                    </div>
                )
        }
    }
);

module.exports = Product;