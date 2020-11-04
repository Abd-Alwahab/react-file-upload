import React, { useState } from "react";
import ImageUpload from "./components/ImageUpload";

function App() {
  const [imageSrc, setImageSrc] = useState();

  const handleImageSelect = (e) => {
    setImageSrc(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="App">
      <ImageUpload
        handleImageSelect={handleImageSelect}
        imageSrc={imageSrc}
        setImageSrc={setImageSrc}
        style={{
          width: 700,
          height: 500,
          background: "red",
        }}
      />
    </div>
  );
}

export default App;
