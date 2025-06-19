import React from "react";

const Lesson1 = (props) => (
  <>
    {/* Exciting intro above video */}
    <div className="mb-6">
      <h2 className="text-2xl text-white mb-2">Start Here!</h2>
      <p className="text-base text-white">
        Discover the basic parts of VEX IQ. Play the video at 0:50. Let's get
        excited to build!
      </p>
    </div>
    <div className="mb-10">
      <iframe
        className="w-full h-64 md:h-96 rounded-lg shadow-md"
        src="https://www.youtube.com/embed/nUP3CiOJOmo?start=50&autoplay=1&cc_load_policy=1"
        title="Lesson Video"
        frameBorder="0"
        // allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
    <p className="text-white leading-relaxed mb-6">
      In this lesson, you'll learn about basic VEX IQ components: beams, pins,
      wheels, and more. You'll explore how they connect to form mechanisms for
      your robot.
    </p>
    {/* Parts Section */}
    <div className="flex flex-col items-center mb-12">
      <div className="w-full max-w-4xl bg-white border-l-4 border-cyan-500 rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold text-cyan-700 mb-6">
          3 Main Categories of Parts
        </h2>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-center md:gap-8 mb-2">
            <a
              href="https://sites.google.com/mytusd.org/vex-iq-parts/electronics?authuser=0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold text-cyan-700 underline min-w-[160px] text-left mb-1 md:mb-0"
            >
              Electronics
            </a>
            <span className="text-base text-gray-700 text-left">
              This includes all of the electrical components that provide power
              and input signals to the brain of the robot.
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:gap-8 mb-2">
            <a
              href="https://sites.google.com/mytusd.org/vex-iq-parts/structure?authuser=0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold text-cyan-700 underline min-w-[160px] text-left mb-1 md:mb-0"
            >
              Structure
            </a>
            <span className="text-base text-gray-700 text-left">
              This includes all of the structural framework and connector
              pieces.
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:gap-8">
            <a
              href="https://sites.google.com/mytusd.org/vex-iq-parts/motion?authuser=0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold text-cyan-700 underline min-w-[160px] text-left mb-1 md:mb-0"
            >
              Motion
            </a>
            <span className="text-base text-gray-700 text-left">
              This includes all of the components that turn, slide, rotate, or
              grab and the hardware that allows this motion.
            </span>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gradient-to-br from-white via-cyan-50 to-cyan-100 border-l-4 border-cyan-500 p-6 rounded-lg shadow-xl mb-8">
      <h3 className="text-xl font-bold text-cyan-700 mb-3">Homework</h3>
      <p className="text-cyan-700 mb-2">
        Document the parts you learned today in your engineering notebook.
      </p>
      <a
        href="https://docs.google.com/presentation/your-google-slides-link"
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-700 underline font-semibold hover:text-cyan-900"
      >
        Open Notebook
      </a>
    </div>
  </>
);

export default Lesson1;
