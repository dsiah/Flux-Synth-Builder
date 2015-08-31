var React = require('react');
var AppAction = require('../actions/app-actions');
var SynthForm = require('./SynthForm');
var SynthBoard = require('./SynthBoard');


var App = React.createClass({
    render: function() {
        return (
        	<div>
        		<h2> Flux Synth Manager </h2>
        		<SynthForm />
        		<SynthBoard />
        	</div>);
    }
});

module.exports = App;