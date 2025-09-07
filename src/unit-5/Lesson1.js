import React from "react";

const Lesson1 = () => (
  <>
    {/* Exciting intro above video */}
    <div className="mb-6">
      <h2 className="text-2xl text-white mb-2">
        Design Your Robot's "Vacuum"!
      </h2>
      <p className="text-base text-white">
        Learn about intake roller systems and how they efficiently collect game
        objects. Your robot will soon be able to quickly gather and transport
        multiple objects!
      </p>
    </div>

    {/* Removed Rick Astley video */}

    <p className="text-white leading-relaxed mb-6">
      In this lesson, you'll explore how intake roller systems work and their
      applications in competitive robotics. You'll learn how to design and CAD
      an efficient intake system that can quickly collect and transport game
      objects.
    </p>

    {/* Intake System Types Section */}
    <div className="flex flex-col items-center mb-12">
      <div className="w-full max-w-4xl bg-white border-l-4 border-cyan-500 rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold text-cyan-700 mb-6 flex items-center gap-2">
          Types of Intake Systems
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-6">
          <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-200">
            <h3 className="text-lg font-semibold text-cyan-800 mb-3">
              Roller Intake
            </h3>
            <ul className="list-disc list-inside text-black space-y-2">
              <li>Uses rotating rollers to grab objects</li>
              <li>Excellent for round/spherical objects</li>
              <li>Can handle multiple objects at once</li>
              <li>Reliable and consistent performance</li>
            </ul>
          </div>
          <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-200">
            <h3 className="text-lg font-semibold text-cyan-800 mb-3">
              Belt Intake
            </h3>
            <ul className="list-disc list-inside text-black space-y-2">
              <li>Uses continuous belts to transport objects</li>
              <li>Good for flat objects and cubes</li>
              <li>Can transport objects over longer distances</li>
              <li>More complex to build and maintain</li>
            </ul>
          </div>
        </div>

        <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-200 mb-6">
          <h3 className="text-lg font-semibold text-cyan-800 mb-3">
            Design Considerations
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Roller Spacing:</strong> Must be appropriate for target
              object sizes
            </li>
            <li>
              <strong>Roller Speed:</strong> Fast enough to collect quickly, not
              so fast it damages objects
            </li>
            <li>
              <strong>Entry Angle:</strong> Should guide objects smoothly into
              the intake
            </li>
            <li>
              <strong>Power Transfer:</strong> Efficient gear ratios for optimal
              performance
            </li>
            <li>
              <strong>Durability:</strong> Must withstand repeated use and
              potential impacts
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Objectives and Checklist Section */}
    <div className="flex flex-col items-center mb-12">
      <div className="w-full max-w-4xl bg-white border-l-4 border-green-500 rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold text-green-700 mb-6 flex items-center gap-2">
          Objectives and Checklist
        </h2>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Learning Objectives:
          </h3>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>
              Understand how roller-based intake systems work and their
              advantages
            </li>
            <li>
              Learn to design efficient intake mechanisms for specific game
              objects
            </li>
            <li>Master CAD techniques for complex roller assemblies</li>
            <li>
              Develop skills in optimizing mechanical systems for performance
            </li>
          </ul>
        </div>

        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
          <h4 className="text-base font-semibold text-green-700 mb-2">
            Pre-Building Checklist:
          </h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong className="text-gray-600">CAD Requirements:</strong>
              <ul className="list-disc list-inside text-gray-700 mt-1">
                <li>Roller mechanism fully designed</li>
                <li>Proper gear ratios calculated</li>
                <li>Roller spacing optimized</li>
                <li>Integration with existing systems planned</li>
              </ul>
            </div>
            <div>
              <strong className="text-gray-600">Design Validation:</strong>
              <ul className="list-disc list-inside text-gray-700 mt-1">
                <li>Object size compatibility verified</li>
                <li>Motor requirements calculated</li>
                <li>Clearance and interference checked</li>
                <li>Performance targets defined</li>
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
          CAD Your Intake Roller Design
        </h2>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Step-by-Step Process:
          </h3>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>
              <strong>Import Building Instructions:</strong> Open the 3D
              building instructions for the intake roller system
            </li>
            <li>
              <strong>Create Assembly:</strong> Start a new assembly or add to
              your existing robot assembly
            </li>
            <li>
              <strong>Import Parts:</strong> Import all required roller, gear,
              and mounting parts
            </li>
            <li>
              <strong>Position Rollers:</strong> Place rollers with proper
              spacing for target objects
            </li>
            <li>
              <strong>Design Gear Train:</strong> Create efficient gear ratios
              for optimal roller speed
            </li>
            <li>
              <strong>Add Mounting Structure:</strong> Design secure mounting to
              your robot
            </li>
            <li>
              <strong>Test Motion:</strong> Verify rollers rotate smoothly and
              in the correct direction
            </li>
          </ol>
        </div>

        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <h4 className="text-base font-semibold text-blue-700 mb-2">
            CAD Tips:
          </h4>
          <ul className="list-disc list-inside text-black space-y-1">
            <li>
              Use the "Measure" tool to verify roller spacing and clearances
            </li>
            <li>
              Create motion studies to test roller rotation and object
              interaction
            </li>
            <li>
              Check for interference between rollers and mounting structure
            </li>
            <li>Ensure proper gear meshing and power transfer</li>
            <li>Consider the entry angle for smooth object collection</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Instructor Check-in */}
    <div className="bg-gradient-to-br from-yellow-50 to-orange-100 border-l-4 border-yellow-500 p-6 rounded-lg shadow-lg mb-8">
      <h4 className="text-lg font-bold text-yellow-800 mb-4 flex items-center gap-2">
        Instructor Check-in: Intake Design Review
      </h4>
      <div className="bg-white p-4 rounded-lg border border-yellow-200">
        <p className="text-sm text-gray-800 mb-2">
          <strong>What to review:</strong> Check each student's intake roller
          CAD design and provide feedback on their approach.
        </p>
        <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
          <li>Verify proper roller alignment and spacing</li>
          <li>Check gear ratios for optimal performance</li>
          <li>Ensure integration with existing robot systems</li>
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
            Finish CAD-ing your intake roller design using the 3D building
            instructions
          </li>
          <li>Ensure proper roller spacing and gear ratios</li>
          <li>Test the motion simulation to verify functionality</li>
          <li>Take screenshots of your completed design</li>
        </ul>
        <p>
          <strong>2. Update your Engineering Notebook:</strong>
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Document what you learned about intake roller systems</li>
          <li>Include screenshots of your CAD model</li>
          <li>Explain your design decisions and gear ratio calculations</li>
          <li>Note any challenges you faced and how you solved them</li>
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
          Submit CAD Model
        </a>
      </div>
    </div>
  </>
);

export default Lesson1;
