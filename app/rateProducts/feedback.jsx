import React from 'react';

var Feedback = React.createClass({
    render: function() {
        return(
            <div>{this.props.feedback}</div>
        )
    }
});

module.exports = Feedback;
