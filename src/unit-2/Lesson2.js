import React from "react";

const Lesson2 = () => (
  <>
    <h2 className="text-3xl font-extrabold text-[#03045E] mb-2">
      Lesson 2: Building the Drivetrain
    </h2>
    <p className="text-white text-lg mb-8">
      In this lesson, you'll build your drivetrain using your CAD model as a
      reference. Integrate your chosen gear ratio and use the checklist below to
      ensure your build is complete.
    </p>
    <div className="bg-[#CAF0F8] border-l-4 border-[#00B4D8] p-6 rounded-lg shadow mb-8">
      <h3 className="text-xl font-bold text-[#00B4D8] mb-2">
        Objectives & Checklist
      </h3>
      <iframe
        className="w-full h-64 md:h-96 rounded-lg shadow-md"
        src="/pdfs/drivetrain%20objectives%20%26%20checklist.pdf#zoom=100&pagemode=none"
        title="Objectives & Checklist PDF"
        frameBorder="0"
      ></iframe>
    </div>
    <div className="bg-gradient-to-br from-white via-cyan-50 to-cyan-100 border-l-4 border-cyan-500 p-6 rounded-lg shadow-xl mb-8">
      <h4 className="text-lg font-bold text-cyan-700 mb-4 uppercase tracking-wide">
        Homework
      </h4>
      <ul className="list-disc list-inside text-gray-800 space-y-2 mb-4">
        <li>Finish your CAD model if not already done</li>
        <li>
          Update your notebook: add a photo of your built drivetrain and explain
          the placement of parts and your gear choices
        </li>
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

export default Lesson2;
