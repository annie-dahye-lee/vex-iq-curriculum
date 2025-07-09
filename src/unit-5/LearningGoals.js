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
          <span className="font-bold text-cyan-700">Intake Mechanics:</span>{" "}
          Understand how roller-based intake systems work and their advantages
          for collecting game objects efficiently.
        </li>
        <li>
          <span className="font-bold text-cyan-700">
            Continuous Motion Design:
          </span>{" "}
          Learn to design mechanisms that provide continuous, reliable motion
          for object collection and transport.
        </li>
        <li>
          <span className="font-bold text-cyan-700">CAD Assembly Skills:</span>{" "}
          Master complex assembly techniques for integrating multiple moving
          parts into a cohesive system.
        </li>
        <li>
          <span className="font-bold text-cyan-700">System Integration:</span>{" "}
          Develop skills in integrating new mechanisms with existing robot
          systems while maintaining functionality.
        </li>
        <li>
          <span className="font-bold text-cyan-700">
            Performance Optimization:
          </span>{" "}
          Learn to test, tune, and optimize mechanical systems for maximum
          efficiency and reliability.
        </li>
      </ul>
      <p className="mt-6 text-base text-gray-500 italic">
        By the end of this unit, you'll have a high-performance intake system
        that can quickly collect and transport game objects—a game-changer for
        competitive robotics!
      </p>
    </section>
    <h3 className="text-lg font-semibold text-cyan-700 mb-6 uppercase tracking-widest">
      Unit 5: Intake Roller
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
        What's Ahead in Unit 5?
      </h4>
      <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-2">
        <li>
          <span className="font-bold text-cyan-700">
            Lesson 1: Intro to Intake Roller
          </span>{" "}
          <br />
          <span className="text-sm">
            Explore how intake roller systems work and their applications in
            competitive robotics. Review the Objectives and Checklist document,
            then start CAD-ing your intake roller using detailed building
            instructions.
          </span>
        </li>
        <li>
          <span className="font-bold text-cyan-700">
            Lesson 2: Building Intake Roller
          </span>{" "}
          <br />
          <span className="text-sm">
            Construct your intake roller mechanism using your CAD model and
            Objectives & Checklist document as reference. Test the system's
            performance and document your building process.
          </span>
        </li>
      </ol>
    </div>
  </>
);

export default LearningGoals;
