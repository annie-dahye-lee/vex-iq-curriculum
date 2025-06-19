import React from "react";

const Lesson3 = () => (
  <>
    <h2 className="text-3xl font-extrabold text-[#03045E] mb-2">
      Lesson 3: Coding the Drivetrain
    </h2>
    <p className="text-white text-lg mb-8">
      In this lesson, you'll set up VEXcode IQ, connect your robot, and learn to
      code basic movement and control. Watch the tutorials and complete the
      challenges below!
    </p>
    <div className="bg-[#CAF0F8] border-l-4 border-[#00B4D8] p-6 rounded-lg shadow mb-8">
      <h3 className="text-xl font-bold text-[#00B4D8] mb-2">
        Video 1: VEXcode IQ Setup
      </h3>
      <iframe
        className="w-full h-64 md:h-96 rounded-lg shadow-md"
        src="https://www.youtube.com/embed/your-vexcode-setup-video-id"
        title="VEXcode IQ Setup Video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <h3 className="text-xl font-bold text-[#00B4D8] mt-8 mb-2">
        Video 2: Code Blocks & Movement
      </h3>
      <iframe
        className="w-full h-64 md:h-96 rounded-lg shadow-md"
        src="https://www.youtube.com/embed/your-vexcode-blocks-video-id"
        title="VEXcode IQ Code Blocks Video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
    <div className="bg-[#FFFFFF] border-l-4 border-[#818589] p-6 rounded-lg shadow mb-8">
      <h4 className="text-lg font-semibold text-[#818589] mb-2">Challenges</h4>
      <iframe
        className="w-full h-40 rounded-lg shadow mb-4"
        src="https://docs.google.com/viewer?url=your-challenge1-pdf-link&embedded=true"
        title="Challenge 1 PDF"
        frameBorder="0"
      ></iframe>
      <iframe
        className="w-full h-40 rounded-lg shadow"
        src="https://docs.google.com/viewer?url=your-challenge2-pdf-link&embedded=true"
        title="Challenge 2 PDF"
        frameBorder="0"
      ></iframe>
    </div>
    <div className="bg-gradient-to-br from-white via-cyan-50 to-cyan-100 border-l-4 border-cyan-500 p-6 rounded-lg shadow-xl mb-8">
      <h4 className="text-lg font-bold text-cyan-700 mb-4 uppercase tracking-wide">
        Homework
      </h4>
      <ul className="list-disc list-inside text-gray-800 space-y-2 mb-4">
        <li>
          Record your progress in your notebook (new topics learned, screenshots
          of your block code)
        </li>
        <li>
          Complete the coding practice exercises and submit on Google Classroom
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

export default Lesson3;
