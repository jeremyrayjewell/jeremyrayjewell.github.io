// Get references to the image and audio elements
const spinningImage = document.getElementById('spinningImage');
const audioStream = document.getElementById('audioStream');
const audioSource = document.getElementById('audioSource');

// Create an array of audio clip URLs
const audioClips = [
  '1.wav',
  '2.wav',
  '3.wav',
  '4.wav',
  '5.mp3'
];

let currentAudioClipIndex = 0;
let timeoutId; // Store the timeout ID

// Function to start spinning and play audio
function startSpinningAndPlayAudio() {
  // Clear any previous timeouts
  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  // Pause the spinning animation
  spinningImage.classList.add('paused');

  // Play the current audio clip
  audioSource.src = audioClips[currentAudioClipIndex];
  audioStream.load(); // Reload the audio element to update the source
  audioStream.play();

  // Increment the audio clip index for the next click
  currentAudioClipIndex = (currentAudioClipIndex + 1) % audioClips.length;

  // Resume the spinning animation after a delay
  setTimeout(function () {
    spinningImage.classList.remove('paused');
  }, 2000); // Adjust the delay as needed

  // Stop the audio and spinning after 30 seconds
  timeoutId = setTimeout(function () {
    audioStream.pause();
    spinningImage.classList.add('paused');
  }, 30000); // 30 seconds in milliseconds
}

// Add a click event listener to the image
spinningImage.addEventListener('click', startSpinningAndPlayAudio);

// Initial call to start spinning and play audio
startSpinningAndPlayAudio();
