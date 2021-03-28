const cam = document.getElementById("cam")

const startVideo = () => {
    navigator.mediaDevices.enumerateDevices()
    .then(devices => {
        if (Array.isArray(devices)) {
            //tem dispositivos ...
            devices.forEach(device => {
                if (device.kind === "videoinput") {
                    console.log(device)
                    if (device.label.includes("")) { //Etiqueta da câmera nativa está vazia em  sua string
                        // tem a câmera certa...
                        navigator.getUserMedia(
                            {video: {
                                deviceId: device.deviceId
                            }},
                            stream => cam.srcObject = stream,
                            error => console.error(error)
                        )
                    }
                }
            })
        }
    })
}





