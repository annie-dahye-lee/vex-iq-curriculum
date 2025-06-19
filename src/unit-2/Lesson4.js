import React from "react";

const Lesson4 = () => (
  <>
    <h2 className="text-3xl font-extrabold text-[#03045E] mb-2">
      Lesson 4: Gyro Sensors
    </h2>
    <p className="text-white text-lg mb-8">
      In this lesson, you'll learn how to use gyro sensors to make your robot
      turn more precisely. You'll explore how to read sensor values and use them
      to control your robot's movement.
    </p>
    <div className="bg-[#CAF0F8] border-l-4 border-[#00B4D8] p-6 rounded-lg shadow mb-8">
      <h3 className="text-xl font-bold text-[#00B4D8] mb-2">
        Video: Understanding Gyro Sensors
      </h3>
      <iframe
        className="w-full h-64 md:h-96 rounded-lg shadow-md"
        src="https://www.youtube.com/embed/your-gyro-sensor-video-id"
        title="Gyro Sensor Video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
    <div className="bg-[#FFFFFF] border-l-4 border-[#818589] p-6 rounded-lg shadow mb-8">
      <h3 className="text-xl font-bold text-[#818589] mb-2">
        Gyro Sensor Exercise
      </h3>
      <iframe
        className="w-full h-64 md:h-96 rounded-lg shadow-md"
        src="https://docs.google.com/viewer?url=your-gyro-exercise-pdf-link&embedded=true"
        title="Gyro Exercise PDF"
        frameBorder="0"
      ></iframe>
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
