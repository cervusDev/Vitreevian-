
Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('../lib/models'),
    faceapi.nets.faceLandmar68Net.loadFromUri('../lib/models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('../lib/models'),
    faceapi.nets.ageGenderNet.loadFromUri('../lib/models'),
    faceapi.nets.tinyFaceDetector.loadFromUri('../lib/models'),
    faceapi.nets.ssdMobilenetv1.loadFromUri('../lib/models')
]).then(startVideo)