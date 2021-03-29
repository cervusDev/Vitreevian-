const cam = document.getElementById("cam")

Promise.all([
    faceapi.nets.tnyFaceDetector.loadFromUri("")
])

function startVideo() {
    navigator.getUserMedia (
        {video: {}},
        stream => cam.srcObject = stream,
        err => console.log(err)
    )
}

startVideo()



