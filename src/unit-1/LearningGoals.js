import React from "react";
import { Link } from "react-router-dom";

const LearningGoals = (props) => (
  <>
    {/* <h2 className="text-3xl font-extrabold text-[#1a237e] mb-6 drop-shadow tracking-widest relative">
      Unit 1 Overview
      <span className="absolute left-0 -bottom-2 w-16 h-1 bg-gradient-to-r from-cyan-400 to-cyan-700 rounded-full opacity-80"></span>
    </h2> */}
    {/* Learning Goals Section (light card) */}
    <section className="bg-white border-l-8 border-cyan-400 p-8 rounded-xl shadow-lg mb-10">
      <h2 className="text-2xl font-extrabold text-cyan-700 mb-3 tracking-tight uppercase">
        Learning Goals
      </h2>
      <ul className="list-disc list-inside text-lg text-gray-800 space-y-2 pl-4">
        <li>
          <span className="font-bold text-cyan-700">The Big Picture:</span>{" "}
          Understand what you'll build by seeing the final teaching aid robot in
          action, and get inspired by all the features you'll soon master.
        </li>
        <li>
          <span className="font-bold text-cyan-700">Fundamentals:</span>{" "}
          Identify, connect, and use essential VEX IQ parts—beams, pins, axles,
          wheels, and electronics—to create real mechanisms.
        </li>
        <li>
          <span className="font-bold text-cyan-700">Documenting Progress:</span>{" "}
          Learn how to use your Engineering Notebook to capture ideas, designs,
          and discoveries throughout your robotics journey.
        </li>
        <li>
          <span className="font-bold text-cyan-700">Course Organization:</span>{" "}
          Navigate Google Classroom for assignments, feedback, and teamwork. Use
          the course website as your launchpad for all resources.
        </li>
        <li>
          <span className="font-bold text-cyan-700">Learn to CAD:</span> Set up
          your Onshape account and start building in 3D, preparing for advanced
          robot design and digital prototyping.
        </li>
      </ul>
      <p className="mt-6 text-base text-gray-500 italic">
        By the end of this unit, you'll be ready to build, document, and share
        your own robotic creations—just like a real engineer!
      </p>
    </section>
    <h3 className="text-lg font-semibold text-cyan-700 mb-6 uppercase tracking-widest">
      Unit 1: Introduction
    </h3>
    {/* Teaching Aid Robot Section (light card) */}
    <div className="bg-white border-l-4 border-cyan-200 p-6 rounded-lg shadow mb-8">
      <h4 className="text-xl font-bold text-cyan-700 mb-2">Meet Your Robot!</h4>
      <p className="text-gray-700 mb-2">
        Get a sneak peek at the teaching aid robot—the final product you'll
        build! We'll demo all its features so you can see what you're working
        toward.
      </p>
      <img
        src="/imgs/units/robot_demo.jpg"
        alt="Teaching Aid Robot"
        className="w-full max-w-md mx-auto rounded-lg shadow mt-4 border-2 border-cyan-100"
      />
    </div>
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
        What's Ahead in Unit 1?
      </h4>
      <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-2">
        <li>
          <span className="font-bold text-cyan-700">
            Lesson 1: Intro to VEX IQ Parts
          </span>{" "}
          <br />
          <span className="text-sm">
            Start with beams and pins—connect them together! Meet axles, wheels,
            and electrical components. Learn how to use your notebook, the
            website, and Google Classroom.
          </span>
        </li>
        <li>
          <span className="font-bold text-cyan-700">
            Lesson 2: Intro to Onshape
          </span>{" "}
          <br />
          <span className="text-sm">
            Set up your Onshape account and import parts. Watch video screen
            recordings of CAD-ing (fasten mate, revolute mate, etc). Get ready
            to CAD your drivetrain using 3D Building Instructions!
          </span>
        </li>
      </ol>
    </div>
  </>
);

export default LearningGoals;
