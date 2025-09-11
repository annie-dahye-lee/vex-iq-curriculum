import React from "react";
import PDFViewer from "../components/PDFViewer";

const Lesson5 = () => (
  <>
    <p className="text-white-700 text-lg mb-8">
      In this lesson, you'll learn about PID control loops, what they're used
      for, and how to implement them. You'll also see a video demo of PID tuning
      and complete an exercise to program your robot to drive in a square using
      a P controller.
    </p>
    <div className="bg-white border-l-4 border-cyan-200 p-6 rounded-lg shadow mb-8">
      <h3 className="text-xl font-bold text-cyan-700 mb-2">
        PID Control: PDF & Exercise
      </h3>
      <PDFViewer
        src="/pdfs/PID P- Control.pdf#zoom=100&pagemode=none"
        title="PID P- Control PDF"
      />
    </div>
    <div className="bg-cyan-50 border-l-4 border-cyan-400 p-6 rounded-lg shadow mb-8">
      <h3 className="text-xl font-bold text-cyan-700 mb-2">
        Video: PID Tuning Demo
      </h3>
      <iframe
        className="w-full h-64 md:h-96 rounded-lg shadow-md"
        src="https://www.youtube.com/embed/KHSmOumvxbc?si=XC-umFRMp6XX2hUt"
        title="PID Tuning Demo Video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  </>
);

export default Lesson5;
