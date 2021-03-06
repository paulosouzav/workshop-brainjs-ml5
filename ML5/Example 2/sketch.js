// Grab elements, create settings, etc.
const video = document.getElementById('video');

// Create a webcam capture
navigator.mediaDevices.getUserMedia({ video: true })
  .then((stream) => {
    video.srcObject = stream;
    video.play();
  })

// Initialize the Image Classifier method with MobileNet passing the video as the
// second argument and the getClassification function as the third
ml5.imageClassifier(/* TODO */)
  .then(/* TODO */)

const loop = (classifier) => {
  classifier.predict()
    .then(results => {
      // 1. Print results
      // 2. Loop again
    })
}