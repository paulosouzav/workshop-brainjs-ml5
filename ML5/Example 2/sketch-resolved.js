// Grab elements, create settings, etc.
const video = document.getElementById("video");

// Create a webcam capture
navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
  video.srcObject = stream;
  video.play();
});

const loop = classifier => {
  classifier.predict().then(results => {
    result.innerText = results[0].className;
    probability.innerText = results[0].probability.toFixed(4);
    loop(classifier); // Call again to create a loop
  });
};

// Initialize the Image Classifier method with MobileNet passing the video as the
// second argument and the getClassification function as the promise return
ml5.imageClassifier("MobileNet", video).then(loop);
