import React from "react";
import PDFViewer from "../components/PDFViewer";

const Lesson3 = () => (
  <>
    <p className="text-white text-lg mb-8">
      In this lesson, you'll set up VEXcode IQ, connect your robot, and learn to
      code basic movement and control. Watch the tutorials and complete the
      challenges below!
    </p>
    <div className="bg-cyan-50 border-l-4 border-cyan-400 p-6 rounded-lg shadow mb-8">
      <h3 className="text-xl font-bold text-cyan-700 mb-2">
        Video 1: VEXcode IQ Setup
      </h3>
      <iframe
        className="w-full h-64 md:h-96 rounded-lg shadow-md"
        src="https://www.youtube.com/embed/tJKEjpu7Ki4?si=vYn304cckvknziBo"
        title="VEXcode IQ Setup Video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <h3 className="text-xl font-bold text-cyan-700 mt-8 mb-2">
        Video 2: Code Blocks & Movement
      </h3>
      <iframe
        className="w-full h-64 md:h-96 rounded-lg shadow-md"
        src="https://www.youtube.com/embed/pFr21fg1pBk?si=wuKbzlnS1mOLQaWj"
        title="VEXcode IQ Code Blocks Video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
    <div className="bg-white border-l-4 border-cyan-200 p-6 rounded-lg shadow mb-8">
      <h4 className="text-lg font-semibold text-cyan-700 mb-2">Challenges</h4>
      <div className="space-y-6">
        <div>
          <h5 className="text-md font-semibold text-cyan-600 mb-2">
            Drivetrain Challenges
          </h5>
          <PDFViewer
            src="/pdfs/Drivetrain Challenges.pdf#zoom=100&pagemode=none"
            title="Drivetrain Challenges PDF"
          />
        </div>
        <div>
          <h5 className="text-md font-semibold text-cyan-600 mb-2">
            Advanced Shapes Coding Practice
          </h5>
          <PDFViewer
            src="/pdfs/Advanced Shapes Coding Practice.pdf#zoom=100&pagemode=none"
            title="Advanced Shapes Coding Practice PDF"
          />
        </div>
      </div>
    </div>
  </>
);

export default Lesson3;
