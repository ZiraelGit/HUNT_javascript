import React from "react";
import Webcam from "react-webcam";

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
};

export default function WebcamCapture() {
    return (
        <Webcam
            audio={false}
            height={720}
            screenshotFormat="image/jpeg"
            width={1280}
            // ref={"Webcam"}
            videoConstraints={videoConstraints}
            onUserMediaError={() => window.alert('cant access your camera')}
        >
            {({ getScreenshot }) => (
                <button
                    onClick={() => {
                        const imageSrc = getScreenshot()
                    }}
                >
                    Capture photo
                </button>
            )}
        </Webcam>
    );
}
