


window.AudioContext = window.AudioContext ||
                      window.webkitAudioContext;

var context = new AudioContext();

navigator.getUserMedia({audio: true}, function(stream) {
  var microphone = context.createMediaStreamSource(stream);
  var filter = context.createBiquadFilter();

  // microphone -> filter -> destination.
  microphone.connect(filter);
  filter.connect(context.destination);
}, errorCallback);

