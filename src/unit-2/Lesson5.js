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
        src="https://www.youtube.com/embed/your-pid-demo-video-id"
        title="PID Tuning Demo Video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
    <div className="bg-gradient-to-br from-white via-cyan-50 to-cyan-100 border-l-4 border-cyan-500 p-6 rounded-lg shadow-xl mb-8">
      <h4 className="text-lg font-bold text-cyan-700 mb-4 uppercase tracking-wide">
        Homework
      </h4>
      <ul className="list-disc list-inside text-gray-800 space-y-2 mb-4">
        <li>Update your notebook with your PID exercise and reflections</li>
        <li>Submit your code and notebook on Google Classroom</li>
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

export default Lesson5;
