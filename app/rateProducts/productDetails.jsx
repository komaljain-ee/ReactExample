import React from 'react';
import FeedbackForm from './feedbackForm.jsx';
import FeedbackList from './feedbackList.jsx';

var ProductDetails = React.createClass({
        getInitialState: function() {
            return {
                name: "Nike Shoes",
                imageUrl: "../app/images/Shoes1.jpg",
                price: 100,
                rating: 3,
                feedbacks: ["Excellent product"]
            }
        },

        addFeedback: function(feedback) {
            var updatedFeedbacks = this.state.feedbacks;
            updatedFeedbacks.push(feedback);
            this.setState({ feedbacks: updatedFeedbacks});
        },

        render: function() {
            return(
                <div className="product">
                    <img className="image-size" src={this.state.imageUrl}/>
                    <div className="product-details">
                        <h4>{this.state.name}</h4>
                        <h4>{this.state.price}</h4>
                    </div>

                    <FeedbackForm addFeedback={this.addFeedback}/>
                    <FeedbackList feedbacks={this.state.feedbacks} />
                </div>
            )
        }
    }
);

module.exports = ProductDetails;