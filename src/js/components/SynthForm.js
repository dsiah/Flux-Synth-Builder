var React = require('react');
var AppStore  = require('../stores/app-stores');
var AppAction = require('../actions/app-actions');

var SynthForm = React.createClass({
	// Custom Inline Styles
	divStyle: {
		borderRadius: '3px',
		borderWidth: '1px',
		borderColor: 'grey',
		borderStyle: 'solid',
		padding: '10px',
		width: '45%',
		marginBottom: '5px'
	},

	inputStyle: {
		marginRight: '5px'
	},

	titleStyle: {
		fontSize: '20px'
	},

	btnStyle: {
		marginTop: '10px'
	},

	getInitialState: function() {
		return ({ name: null, synthType: null, duration: null });
	},

	handleNameChange: function(event) {
		this.setState({ name: event.target.value });
	},

// (TODO) FIX THIS BUG
	handleTypeChange: function(event) {
		this.setState({ synthType: event.target.value });
	},

	handleDurationChange: function(event) {
		this.setState({ duration: event.target.value });
	},

	handleSubmit: function() {
		// embed form logic here
		for (key in this.state) {
			if (!this.state[key]) {
				console.log('Stopping -- form not complete');
				return;
			}
		}

		AppAction.addSynth(this.state);
	},

	handleDebug: function() {
		console.log(AppStore.showSynths());
	},

	render: function() {
		return (<div className="container" style={this.divStyle}>
			<div style={this.titleStyle}>Create Synth</div>
			<div>Type</div>
			<select onChange={this.handleTypeChange} defaultValue="sine">
				<option value="square">Square</option>
 				<option value="sine">Sine</option>
  			<option value="triangle">Triangle</option>
    		<option value="sawtooth">Sawtooth</option>
 			</select>
 			<div>Name</div><input style={this.inputStyle} 
				onChange={this.handleNameChange}></input>
 			<div>Duration (ms)</div><input type="number"
 				onChange={this.handleDurationChange}></input>
    	<div style={this.btnStyle}>
    		<button onClick={this.handleDebug} className="btn">Debug</button>
				<button onClick={this.handleSubmit} className="btn btn-primary pull-right">
				Add Synth</button>
			</div>
		</div>);
	}
});

module.exports = SynthForm;