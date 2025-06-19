import React from "react";
import { Link } from "react-router-dom";

const LearningGoals = () => (
  <>
    <h2 className="text-3xl font-extrabold text-[#03045E] mb-2">
      Unit 2 Overview
    </h2>
    <section className="bg-[#CAF0F8] border-l-8 border-[#00B4D8] p-8 rounded-xl shadow-lg mb-10">
      <h2 className="text-2xl font-extrabold text-[#03045E] mb-3 tracking-tight">
        Learning Goals
      </h2>
      <ul className="list-disc list-inside text-lg text-[#020B13] space-y-2 pl-4">
        <li>
          <span className="font-bold text-[#00B4D8]">Design & Build:</span>{" "}
          Master drivetrain design, gear ratios, and hands-on building skills.
        </li>
        <li>
          <span className="font-bold text-[#00B4D8]">CAD & Documentation:</span>{" "}
          Complete a full CAD model and document your process in your
          engineering notebook.
        </li>
        <li>
          <span className="font-bold text-[#00B4D8]">Code Like a Pro:</span>{" "}
          Program your drivetrain using VEXcode IQ, from basic movement to
          advanced control loops.
        </li>
        <li>
          <span className="font-bold text-[#00B4D8]">Sensor Integration:</span>{" "}
          Use gyro sensors for precision and learn the basics of PID control.
        </li>
        <li>
          <span className="font-bold text-[#00B4D8]">Reflect & Improve:</span>{" "}
          Analyze your design and code, and iterate for better performance.
        </li>
      </ul>
      <p className="mt-6 text-base text-[#818589] italic">
        By the end of this unit, you'll have a fully functional drivetrain, a
        detailed CAD model, and a notebook full of engineering insights!
      </p>
    </section>
    <h3 className="text-lg font-semibold text-[#00B4D8] mb-6">
      Unit 2: Drivetrain, Coding, and PID (5 Lessons)
    </h3>
    <div className="bg-[#FFFFFF] border-l-4 border-[#818589] p-6 rounded-lg shadow mb-8">
      <h4 className="text-lg font-semibold text-[#818589] mb-2">
        What's Ahead in Unit 2?
      </h4>
      <ol className="list-decimal list-inside text-[#020B13] space-y-2 mb-2">
        <li>
          <span className="font-bold text-[#03045E]">
            Lesson 1: Intro to Drivetrain
          </span>{" "}
          <br />
          <span className="text-sm">
            Explore drivetrain design, gear ratios, and see the teaching aid
            robot in action.
          </span>
        </li>
        <li>
          <span className="font-bold text-[#03045E]">
            Lesson 2: Building the Drivetrain
          </span>{" "}
          <br />
          <span className="text-sm">
            Build your drivetrain, integrate your chosen gear ratio, and
            document your choices.
          </span>
        </li>
        <li>
          <span className="font-bold text-[#03045E]">
            Lesson 3: Coding the Drivetrain
          </span>{" "}
          <br />
          <span className="text-sm">
            Program your drivetrain in VEXcode IQ, from setup to basic movement
            and control.
          </span>
        </li>
        <li>
          <span className="font-bold text-[#03045E]">
            Lesson 4: Gyro Sensors
          </span>{" "}
          <br />
          <span className="text-sm">
            Integrate and code with gyro sensors for precision and new
            challenges.
          </span>
        </li>
        <li>
          <span className="font-bold text-[#03045E]">Lesson 5: PID</span> <br />
          <span className="text-sm">
            Learn about PID control, tune your robot, and program it to drive in
            a square.
          </span>
        </li>
      </ol>
    </div>
    <div className="bg-[#00B4D8]/10 border-l-4 border-[#00B4D8] p-6 rounded-lg shadow mb-8">
      <h4 className="text-lg font-bold text-[#00B4D8] mb-2">
        Unit Homework Preview
      </h4>
      <ul className="list-disc list-inside text-[#020B13] space-y-1 mb-2">
        <li>Finish and document your CAD drivetrain model</li>
        <li>Build and photograph your drivetrain</li>
        <li>Code and test your drivetrain (with screenshots of your code)</li>
        <li>
          Complete all notebook reflections and submit exercises on Google
          Classroom
        </li>
      </ul>
      <Link
        to="/unit-2/lesson-1"
        className="inline-block mt-4 px-6 py-3 bg-[#03045E] hover:bg-[#00B4D8] text-white font-semibold rounded-md transition"
      >
        Start Lesson 1 →
      </Link>
    </div>
  </>
);

export default LearningGoals;
