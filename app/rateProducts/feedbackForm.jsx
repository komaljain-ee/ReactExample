import React from 'react';
import $ from 'jquery';

var FeedbackForm = React.createClass({

    addFeedback: function() {
        this.props.addFeedback($("#feedback").value);
    },

    render: function() {
        return(
            <div>
                <textArea placeholder="Your feedback" name="feedback" rows="3" cols="50" id="feedback"/>
                <button type="button" className="btn btn-primary btn-sm" onClick={this.addFeedback}>Submit</button>
            </div>
        )
    }
});

module.exports = FeedbackForm;