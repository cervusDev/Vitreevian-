const video = document.getElementById("cam")

Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri("../lib/models"),
    faceapi.nets.faceLandmark68Net.loadFromUri("../lib/models"),
    faceapi.nets.tinyFaceDetector.loadFromUri("../lib/models"),
    faceapi.nets.tinyFaceDetector.loadFromUri("../lib/models"),
    faceapi.nets.tinyFaceDetector.loadFromUri("../lib/models")
])

function startVideo() {
    navigator.getUserMedia(
        {video: {} },
        stream => cam.srcObjetct = stream,
        err => console.log(err)
    )
}

startVideo()





