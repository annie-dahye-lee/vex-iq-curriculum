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
          <span className="font-bold text-cyan-700">Catapult Mechanics:</span>{" "}
          Understand the principles of energy storage and release in catapult
          systems for launching game objects.
        </li>
        <li>
          <span className="font-bold text-cyan-700">Energy Management:</span>{" "}
          Learn how to design and control systems that store potential energy
          and convert it to kinetic energy efficiently.
        </li>
        <li>
          <span className="font-bold text-cyan-700">
            Complex Assembly Design:
          </span>{" "}
          Master advanced CAD techniques for designing multi-component
          mechanical systems with moving parts.
        </li>
        <li>
          <span className="font-bold text-cyan-700">System Integration:</span>{" "}
          Develop skills in combining multiple mechanisms (ratchet motor and
          catapult arm) into a cohesive system.
        </li>
        <li>
          <span className="font-bold text-cyan-700">
            Precision Engineering:
          </span>{" "}
          Learn to build and tune complex mechanical systems for consistent,
          reliable performance under pressure.
        </li>
      </ul>
      <p className="mt-6 text-base text-gray-500 italic">
        By the end of this unit, you'll have a powerful catapult system that can
        launch objects with precision—the ultimate offensive weapon for
        competitive robotics!
      </p>
    </section>
    <h3 className="text-lg font-semibold text-cyan-700 mb-6 uppercase tracking-widest">
      Unit 6: Catapult
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
        What's Ahead in Unit 6?
      </h4>
      <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-2">
        <li>
          <span className="font-bold text-cyan-700">
            Lesson 1: Intro to Catapult
          </span>{" "}
          <br />
          <span className="text-sm">
            Explore catapult mechanics and energy principles. Review the
            Objectives and Checklist document, then start brainstorming your own
            catapult designs.
          </span>
        </li>
        <li>
          <span className="font-bold text-cyan-700">
            Lesson 2: Catapult Arm
          </span>{" "}
          <br />
          <span className="text-sm">
            Design and build the catapult arm mechanism. CAD the arm using
            building instructions, then construct it and test its motion.
          </span>
        </li>
        <li>
          <span className="font-bold text-cyan-700">
            Lesson 3: Ratchet Motor
          </span>{" "}
          <br />
          <span className="text-sm">
            Build the ratchet motor system that will wind and release the
            catapult. CAD and construct this critical power mechanism.
          </span>
        </li>
        <li>
          <span className="font-bold text-cyan-700">
            Lesson 4: Combining Parts
          </span>{" "}
          <br />
          <span className="text-sm">
            Integrate the ratchet motor and catapult arm into a unified system.
            CAD the complete integration and test the combined mechanism.
          </span>
        </li>
        <li>
          <span className="font-bold text-cyan-700">
            Lesson 5: Building It All
          </span>{" "}
          <br />
          <span className="text-sm">
            Construct the complete catapult system and integrate it with your
            robot. Test, tune, and optimize for maximum performance.
          </span>
        </li>
      </ol>
    </div>
  </>
);

export default LearningGoals;
