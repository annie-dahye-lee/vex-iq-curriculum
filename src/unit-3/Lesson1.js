import React from "react";
import PDFViewer from "../components/PDFViewer";

const Lesson1 = () => (
  <>
    {/* Exciting intro above video */}
    <div className="mb-6">
      <h2 className="text-2xl text-white mb-2">
        Give Your Robot "Eyes" and "Touch"!
      </h2>
      <p className="text-base text-white">
        Learn how distance sensors and bumper switches work. Your robot will
        soon be able to detect obstacles and avoid collisions automatically!
      </p>
    </div>

    <p className="text-white leading-relaxed mb-6">
      In this lesson, you'll learn about two essential sensors: the distance
      sensor that "sees" objects from far away, and the bumper switch that
      "feels" when it touches something. These sensors are the foundation of
      autonomous robot navigation.
    </p>

    {/* Distance Sensor Section */}
    <div className="flex flex-col items-center mb-12">
      <div className="w-full max-w-4xl bg-white border-l-4 border-cyan-500 rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold text-cyan-700 mb-6 flex items-center gap-2">
          <span role="img" aria-label="eye">
            👁️
          </span>
          Distance Sensor
        </h2>
        <div className="mb-4">
          <PDFViewer
            src="/pdfs/Bumper & Distance Sensor.pdf#zoom=100&pagemode=none"
            title="Bumper & Distance Sensor PDF"
          />
          <p className="text-cyan-700 text-sm mt-2">
            For a complete explanation, diagrams, and programming tips, see the
            PDF above!
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              What it does:
            </h3>
            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li>Detects objects from 20mm to 2000mm away</li>
              <li>Uses ultrasonic waves (like a bat!)</li>
              <li>5% error rate above 200mm</li>
              <li>Perfect for obstacle detection</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              How to connect:
            </h3>
            <ol className="list-decimal list-inside text-gray-800 space-y-2">
              <li>Connect to any digital port on the Brain</li>
              <li>Add as "Distance Sensor" in VEXcode IQ</li>
              <li>Set the port number to match your connection</li>
              <li>Test with the "Print to Console" block</li>
            </ol>
          </div>
        </div>
        <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-100 mb-6">
          <h4 className="text-base font-semibold text-cyan-700 mb-2">
            Key Programming Blocks:
          </h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Distance Sensor &gt; Distance</strong>
              <p className="text-gray-600">Returns distance in mm</p>
            </div>
            <div>
              <strong>Distance Sensor &gt; Object Detected</strong>
              <p className="text-gray-600">
                Returns true/false if object detected
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bumper Switch Section */}
    <div className="flex flex-col items-center mb-12">
      <div className="w-full max-w-4xl bg-white border-l-4 border-red-500 rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold text-red-700 mb-6 flex items-center gap-2">
          <span role="img" aria-label="hand">
            ✋
          </span>
          Bumper Switch
        </h2>
        <div className="mb-4">
          <PDFViewer
            src="/pdfs/Bumper & Distance Sensor.pdf#zoom=100&pagemode=none"
            title="Bumper & Distance Sensor PDF"
          />
          <p className="text-red-700 text-sm mt-2">
            For a complete explanation, diagrams, and programming tips, see the
            PDF above!
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              What it does:
            </h3>
            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li>Detects when something touches it</li>
              <li>Simple on/off switch</li>
              <li>Perfect for collision detection</li>
              <li>Can be used as a start button</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              How to connect:
            </h3>
            <ol className="list-decimal list-inside text-gray-800 space-y-2">
              <li>Connect to any digital port on the Brain</li>
              <li>Add as "Bumper Switch" in VEXcode IQ</li>
              <li>Set the port number to match your connection</li>
              <li>Test with the "Print to Console" block</li>
            </ol>
          </div>
        </div>
        <div className="bg-red-50 rounded-lg p-4 border border-red-100 mb-6">
          <h4 className="text-base font-semibold text-red-700 mb-2">
            Key Programming Blocks:
          </h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Bumper Switch &gt; Pressed</strong>
              <p className="text-gray-600">Returns true when pressed</p>
            </div>
            <div>
              <strong>Bumper Switch &gt; Released</strong>
              <p className="text-gray-600">Returns true when released</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Exercises Section */}
    <div className="bg-gradient-to-br from-green-50 to-emerald-100 border-l-4 border-green-500 p-6 rounded-lg shadow-lg mb-8">
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
        Instructor Check-in: Sensor Setup
      </h4>
      <div className="bg-white p-4 rounded-lg border border-yellow-200">
        <p className="text-sm text-gray-800 mb-2">
          <strong>What to demonstrate:</strong> Show students how to properly
          connect and configure distance sensors and bumper switches in VEXcode
          IQ.
        </p>
        <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
          <li>Verify each student's sensor is working correctly</li>
          <li>Check that port numbers match in VEXcode IQ</li>
          <li>Test sensor readings with "Print to Console" blocks</li>
          <li>Ensure students understand the sensor ranges and limitations</li>
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
            Document what you learned about distance sensors and bumper switches
          </li>
          <li>Include screenshots of your working code</li>
          <li>Explain how each sensor works in your own words</li>
          <li>Note any challenges you faced and how you solved them</li>
        </ul>
        <p>
          <strong>2. Submit your code on Google Classroom:</strong>
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Upload screenshots of your completed exercises</li>
          <li>Include a brief explanation of your programming logic</li>
        </ul>
      </div>
      <div className="mt-4 space-x-4">
        <a
          href="https://docs.google.com/presentation/your-google-slides-link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-cyan-700 hover:bg-cyan-500 text-white font-bold rounded-md transition uppercase tracking-wide shadow-lg border-2 border-cyan-400"
        >
          Open Notebook
        </a>
        <a
          href="https://classroom.google.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-md transition uppercase tracking-wide shadow-lg border-2 border-green-400"
        >
          Submit on Classroom
        </a>
      </div>
    </div>
  </>
);

export default Lesson1;
