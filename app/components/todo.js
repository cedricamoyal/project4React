import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// class ToDo extends Component {
//
//   render() {
//     console.log("Hello Cedric");
//     return (
//           <h1>Hello Cedric</h1>
//     );
//   }
// };

////////////////



var TodoList = React.createClass({
  render: function() {
    var createItem = function(item) {
      return <li key={item.id}>{item.text}</li>;
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});
var ToDo = React.createClass({
  getInitialState: function() {
    return {items: [], text: ''};
  },
  onChange: function(e) {
    this.setState({text: e.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([{text: this.state.text, id: Date.now()}]);
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
  },
  handleDelete: function(e) {
    e.preventDefault();
    this.setState({items: [], text: ''});
  },
  render: function() {
    return (
      <div>
        <h5>Reminder</h5>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text} />
          <br />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
        <form onSubmit={this.handleDelete}>
          <button>Refresh list</button>
        </form>
      </div>
    );
  }
});

///////////////




ReactDOM.render(
  <ToDo />,
  document.getElementById("todo")
);

export default ToDo;
