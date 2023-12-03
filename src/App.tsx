/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import "./App.css"; // Assume you have a corresponding CSS file
import Webcam from "react-webcam";
const App: React.FC = () => {
  // const [stream, setStream] = useState<MediaStream | null>(null);
  const [selectedDevice, setSelectedDevice] = useState<string>(
    localStorage.getItem("defaultDevice") || ""
  );
  const videoConstraints = {
    facingMode: { exact: "environment" },
    width: window.innerWidth - 10,
  };

  const handleDeviceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDevice(event.target.value);
  };

  const handleShutterClick = async () => {
    // Simulated logic for taking a photo, processing it, and updating UI
    // Use React state to manage UI updates
  };

  // const handleFlashClick = async () => {
  //   // Simulated logic for toggling torch/flashlight and updating UI
  //   // Use React state to manage UI updates
  // };

  // const handleQualityClick = () => {
  //   // Simulated logic for toggling image quality (HD/SD) and updating UI
  //   // Use React state to manage UI updates
  // };

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    // Simulated logic for handling photo upload, processing photos, and updating UI
    // Use React state to manage UI updates
  };

  const handleDoneClick = async () => {
    // Simulated logic for finalizing and downloading processed pages as a PDF
    // Use React state to manage UI updates
  };

  const handlePastClick = async () => {
    // setStream(null);
    // Simulated logic for reviewing and reprocessing past photos
    // Use React state to manage UI updates
  };

  return (
    <div className="App">
      <Webcam videoConstraints={videoConstraints} />;
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
