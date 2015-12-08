import React from 'react';
import $ from 'jquery';

var FeedbackForm = React.createClass({
    getInitialState: function() {
        return {
            feedback: ""
        }
    },

    handleFeedbackChange: function(e) {
        this.setState({feedback: e.target.value});
    },

    addFeedback: function() {
        this.props.addFeedback(this.state.feedback);
        this.setState({feedback: ""});
    },

    render: function() {
        return(
            <div>
                <textArea placeholder="Your feedback" value={this.state.feedback}
                          onChange={this.handleFeedbackChange} name="feedback" rows="3" cols="50" id="feedback"/>
                <button type="button" className="btn btn-primary btn-sm" onClick={this.addFeedback}>Submit</button>
            </div>
        )
    }
});

module.exports = FeedbackForm;