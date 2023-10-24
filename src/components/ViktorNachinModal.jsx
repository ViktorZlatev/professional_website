import { projects } from "../constants";
import React from "react";

export default function ViktorModal(props) {
  let ModalImages = projects.map((project) => {
    console.log(project.images);
    // using only third index cuz otherwise, it is a whole string in the form of img{number}
    return project.images;
  });

  return (
    <>
      {props.IsVisible && (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center backdrop-blur-md">
          <div className="p-4 bg-white rounded-lg shadow-md w-2/3 h-19/25 relative custom-modal-style">
            <button
              onClick={props.CloseModal}
              className="absolute top-2 right-9 text-red-400 text-xl font-semibold"
            >
              X
            </button>

            <div className="flex flex-wrap mt-2 gap-2">
              {props.text != null
                ? ModalImages[parseInt(props.text[3] || 0)].map((img, index) => (
                    <div key={index} style={{ flexBasis: "31%" }}>
                      <img
                        src={img}
                        className="w-full h-48 object-cover rounded-lg shadow-md p-2" // Adjust the height as needed
                        alt={`Image ${index}`}
                      />
                    </div>
                  ))
                : "No images available"}
            </div>
          </div>
        </div>
      )}
    </>
  );
}