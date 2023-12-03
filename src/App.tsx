/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";
import "./App.css"; // Assume you have a corresponding CSS file
import Webcam from "react-webcam";
const App: React.FC = () => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [selectedDevice, setSelectedDevice] = useState<string>(
    localStorage.getItem("defaultDevice") || ""
  );

  useEffect(() => {
    startStream(selectedDevice);

    // Cleanup on unmount
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [selectedDevice]);

  const startStream = async (device: string) => {
    // Simulated logic for starting the camera stream
    // Use the device information to configure the stream
    // Set the stream using setStream
    // You can use the 'mediaDevices' API for this
    // Example:
    // const mediaStream = await navigator.mediaDevices.getUserMedia({ video: { deviceId: { exact: device } } });
    // setStream(mediaStream);
  };

  const handleDeviceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDevice(event.target.value);
  };

  const handleShutterClick = async () => {
    // Simulated logic for taking a photo, processing it, and updating UI
    // Use React state to manage UI updates
  };

  const handleFlashClick = async () => {
    // Simulated logic for toggling torch/flashlight and updating UI
    // Use React state to manage UI updates
  };

  const handleQualityClick = () => {
    // Simulated logic for toggling image quality (HD/SD) and updating UI
    // Use React state to manage UI updates
  };

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    // Simulated logic for handling photo upload, processing photos, and updating UI
    // Use React state to manage UI updates
  };

  const handleDoneClick = async () => {
    // Simulated logic for finalizing and downloading processed pages as a PDF
    // Use React state to manage UI updates
  };

  const handlePastClick = async () => {
    // Simulated logic for reviewing and reprocessing past photos
    // Use React state to manage UI updates
  };

  return (
    <div className="App">
      <Webcam />
      {/* JSX for your React UI components */}
      <select value={selectedDevice} onChange={handleDeviceChange}>
        {/* Options for camera devices */}
      </select>
      <button onClick={handleShutterClick}>Take Photo</button>

      <input type="file" onChange={handleUpload} />
      <button onClick={handleDoneClick}>Done</button>
      <button onClick={handlePastClick}>Past</button>
    </div>
  );
};

export default App;
