var React = require('react');
var ReactDOM = require('react-dom');

var FilterList = React.createClass({
    getInitialState: function() {
        return {
            initialItems: [
                "Apples",
                "Pineapple",
                "oranges",
                "Strawberry",
                "Cranberry",
                "Grapes",
                "Watermelon",
                "MuskMelon"
            ],
            items: []
        }
    },

    componentWillMount: function(){
        this.setState({items: this.state.initialItems})
    },

    filterList: function(event) {
        var updatedList = this.state.initialItems;
        updatedList = updatedList.filter(function(item){
            return item.toLowerCase().search(
                    event.target.value.toLowerCase()) !== -1;
        });
        this.setState({items: updatedList});
    },

    render: function() {
        return(
            <div className="filter-list">
                <input type="text" placeholder="Search" onChange={this.filterList}/>
                <List items={this.state.items}/>
            </div>
        )
    }
});


var List = React.createClass({
    render: function(){
        return (
            <ul>
                {
                    this.props.items.map(function(item) {
                        return <li key={item}>{item}</li>
                    })
                }
            </ul>
        )
    }
});

ReactDOM.render(<FilterList/>, document.getElementById('app'));