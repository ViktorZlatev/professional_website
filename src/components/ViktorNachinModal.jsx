import { projects } from "../constants";
import { useEffect } from "react";

export default function ViktorModal(props) {
  let ModalImages = projects.map((project) => {
    return project.images;
  });

  return (
    <>
      {props.IsVisible && (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center backdrop-blur-md">
          <div className="p-8 bg-white rounded-lg shadow-xl">
            <button onClick={props.CloseModal}>
              <p className="text-red-400 text-2xl font-semibold">X</p>
            </button>
            <p className="text-red-800 text-2xl font-bold mt-4">
              {props.text} hi2d
            </p>
            <div className="flex flex-row mt-4">
              {props.text != null
                ? ModalImages[parseInt(props.text) || 0].map((img, index) => (
                    <div key={index} className="mx-4">
                      <img
                        src={img}
                        className="w-48 h-64 rounded-lg shadow-md"
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
