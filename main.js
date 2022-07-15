var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();
var synth = window.speechSynthesis

function start() {
    recognition.start();
}


camera = document.getElementById("camera");
Webcam.set({
    width: 500,
    height: 400,
    image_format: 'jpeg',
    jpeg_quality: 90
});


setTimeout(function () {
    imgId = "selfie1"
    takeSnapshot()
    speak_data = "taking your next selfie in 5 seconds"
    var utterThis = new SpeechSynthesisUtterance(speak_data)
    synth.speak(utterThis)

}, 5000)
setTimeout(function () {
    imgId = "selfie2"
    takeSnapshot()
    speak_data = "taking your next selfie in 10 seconds"
    var utterThis = new SpeechSynthesisUtterance(speak_data)
    synth.speak(utterThis)

}, 10000)
setTimeout(function () {
    imgId = "selfie3"
    takeSnapshot()
    speak_data = "taking your next selfie in 15 seconds"
    var utterThis = new SpeechSynthesisUtterance(speak_data)
    synth.speak(utterThis)

}, 15000)

function takeSnapshot() {

    console.log(imgId)

    Webcam.snap(function (data_uri) {
        if (imgId == "selfie1") {
            document.getElementById("result1").innerHTML = "<img id= 'selfie1' src = '" + data_uri + "'></img>"
        }

        if (imgId == "selfie2") {
            document.getElementById("result2").innerHTML = "<img id= 'selfie2' src = '" + data_uri + "'></img>"
        }

        if (imgId == "selfie3") {
            document.getElementById("result3").innerHTML = "<img id= 'selfie3' src = '" + data_uri + "'></img>"
        }

    });
}