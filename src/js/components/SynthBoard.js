var React = require('react');
var AppActions = require('../actions/app-actions');
var AppStore   = require('../stores/app-stores');

var RemoveSynth = require('./RemoveSynth');
var PlaySynth   = require('./PlaySynth');

function loadSynthBoard() {
	return { synths: AppStore.showSynths() }
}

var SynthBoard = React.createClass({
	getInitialState: function() {
		return loadSynthBoard();
	},

	componentWillMount: function() {
		AppStore.addChangeListener(this._onChange);
	},

	_onChange: function() {
    this.setState(loadSynthBoard());
  },

	render: function() {
		var board = this;
		var total = 0;
		
		var synths = this.state.synths.map(function(synth, ind) {
			return(<div className="container built-synth" style={this.divStyle} key={ind}>
				<h4><b>{synth.name}</b> - {synth.synthType} Synth</h4>
				<div><i>{synth.duration} ms</i></div>
				<RemoveSynth index={ind} />
				<PlaySynth className="pull-right" index={ind} />
			</div>);
		});

		return (<div>{synths}</div>);
	}
});

module.exports = SynthBoard;