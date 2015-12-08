import React from 'react';
import Feedback from './feedback.jsx';

var FeedbackList = React.createClass({

    render: function() {
        var getFeedback = function(feedbacks){
          return feedbacks.map((feedback) => {
               console.log(feedback);
               return ( <Feedback feedback={feedback}/> );
            })
        };
        return(
            <div>
                Feedbacks :
                {getFeedback(this.props.feedbacks)}
            </div>
        );
    }
});

module.exports = FeedbackList;