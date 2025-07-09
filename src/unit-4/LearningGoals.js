import React from "react";
import { Link } from "react-router-dom";

const LearningGoals = (props) => (
  <>
    {/* Learning Goals Section (light card) */}
    <section className="bg-white border-l-8 border-cyan-400 p-8 rounded-xl shadow-lg mb-10">
      <h2 className="text-2xl font-extrabold text-cyan-700 mb-3 tracking-tight uppercase">
        Learning Goals
      </h2>
      <ul className="list-disc list-inside text-lg text-gray-800 space-y-2 pl-4">
        <li>
          <span className="font-bold text-cyan-700">Mechanical Design:</span>{" "}
          Understand the principles of gripper mechanisms and how to design
          effective claw systems for object manipulation.
        </li>
        <li>
          <span className="font-bold text-cyan-700">CAD Integration:</span>{" "}
          Learn to design and integrate claw mechanisms into your existing
          drivetrain CAD model using advanced assembly techniques.
        </li>
        <li>
          <span className="font-bold text-cyan-700">Precision Building:</span>{" "}
          Master the construction of precise mechanical systems that require
          careful alignment and proper gear meshing.
        </li>
        <li>
          <span className="font-bold text-cyan-700">Testing & Iteration:</span>{" "}
          Develop skills in testing mechanical systems, identifying issues, and
          making iterative improvements to your design.
        </li>
        <li>
          <span className="font-bold text-cyan-700">Documentation:</span>{" "}
          Practice comprehensive documentation of mechanical design decisions,
          challenges, and solutions in your engineering notebook.
        </li>
      </ul>
      <p className="mt-6 text-base text-gray-500 italic">
        By the end of this unit, you'll have a fully functional claw mechanism
        that can grab, hold, and release objects—a crucial skill for competitive
        robotics!
      </p>
    </section>
    <h3 className="text-lg font-semibold text-cyan-700 mb-6 uppercase tracking-widest">
      Unit 4: Claw
    </h3>
    {/* Getting Set Up Section (light card) */}
    <div className="bg-white border-l-4 border-cyan-100 p-6 rounded-lg shadow mb-8">
      <h4 className="text-lg font-semibold text-cyan-700 mb-2">
        Getting Set Up
      </h4>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>
          How each chapter is formatted: lessons, hands-on activities, and
          challenges
        </li>
        <li>How assignments work on Google Classroom</li>
        <li>How to use your Engineering Notebook to document your journey</li>
      </ul>
    </div>
    {/* Lessons Preview Section (light card) */}
    <div className="bg-white border-l-4 border-cyan-100 p-6 rounded-lg shadow mb-8">
      <h4 className="text-lg font-semibold text-cyan-700 mb-2">
        What's Ahead in Unit 4?
      </h4>
      <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-2">
        <li>
          <span className="font-bold text-cyan-700">
            Lesson 1: Intro to Claw
          </span>{" "}
          <br />
          <span className="text-sm">
            Explore different claw designs and their applications. Learn about
            the Objectives and Checklist document, then start CAD-ing your claw
            design onto your drivetrain using 3D building instructions.
          </span>
        </li>
        <li>
          <span className="font-bold text-cyan-700">
            Lesson 2: Build the Claw
          </span>{" "}
          <br />
          <span className="text-sm">
            Construct your claw mechanism using your CAD model as reference.
            Test the claw's functionality and document your building process,
            including any challenges and solutions you discover.
          </span>
        </li>
      </ol>
    </div>
  </>
);

export default LearningGoals;
