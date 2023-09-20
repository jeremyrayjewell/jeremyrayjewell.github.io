const audioContext = new (window.AudioContext || window.webkitAudioContext)();

document.addEventListener('DOMContentLoaded', function () {
  audioContext.resume().then(function () {
    startSpinningAndPlayAudio();
  }).catch(function (error) {
    console.error('Permission denied for audio:', error);
  });
});

const spinningImage = document.getElementById('spinningImage');
const audioStream = document.getElementById('audioStream');
const audioSource = document.getElementById('audioSource');

const audioClips = [
  '1.wav',
  '2.wav',
  '3.wav',
  '4.wav',
  '5.mp3'
];

let currentAudioClipIndex = 0;
let timeoutId; 

function startSpinningAndPlayAudio() {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  spinningImage.classList.add('paused');

  audioSource.src = audioClips[currentAudioClipIndex];
  audioStream.load(); 
  audioStream.play();

  currentAudioClipIndex = (currentAudioClipIndex + 1) % audioClips.length;

  setTimeout(function () {
    spinningImage.classList.remove('paused');
  }, 2000); 

  timeoutId = setTimeout(function () {
    audioStream.pause();
    spinningImage.classList.add('paused');
  }, 30000); 
}

spinningImage.addEventListener('click', startSpinningAndPlayAudio);

startSpinningAndPlayAudio();
