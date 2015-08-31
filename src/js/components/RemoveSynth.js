var React = require('react');
var AppActions = require('../actions/app-actions');

var RemoveSynth = React.createClass({
	handler: function() {
  	AppActions.removeSynth(this.props.index);
  },

	render: function() {
		return (<button className="btn btn-danger pull-left" onClick={this.handler}>
			Remove</button>);
	}
});

module.exports = RemoveSynth;