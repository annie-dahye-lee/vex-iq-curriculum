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
  </>
);

export default Lesson4;
