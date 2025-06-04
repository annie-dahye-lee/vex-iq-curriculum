import React from "react";

function Unit_2() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Chapter Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Unit 1: Welcome to the Course
      </h1>

      {/* Lesson Title */}
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Lesson 1: Introduction to VEX IQ Parts
      </h2>

      {/* Lesson Description */}
      <p className="text-gray-600 mb-6">
        In this lesson, you'll learn about the basic VEX IQ parts including
        beams, pins, wheels, and how they fit together to form mechanisms.
      </p>

      {/* Embedded Video */}
      <div className="mb-10">
        <iframe
          className="w-full h-64 md:h-96 rounded-lg shadow-md"
          src="https://www.youtube.com/embed/your-video-id-here"
          title="Lesson Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      {/* OR embedded PDF */}
      {/* <div className="mb-10">
        <iframe
          src="https://docs.google.com/gview?url=your-pdf-link&embedded=true"
          className="w-full h-96"
        ></iframe>
      </div> */}

      {/* Homework Section */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Homework:</h3>
        <p className="text-gray-600">
          Complete the worksheet on beams and pins. Submit your assignment on
          Google Classroom before the next class.
        </p>
      </div>

      {/* Notebook Reminder */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg shadow-md">
        <h4 className="text-lg font-semibold text-blue-700 mb-2">
          📓 Reminder
        </h4>
        <p className="text-blue-700 mb-2">
          Don’t forget to update your engineering notebook with the parts you
          learned today!
        </p>
        <a
          href="https://docs.google.com/presentation/your-google-slides-link"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Open Notebook Template
        </a>
      </div>
    </div>
  );
}

export default Unit_2;
