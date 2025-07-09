import React, { useState } from "react";

const PDFViewer = ({ src, title, className = "", allowFullScreen = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const closeExpanded = () => {
    setIsExpanded(false);
  };

  return (
    <>
      <div className={`relative ${className}`}>
        <iframe
          className="w-full h-64 md:h-96 rounded-lg shadow-md"
          src={src}
          title={title}
          frameBorder="0"
          allowFullScreen={allowFullScreen}
        ></iframe>
        <button
          onClick={toggleExpanded}
          className="absolute top-2 right-2 bg-cyan-700 hover:bg-cyan-500 text-white px-3 py-1 rounded-md text-sm font-semibold transition-colors shadow-lg z-10"
          title="Expand PDF"
        >
          <span role="img" aria-label="expand">
            ⛶
          </span>{" "}
          Expand
        </button>
      </div>

      {/* Fullscreen Modal */}
      {isExpanded && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-full h-full max-w-[98vw] max-h-[98vh] mx-auto bg-white rounded-lg shadow-2xl flex flex-col">
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
              <button
                onClick={closeExpanded}
                className="bg-cyan-700 hover:bg-cyan-500 text-white px-4 py-2 rounded-md font-semibold transition-colors"
                title="Collapse"
              >
                ⬒ Collapse
              </button>
            </div>
            <div className="flex-1 overflow-auto">
              <div className="min-w-[900px] w-fit h-full overflow-x-auto flex items-center justify-center">
                <iframe
                  className="w-full h-[80vh] min-w-[900px] rounded-b-lg"
                  src={src}
                  title={title}
                  frameBorder="0"
                  allowFullScreen={allowFullScreen}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PDFViewer;
