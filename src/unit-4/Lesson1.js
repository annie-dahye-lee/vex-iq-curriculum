import React from "react";

const Lesson1 = () => (
  <>
    {/* Exciting intro above video */}
    <div className="mb-6">
      <h2 className="text-2xl text-white mb-2">Design Your Robot's "Hands"!</h2>
      <p className="text-base text-white">
        Learn about different claw designs and how to integrate them into your
        robot. Your robot will soon be able to grab, hold, and manipulate
        objects!
      </p>
    </div>

    {/* Removed Rick Astley video */}

    <p className="text-white leading-relaxed mb-6">
      In this lesson, you'll explore different types of claw mechanisms and
      their applications in robotics. You'll learn how to design and CAD a claw
      system that integrates seamlessly with your existing drivetrain.
    </p>

    {/* Claw Types Section */}
    <div className="flex flex-col items-center mb-12">
      <div className="w-full max-w-4xl bg-white border-l-4 border-cyan-500 rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold text-cyan-700 mb-6 flex items-center gap-2">
          <span role="img" aria-label="claw">
            🦀
          </span>
          Types of Claw Mechanisms
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-6">
          <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-200">
            <h3 className="text-lg font-semibold text-cyan-800 mb-3">
              Parallel Gripper
            </h3>
            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li>Both sides move in parallel</li>
              <li>Good for square/rectangular objects</li>
              <li>Consistent grip force</li>
              <li>Easier to control precisely</li>
            </ul>
          </div>
          <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-200">
            <h3 className="text-lg font-semibold text-cyan-800 mb-3">
              Angular Gripper
            </h3>
            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li>Claws pivot from a central point</li>
              <li>Good for round objects</li>
              <li>Can adapt to different shapes</li>
              <li>More complex to control</li>
            </ul>
          </div>
        </div>

        <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-200 mb-6">
          <h3 className="text-lg font-semibold text-cyan-800 mb-3">
            Design Considerations
          </h3>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>
              <strong>Grip Force:</strong> Must be strong enough to hold objects
              but not crush them
            </li>
            <li>
              <strong>Range of Motion:</strong> Should be able to open wide
              enough for target objects
            </li>
            <li>
              <strong>Speed:</strong> Fast enough for game requirements
            </li>
            <li>
              <strong>Reliability:</strong> Consistent performance under
              pressure
            </li>
            <li>
              <strong>Integration:</strong> Must fit with your existing
              drivetrain design
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Objectives and Checklist Section */}
    <div className="flex flex-col items-center mb-12">
      <div className="w-full max-w-4xl bg-white border-l-4 border-green-500 rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold text-green-700 mb-6 flex items-center gap-2">
          <span role="img" aria-label="checklist">
            📋
          </span>
          Objectives and Checklist
        </h2>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Learning Objectives:
          </h3>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>
              Understand different claw mechanism types and their applications
            </li>
            <li>
              Learn how to integrate claw designs into existing CAD assemblies
            </li>
            <li>Master advanced CAD techniques for mechanical assemblies</li>
            <li>Develop skills in mechanical design optimization</li>
          </ul>
        </div>

        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
          <h4 className="text-base font-semibold text-green-700 mb-2">
            Pre-Building Checklist:
          </h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong className="text-lg font-semibold text-gray-800 mb-3">CAD Requirements:</strong>
              <ul className="list-disc list-inside text-gray-800 mt-1">
                <li>Claw mechanism fully designed</li>
                <li>Proper integration with drivetrain</li>
                <li>All parts properly constrained</li>
                <li>Motion simulation completed</li>
              </ul>
            </div>
            <div>
              <strong className="text-lg font-semibold text-gray-800 mb-3">Design Validation:</strong>
              <ul className="list-disc list-inside text-gray-800 mt-1">
                <li>Clearance checks performed</li>
                <li>Gear ratios calculated</li>
                <li>Motor requirements verified</li>
                <li>Weight distribution considered</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* CAD Instructions Section */}
    <div className="flex flex-col items-center mb-12">
      <div className="w-full max-w-4xl bg-white border-l-4 border-blue-500 rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 flex items-center gap-2">
          <span role="img" aria-label="cad">
            💻
          </span>
          CAD Your Claw Design
        </h2>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Step-by-Step Process:
          </h3>
          <ol className="list-decimal list-inside text-gray-800 space-y-2">
            <li>
              <strong>Import Building Instructions:</strong> Open the 3D
              building instructions for the claw mechanism
            </li>
            <li>
              <strong>Create New Assembly:</strong> Start a new assembly or add
              to your existing drivetrain assembly
            </li>
            <li>
              <strong>Import Parts:</strong> Import all required claw parts from
              the VEX IQ parts library
            </li>
            <li>
              <strong>Follow Instructions:</strong> Use the step-by-step 3D
              instructions to position parts correctly
            </li>
            <li>
              <strong>Apply Constraints:</strong> Use Fasten Mate and Revolute
              Mate to properly constrain parts
            </li>
            <li>
              <strong>Test Motion:</strong> Verify that the claw opens and
              closes as expected
            </li>
            <li>
              <strong>Integrate with Drivetrain:</strong> Position the claw on
              your existing robot design
            </li>
          </ol>
        </div>

        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <h4 className="text-base font-semibold text-blue-700 mb-2">
            CAD Tips:
          </h4>
          <ul className="list-disc list-inside text-gray-800 space-y-1">
            <li>Use the "Measure" tool to verify distances and clearances</li>
            <li>Create a motion study to test the claw's range of motion</li>
            <li>Check for interference between moving parts</li>
            <li>Ensure the claw doesn't interfere with drivetrain operation</li>
            <li>Document your design decisions in your engineering notebook</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Instructor Check-in */}
    <div className="bg-gradient-to-br from-yellow-50 to-orange-100 border-l-4 border-yellow-500 p-6 rounded-lg shadow-lg mb-8">
      <h4 className="text-lg font-bold text-yellow-800 mb-4 flex items-center gap-2">
        <span role="img" aria-label="teacher">
          👨‍🏫
        </span>
        Instructor Check-in: CAD Design Review
      </h4>
      <div className="bg-white p-4 rounded-lg border border-yellow-200">
        <p className="text-sm text-gray-800 mb-2">
          <strong>What to review:</strong> Check each student's claw CAD design
          and provide feedback on their integration approach.
        </p>
        <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
          <li>Verify proper integration with the drivetrain</li>
          <li>Check that the design follows building instructions correctly</li>
          <li>Ensure all parts are properly constrained</li>
          <li>Test motion simulation to verify functionality</li>
          <li>Review design decisions and provide optimization suggestions</li>
        </ul>
      </div>
    </div>

    {/* Homework Section */}
    <div className="bg-gradient-to-br from-white via-cyan-50 to-cyan-100 border-l-4 border-cyan-500 p-6 rounded-lg shadow-xl mb-8">
      <h3 className="text-xl font-bold text-cyan-700 mb-3">Homework</h3>
      <div className="space-y-3 text-cyan-700">
        <p>
          <strong>1. Complete Your CAD Model:</strong>
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>
            Finish CAD-ing your claw design using the 3D building instructions
          </li>
          <li>Ensure proper integration with your existing drivetrain</li>
          <li>Test the motion simulation to verify functionality</li>
          <li>Take screenshots of your completed design</li>
        </ul>
        <p>
          <strong>2. Update your Engineering Notebook:</strong>
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Document what you learned about different claw mechanisms</li>
          <li>Include screenshots of your CAD model</li>
          <li>Explain your design decisions and any challenges you faced</li>
          <li>Note any modifications you made to the original design</li>
        </ul>
      </div>
    </div>
  </>
);

export default Lesson1;
