import React from 'react';
import Feedback from './feedback.jsx';

var FeedbackList = React.createClass({

    render: function() {
        return(
            <div>
                Feedbacks :
                {this.props.feedbacks.map((feedback) => {
                    <Feedback feedback={feedback}/>
                })}
            </div>
        );
    }
});

module.exports = FeedbackList;