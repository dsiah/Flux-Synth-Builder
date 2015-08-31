var React = require('react');
var AppActions = require('../actions/app-actions');
var AppStore = require('../stores/app-stores');

var PlaySynth = React.createClass({
	handler: function() {
		AppActions.playSynth(this.props.index);
  },

	render: function() {
		return (<button className="btn btn-primary pull-right" onClick={this.handler}>
			Play</button>);
	}
});

module.exports = PlaySynth;