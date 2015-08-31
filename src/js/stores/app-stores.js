var AppDispatcher = require('../dispatchers/app-dispatchers');
var AppConstants  = require('../constants/app-constants');
var assign = require('react/lib/Object.assign');

var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change'; // key that is broadcast on the change-event
var _synthboard = []; // collection of local synths
var _audioContext = new AudioContext(); // reference to AudioContext singleton

function _removeSynth(index){
  _synthboard.splice(index, 1);
}

function _addSynth(synth) {
  _synthboard.push(synth);
}

// debug helper 
function _showSynths() {
  console.log(_synthboard);
}

function _playSynth(index) {
  var synth = _synthboard[index];
  var ac    = _audioContext;
  var osc   = ac.createOscillator();

  osc.connect(ac.destination);
  osc.type = synth.synthType;
  osc.frequency.value = 300; //hz -- make this alterable soon
  osc.start();
  osc.stop(ac.currentTime + (synth.duration / 1000));
}

var AppStore = assign(EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback)
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  showSynths: function() {
    return _synthboard;
  },

  getAudioContext: function() {
    return _audioContext;
  },

  dispatcherIndex: AppDispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.actionType) {
      case AppConstants.ADD_SYNTH:
        _addSynth(payload.action.item);
        break;

      case AppConstants.REMOVE_SYNTH:
        //console.log("attempting to remove synth @ index:", payload.action.index);
        _removeSynth(payload.action.index);
        break;

      case AppConstants.PLAY_SYNTH:
        //console.log("attempting to play synth @ index:", payload.action.index);
        _playSynth(payload.action.index);
    }

    AppStore.emitChange();

    return true;
  })
});

module.exports = AppStore;