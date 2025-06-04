import React from "react";
import { Link } from "react-router-dom"; // For navigation

function Unit_1() {
  return (
    <div className="p-6 sm:p-10 bg-gray-50 min-h-screen ml-44">
      {/* Back Button OUTSIDE of centered container */}
      <div className="fixed top-14 left-60">
        <Link
          to="/"
          className="inline-flex items-center px-5 py-2.5 text-red-600 border border-red-600 font-semibold rounded-md hover:bg-red-600 hover:text-white transition-colors duration-300"
        >
          ← All Units
        </Link>
      </div>

      {/* Main Centered Content */}
      <div className="max-w-4xl mx-auto">
        {/* Chapter Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Unit 1: Welcome to the Course
        </h1>

        {/* Getting Set Up Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-red-700 mb-6">
            Getting Set Up!
          </h2>

          {/* 1. Explanation of Chapter Format */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Units and Lessons
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Each unit will have either <strong>videos</strong> or
              <strong> embedded lesson documents</strong> with step-by-step
              instructions and activities to complete. At the bottom of every
              lesson, there will be a <strong>homework section</strong> for you
              to complete at home before the next class.
            </p>
          </div>

          {/* 2. How Assignments Work on Google Classroom */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Assignments
            </h3>
            <p className="text-gray-600 leading-relaxed">
              You will join a <strong>Google Classroom</strong> assigned by your
              instructor. You will be instructed to post{" "}
              <strong>code files</strong> or
              <strong> images</strong> as needed for submission and feedback.
            </p>
          </div>

          {/* 3. How to Use the Notebook */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Your Engineering Notebook
            </h3>
            <p className="text-gray-600 leading-relaxed mb-2">
              Throughout the course, you will be continuously updating your
              engineering Notebook. This is where you'll document your designs,
              write comments, add photos, ideas, and reflections.
              <a
                href="https://docs.google.com/document/d/12Lnx4BnxL7e-FC3oYooQMi6XDgGJhQPlR1HMoiuVii8/edit?tab=t.0#heading=h.qbedytr3imhx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-blue-600 font-semibold underline hover:text-blue-800"
              >
                Use the provided template.
              </a>
            </p>
          </div>
        </section>

        {/* Lesson 1 */}
        <h2 className="text-2xl font-semibold text-red-700 mb-4">
          Lesson 1: Introduction to VEX IQ Parts
        </h2>
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

        {/* Homework for Lesson 1 */}
        <section className="mb-20">
          <div className="bg-red-500/10 border-l-4 border-red-500 p-6 rounded-lg shadow-md backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-red-800 mb-4">
              Homework
            </h3>
            <p className="text-red-800 mb-4 leading-relaxed">
              Update your Notebook with your understanding of how the course is
              structured and where you can access materials. Write a list of the
              parts you learned about today and a brief description of each
              part.
            </p>
            <a
              href="https://docs.google.com/presentation/your-google-slides-link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-red-500 font-semibold underline hover:text-red-700"
            >
              Open Notebook
            </a>
          </div>
        </section>

        {/* Lesson 2 Content */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-red-800 mb-4">
            Lesson 2: Intro to Onshape
          </h2>
          <p className="text-gray-600 mb-6">
            In this lesson, you'll set up your Onshape account and learn how to
            import parts. This will be the starting point for your CAD journey
            where you'll practice using important mates like{" "}
            <strong>Fasten Mate</strong> and <strong>Revolute Mate</strong> to
            assemble models.
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

          <p>
            Sign in to Onshape with your new account. CAD your first Drivetrain
            on Onshape using the{" "}
            <a
              href="https://instructions.online/?id=4093-VEX_IQ_Basebot_2.0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-red-500 font-semibold underline hover:text-red-700"
            >
              3D Builing Instructions
            </a>
          </p>
        </section>

        {/* Homework for Lesson 2 */}
        <section className="mb-20">
          <div className="bg-red-500/10 border-l-4 border-red-500 p-6 rounded-lg shadow-md backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-red-800 mb-4">
              Homework
            </h3>
            <p className="text-red-800 leading-relaxed">
              CAD your drivetrain using the provided instructions. Make sure to
              apply the correct mates (Fasten Mate, Revolute Mate) to properly
              constrain your drivetrain assembly.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Unit_1;
