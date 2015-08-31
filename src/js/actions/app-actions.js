var AppConstants  = require('../constants/app-constants');
var AppDispatcher = require('../dispatchers/app-dispatchers');

var AppActions = {
	addSynth: function(item) {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.ADD_SYNTH,
			item: item
		});
	},

	removeSynth: function(index) {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.REMOVE_SYNTH,
			index: index
		});
	},

	playSynth: function(index) {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.PLAY_SYNTH,
			index: index
		});
	}
}

module.exports = AppActions;