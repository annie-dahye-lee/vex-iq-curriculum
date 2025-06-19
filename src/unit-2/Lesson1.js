import React from "react";

const Lesson1 = () => (
  <>
    <h2 className="text-3xl font-extrabold text-[#03045E] mb-2">
      Lesson 1: Intro to Drivetrain
    </h2>
    <p className="text-white text-lg mb-8">
      In this lesson, you'll explore the drivetrain design of the teaching aid
      robot, learn about gear ratios, and see how gears fit together. Make sure
      you've finished your CAD drivetrain model before you begin building!
    </p>
    <div className="bg-[#FFFFFF] border-l-4 border-[#03045E] p-6 rounded-lg shadow mb-8">
      <h3 className="text-xl font-bold text-[#03045E] mb-2">
        Teaching Aid Robot: Drivetrain Features
      </h3>
      <img
        src="/imgs/units/robot_drivetrain.jpg"
        alt="Drivetrain Features"
        className="w-full max-w-md mx-auto rounded-lg shadow mb-4"
      />
      <ul className="list-disc list-inside text-[#020B13] space-y-2">
        <li>Observe the gear train and wheel placement</li>
        <li>Notice how the motors are connected to the drivetrain</li>
        <li>Think about how gear ratio affects speed and torque</li>
      </ul>
    </div>
    <div className="bg-[#CAF0F8] border-l-4 border-[#00B4D8] p-6 rounded-lg shadow mb-8">
      <h3 className="text-xl font-bold text-[#00B4D8] mb-2">
        Video: Understanding Gear Ratios
      </h3>
      <iframe
        className="w-full h-64 md:h-96 rounded-lg shadow-md"
        src="https://www.youtube.com/embed/your-gear-ratio-video-id"
        title="Gear Ratio Video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <p className="text-[#818589] mt-4 text-sm">
        Learn how to fit gears together and how gear ratios impact your robot's
        performance.
      </p>
    </div>
    <div className="bg-gradient-to-br from-white via-cyan-50 to-cyan-100 border-l-4 border-cyan-500 p-6 rounded-lg shadow-xl mb-8">
      <h4 className="text-lg font-bold text-cyan-700 mb-4 uppercase tracking-wide">
        Homework
      </h4>
      <ul className="list-disc list-inside text-gray-800 space-y-2 mb-4">
        <li>Finish your CAD drivetrain model</li>
        <li>
          Update your notebook: explain gear ratio in your own words and add a
          photo of your CAD model
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

export default Lesson1;
