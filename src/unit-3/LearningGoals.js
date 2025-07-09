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
          <span className="font-bold text-cyan-700">Sensor Fundamentals:</span>{" "}
          Understand how sensors work as the "eyes and ears" of your robot,
          providing crucial feedback for autonomous decision-making.
        </li>
        <li>
          <span className="font-bold text-cyan-700">
            Distance & Touch Sensing:
          </span>{" "}
          Master distance sensors and bumper switches to detect obstacles and
          create collision-avoidance systems.
        </li>
        <li>
          <span className="font-bold text-cyan-700">
            Visual & Interactive Feedback:
          </span>{" "}
          Use Touch LED sensors and optical sensors to create responsive,
          light-based navigation systems.
        </li>
        <li>
          <span className="font-bold text-cyan-700">
            Autonomous Programming:
          </span>{" "}
          Combine multiple sensors to create sophisticated autonomous behaviors
          that respond to the environment.
        </li>
        <li>
          <span className="font-bold text-cyan-700">Problem-Solving:</span>{" "}
          Develop critical thinking skills by designing sensor-based solutions
          to real robotics challenges.
        </li>
      </ul>
      <p className="mt-6 text-base text-gray-500 italic">
        By the end of this unit, your robot will be able to "see," "feel," and
        "react" to its environment—making it truly autonomous!
      </p>
    </section>
    <h3 className="text-lg font-semibold text-cyan-700 mb-6 uppercase tracking-widest">
      Unit 3: Sensors
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
        What's Ahead in Unit 3?
      </h4>
      <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-2">
        <li>
          <span className="font-bold text-cyan-700">
            Lesson 1: Distance Sensor & Bumper Switch
          </span>{" "}
          <br />
          <span className="text-sm">
            Learn how distance sensors detect objects from 20mm to 2000mm away,
            and how bumper switches create touch-sensitive collision detection.
            Practice coding autonomous obstacle avoidance.
          </span>
        </li>
        <li>
          <span className="font-bold text-cyan-700">
            Lesson 2: Touch LED Sensor & Optical Sensor
          </span>{" "}
          <br />
          <span className="text-sm">
            Master Touch LED sensors for interactive feedback and optical
            sensors for light-based navigation. Create robots that respond to
            color changes and user input.
          </span>
        </li>
      </ol>
    </div>
  </>
);

export default LearningGoals;
