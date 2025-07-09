import React from "react";

const Lesson3 = () => (
  <>
    <div className="mb-6">
      <h2 className="text-2xl text-white mb-2">
        Build Your Ratchet Motor System!
      </h2>
      <p className="text-base text-white">
        Construct the ratchet motor mechanism that will wind and release your
        catapult. This is the power system that controls the launch.
      </p>
    </div>

    {/* Removed Rick Astley video */}

    <p className="text-white leading-relaxed mb-6">
      In this lesson, you'll build the ratchet motor system that provides
      controlled winding and release for your catapult. This mechanism allows
      you to wind up energy and release it precisely when needed.
    </p>

    {/* CAD Design Section */}
    <div className="flex flex-col items-center mb-12">
      <div className="w-full max-w-4xl bg-white border-l-4 border-cyan-500 rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold text-cyan-700 mb-6 flex items-center gap-2">
          <span role="img" aria-label="cad">
            💻
          </span>
          CAD Your Ratchet Motor
        </h2>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Design Process:
          </h3>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>
              <strong>Import Instructions:</strong> Open the 3D building
              instructions for the ratchet motor
            </li>
            <li>
              <strong>Create Assembly:</strong> Start a new assembly or add to
              your existing robot assembly
            </li>
            <li>
              <strong>Import Parts:</strong> Import all required motor, gear,
              and ratchet parts
            </li>
            <li>
              <strong>Follow Instructions:</strong> Use step-by-step 3D
              instructions to position parts
            </li>
            <li>
              <strong>Apply Constraints:</strong> Use Revolute Mate for rotating
              parts and Fasten Mate for connections
            </li>
            <li>
              <strong>Test Motion:</strong> Verify the ratchet mechanism works
              correctly
            </li>
            <li>
              <strong>Design Integration:</strong> Plan how it will connect to
              the catapult arm
            </li>
          </ol>
        </div>

        <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-200 mb-6">
          <h4 className="text-base font-semibold text-cyan-700 mb-2">
            Design Considerations:
          </h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Gear ratios determine winding speed and torque</li>
            <li>Ratchet mechanism must engage and disengage reliably</li>
            <li>Motor mounting must be secure and accessible</li>
            <li>Consider the connection point to the catapult arm</li>
            <li>Ensure smooth operation without binding</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Building Process Section */}
    <div className="flex flex-col items-center mb-12">
      <div className="w-full max-w-4xl bg-white border-l-4 border-green-500 rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold text-green-700 mb-6 flex items-center gap-2">
          <span role="img" aria-label="build">
            🔨
          </span>
          Building the Ratchet Motor
        </h2>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Construction Steps:
          </h3>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>
              <strong>Motor Mounting:</strong> Secure the motor to the mounting
              structure
            </li>
            <li>
              <strong>Gear Assembly:</strong> Install the gear train for power
              transmission
            </li>
            <li>
              <strong>Ratchet Mechanism:</strong> Build the ratchet system for
              controlled winding
            </li>
            <li>
              <strong>Release System:</strong> Install the mechanism that
              disengages the ratchet
            </li>
            <li>
              <strong>Connection Point:</strong> Add the attachment point for
              the catapult arm
            </li>
            <li>
              <strong>Test Operation:</strong> Verify winding and release work
              correctly
            </li>
            <li>
              <strong>Power Connection:</strong> Connect motor to Brain and test
              control
            </li>
          </ol>
        </div>

        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
          <h4 className="text-base font-semibold text-green-700 mb-2">
            Building Tips:
          </h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Follow your CAD model exactly for proper alignment</li>
            <li>Ensure gear meshing is smooth and properly engaged</li>
            <li>
              Check that ratchet mechanism engages and disengages reliably
            </li>
            <li>Test winding operation frequently during construction</li>
            <li>Verify all connections are secure but not over-tightened</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Testing Section */}
    <div className="flex flex-col items-center mb-12">
      <div className="w-full max-w-4xl bg-white border-l-4 border-blue-500 rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 flex items-center gap-2">
          <span role="img" aria-label="test">
            🧪
          </span>
          Testing Your Ratchet Motor
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Functionality Tests:
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Winding Operation:</strong> Motor should wind smoothly
                without binding
              </li>
              <li>
                <strong>Ratchet Engagement:</strong> Ratchet should hold
                position when motor stops
              </li>
              <li>
                <strong>Release Mechanism:</strong> Should disengage ratchet
                when triggered
              </li>
              <li>
                <strong>Power Control:</strong> Motor should respond to speed
                and direction control
              </li>
              <li>
                <strong>Consistency:</strong> Multiple cycles should behave
                similarly
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Common Issues:
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Gear Binding:</strong> Poor alignment or over-tightened
                connections
              </li>
              <li>
                <strong>Ratchet Slippage:</strong> Insufficient engagement or
                worn parts
              </li>
              <li>
                <strong>Motor Overload:</strong> Excessive friction or
                resistance
              </li>
              <li>
                <strong>Inconsistent Release:</strong> Release mechanism needs
                adjustment
              </li>
              <li>
                <strong>Poor Winding:</strong> Insufficient torque or gear ratio
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <h4 className="text-base font-semibold text-blue-700 mb-2">
            Testing Protocol:
          </h4>
          <ol className="list-decimal list-inside text-gray-700 space-y-1">
            <li>Test manual operation first (turn gears by hand)</li>
            <li>Connect motor and test with low power</li>
            <li>Verify ratchet engagement and holding</li>
            <li>Test release mechanism functionality</li>
            <li>Document any issues and solutions</li>
          </ol>
        </div>
      </div>
    </div>

    {/* Instructor Check-in */}
    <div className="bg-gradient-to-br from-yellow-50 to-orange-100 border-l-4 border-yellow-500 p-6 rounded-lg shadow-lg mb-8">
      <h4 className="text-lg font-bold text-yellow-800 mb-4 flex items-center gap-2">
        <span role="img" aria-label="teacher">
          👨‍🏫
        </span>
        Instructor Check-in: Ratchet Motor Assembly
      </h4>
      <div className="bg-white p-4 rounded-lg border border-yellow-200">
        <p className="text-sm text-gray-700 mb-2">
          <strong>What to verify:</strong> Monitor students during ratchet motor
          construction and check for proper assembly techniques.
        </p>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>Check for proper gear alignment and meshing</li>
          <li>Verify ratchet mechanism engagement and disengagement</li>
          <li>Test motor operation and power control</li>
          <li>Ensure students are following their CAD models correctly</li>
          <li>Help troubleshoot any mechanical issues that arise</li>
        </ul>
      </div>
    </div>

    {/* Homework Section */}
    <div className="bg-gradient-to-br from-white via-cyan-50 to-cyan-100 border-l-4 border-cyan-500 p-6 rounded-lg shadow-xl mb-8">
      <h3 className="text-xl font-bold text-cyan-700 mb-3">Homework</h3>
      <div className="space-y-3 text-cyan-700">
        <p>
          <strong>1. Complete Your Ratchet Motor:</strong>
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>
            Finish CAD-ing your ratchet motor using the 3D building instructions
          </li>
          <li>Build the ratchet motor mechanism following your CAD model</li>
          <li>Test the winding and release functionality</li>
          <li>Take photos of your completed ratchet motor system</li>
        </ul>
        <p>
          <strong>2. Update your Engineering Notebook:</strong>
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Document your ratchet motor design and building process</li>
          <li>
            Include screenshots of your CAD model and photos of the built system
          </li>
          <li>Explain your design decisions and any challenges you faced</li>
          <li>Note any modifications you made during building</li>
          <li>Record test results and performance observations</li>
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
          Submit Photos & Notes
        </a>
      </div>
    </div>
  </>
);

export default Lesson3;
