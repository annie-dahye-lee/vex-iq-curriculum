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
          <span className="font-bold text-cyan-700">CAD, Build, and Test your Robot:</span>{" "}
          Understand the different components of your robot and how they work together.
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
          Develop skills in combining multiple mechanisms (ratchet motor,
          catapult arm, drivetrain) into a cohesive system.
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
        By the end of this unit, you'll have a finished Vex IQ Competition robot
      </p>
    </section>
    <h3 className="text-lg font-semibold text-cyan-700 mb-6 uppercase tracking-widest">
      Unit 7: Final Robot
    </h3>
    {/* Lessons Preview Section (light card) */}
    <div className="bg-white border-l-4 border-cyan-100 p-6 rounded-lg shadow mb-8">
      <h4 className="text-lg font-semibold text-cyan-700 mb-2">
        What's Ahead in Unit 7?
      </h4>
      <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-2">
        <li>
          <span className="font-bold text-cyan-700">
            Lesson 1: CAD, Build, and Test Your Robot
          </span>{" "}
          <br />
          <span className="text-sm">
            In this lesson, you'll create a detailed 3D model of a competition robot designed for the Rapid Relay challenge. Drawing on your knowledge of mechanical systems and 3D modeling techniques, you'll envision a robot capable of competing in the Rapid Relay competition. This is your opportunity to apply creativity and engineering principles to design a robot with both functionality and strategy in mind!
          </span>
        </li>
        <li>
          <span className="font-bold text-cyan-700">
            Lesson 2: Programming
          </span>{" "}
          <br />
          <span className="text-sm">
            In this lesson, students will learn about P controllers and apply them to control their VEX IQ robot's movements accurately. 
          </span>
        </li>
      </ol>
    </div>
  </>
);

export default LearningGoals;
