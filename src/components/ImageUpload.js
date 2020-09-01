import React from "react";
import { FaTrash, FaArrowCircleUp } from "react-icons/fa";

function ImageUpload({ imageSrc, setImageSrc, handleImageSelect }) {
  return (
    <div className="create-book-photo-picker">
      {imageSrc ? (
        <div className="create-book-image-preview-container">
          <div className="create-book-image-preview-icon-container">
            <FaTrash
              size={30}
              color="#fff"
              onClick={() => {
                setImageSrc("");
              }}
              className="create-book-image-preview-icon"
            />
          </div>
          <div className="create-book-image-preview-image-box">
            <img
              src={imageSrc}
              alt="pick image"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>
      ) : (
        <FaArrowCircleUp size={70} color="#fff" className="create-book-photo-icon" />
      )}
      <div className="create-book-image-input-container">
        <input
          type="file"
          name="photo"
          className="create-book-photo-input"
          placeholder="select the book photo"
          onChange={handleImageSelect}
          onClick={(event) => {
            event.target.value = null;
          }}
        />
      </div>
    </div>
  );
}

export default ImageUpload;
