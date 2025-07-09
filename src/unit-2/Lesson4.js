import React from "react";
import PDFViewer from "../components/PDFViewer";

const Lesson4 = () => (
  <>
    <p className="text-white-700 text-lg mb-8">
      In this lesson, you'll learn how to use gyro sensors to make your robot
      turn more precisely. You'll explore how to read sensor values and use them
      to control your robot's movement.
    </p>
    <div className="bg-cyan-50 border-l-4 border-cyan-400 p-6 rounded-lg shadow mb-8">
      <h3 className="text-xl font-bold text-cyan-700 mb-2">
        Gyro Sensors Guide & Exercises
      </h3>
      <PDFViewer
        src="/pdfs/Lesson 4 - Gyro Sensors.pdf#zoom=100&pagemode=none"
        title="Gyro Sensors PDF"
      />
    </div>
    <div className="bg-gradient-to-br from-white via-cyan-50 to-cyan-100 border-l-4 border-cyan-500 p-6 rounded-lg shadow-xl mb-8">
      <h4 className="text-lg font-bold text-cyan-700 mb-4 uppercase tracking-wide">
        Homework
      </h4>
      <ul className="list-disc list-inside text-gray-800 space-y-2 mb-4">
        <li>Complete the gyro sensor exercise and document your results</li>
        <li>Update your notebook with your code and reflections</li>
      </ul>
      <a
        href="https://docs.google.com/presentation/your-google-slides-link"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-6 py-3 bg-cyan-700 hover:bg-cyan-500 text-white font-bold rounded-md transition uppercase tracking-wide shadow-lg border-2 border-cyan-400"
      >
        Open Notebook
      </a>
    </div>
  </>
);

export default Lesson4;
