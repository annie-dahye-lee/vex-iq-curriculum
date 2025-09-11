import React from "react";
import PDFViewer from "../components/PDFViewer";

const Lesson1 = () => (
  <>
    {/* Exciting intro above video */}
    <div className="mb-6">
      <h2 className="text-2xl text-white mb-2">
        CAD Your Final Robot! 
      </h2>
      <p className="text-base text-white">
        Use previous CAD-ed projects and what you have built previously to help plan out your final design.
      </p>
    </div>

    <p className="text-white leading-relaxed mb-6">
      In this lesson, you'll create a detailed 3D model of a competition robot designed
      for the Rapid Relay challenge. Drawing on your knowledge of mechanical
      systems and 3D modeling techniques, you'll envision a robot capable of
      competing in the Rapid Relay competition. This is your opportunity to apply
      creativity and engineering principles to design a robot with both functionality
      and strategy in mind!
    </p>

    <p className="text-white leading-relaxed mb-6">
      Begin by reviewing the rules and objectives of the Rapid Relay challenge.
      Consider what kind of tasks your robot will need to perform, such as
      maneuvering through obstacles, interacting with game elements, or
      transporting objects.
    </p>

    {/* PDF Section */}
    <div className="flex flex-col items-center mb-12">
      <div className="w-full max-w-4xl bg-white border-l-4 border-cyan-500 rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold text-cyan-700 mb-6 flex items-center gap-2">
          <span role="img" aria-label="eye">
            
          </span>
          Final Robot CAD
        </h2>
        <div className="mb-4">
          <PDFViewer
            src="/pdfs/Lesson 20 Competition Robot Instructions.pdf#zoom=100&pagemode=none"
            title="3D Modeling Competition Robot"
          />
          <p className="text-cyan-700 text-sm mt-2">
            Use this PDF as a guide 
          </p>
        </div>
        
      </div>
    </div>

    {/* Bumper Switch Section */}
    <div className="flex flex-col items-center mb-12">
      <div className="w-full max-w-4xl bg-white border-l-4 border-red-500 rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold text-red-700 mb-6 flex items-center gap-2">
          <span role="img" aria-label="hand">
            
          </span>
          Building Advice
        </h2>
        <div className="mb-4">
          <PDFViewer
            src="/pdfs/Lesson 21-22 Building Competition Robot.pdf#zoom=100&pagemode=none"
            title="Building Competition Robot PDF"
          />
          <p className="text-red-700 text-sm mt-2">
            Follow these tips to ensure the construction of your bot is smooth and sound.
          </p>
        </div>
      </div>
    </div>

    {/* Exercises Section */}
    {/*<div className="bg-gradient-to-br from-green-50 to-emerald-100 border-l-4 border-green-500 p-6 rounded-lg shadow-lg mb-8">
      <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
        <span role="img" aria-label="exercise">
          💪
        </span>
        Coding Exercises
      </h3>
      <div className="space-y-6">
        <div className="bg-white p-4 rounded-lg border border-green-200">
          <h4 className="font-semibold text-green-800 mb-2">
            Exercise 1: Distance-Based Stopping
          </h4>
          <p className="text-sm text-gray-800 mb-2">
            <strong>Challenge:</strong> Make your robot drive forward
            continuously, but stop when it detects an object within 100mm.
          </p>
          <p className="text-sm text-gray-600 italic">
            <strong>Hint:</strong> Use a "Forever" loop with a "Wait Until"
            block checking the distance sensor.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg border border-green-200">
          <h4 className="font-semibold text-green-800 mb-2">
            Exercise 2: Bumper Collision Detection
          </h4>
          <p className="text-sm text-gray-800 mb-2">
            <strong>Challenge:</strong> Make your robot drive forward until the
            bumper switch is pressed, then stop and reverse for 2 seconds.
          </p>
          <p className="text-sm text-gray-600 italic">
            <strong>Hint:</strong> Use a "Wait Until" block with the bumper
            switch, then add reverse movement.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg border border-green-200">
          <h4 className="font-semibold text-green-800 mb-2">
            Exercise 3: Smart Navigation
          </h4>
          <p className="text-sm text-gray-800 mb-2">
            <strong>Challenge:</strong> Create a robot that drives forward, but
            when it detects an object within 150mm, it turns right for 1 second
            before continuing.
          </p>
          <p className="text-sm text-gray-600 italic">
            <strong>Hint:</strong> Use an "If" statement inside a "Forever" loop
            to check distance and trigger turning.
          </p>
        </div>
      </div>
    </div>


    {/* Instructor Check-in */}
    <div className="bg-gradient-to-br from-yellow-50 to-orange-100 border-l-4 border-yellow-500 p-6 rounded-lg shadow-lg mb-8">
      <h4 className="text-lg font-bold text-yellow-800 mb-4 flex items-center gap-2">
        <span role="img" aria-label="teacher">
          👨‍🏫
        </span>
        Instructor Check-in: Building and Testing
      </h4>
      <div className="bg-white p-4 rounded-lg border border-yellow-200">
        <p className="text-sm text-gray-800 mb-2">
          <strong>What to demonstrate:</strong> Explain to students what is good building practice and help to refine their CAD model.
        </p>
        <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
          <li>Verify each student's CAD model is correct</li>
          <li>Ensure that their build matches their CAD model</li>
          <li>Ensure students understand the design and how it works</li>
        </ul>
      </div>
    </div>

    {/* Homework Section */}
    <div className="bg-gradient-to-br from-white via-cyan-50 to-cyan-100 border-l-4 border-cyan-500 p-6 rounded-lg shadow-xl mb-8">
      <h3 className="text-xl font-bold text-cyan-700 mb-3">Homework</h3>
      <div className="space-y-3 text-gray-800">
        <p>
          <strong>1. Update your Engineering Notebook:</strong>
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>
            Document what you did
          </li>
          <li>Include screenshots of your working CAD model</li>
          <li>Explain how each component of the robot works in your own words</li>
          <li>Note any challenges you faced and how you solved them</li>
        </ul>
      </div>
    </div>
  </>
);

export default Lesson1;
