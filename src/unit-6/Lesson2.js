import React from "react";

const Lesson2 = () => (
  <>
    <div className="mb-6">
      <h2 className="text-2xl text-white mb-2">Build Your Catapult Arm!</h2>
      <p className="text-base text-white">
        Design and construct the catapult arm mechanism. This is the core
        component that will store and release energy for launching objects.
      </p>
    </div>

    {/* Removed Rick Astley video */}

    <p className="text-white leading-relaxed mb-6">
      In this lesson, you'll design and build the catapult arm mechanism. You'll
      CAD the arm using building instructions, then construct it and test its
      motion. The arm is crucial for storing potential energy and converting it
      to kinetic energy during launch.
    </p>

    {/* CAD Design Section */}
    <div className="flex flex-col items-center mb-12">
      <div className="w-full max-w-4xl bg-white border-l-4 border-cyan-500 rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold text-cyan-700 mb-6 flex items-center gap-2">
          <span role="img" aria-label="cad">
            💻
          </span>
          CAD Your Catapult Arm
        </h2>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Design Process:
          </h3>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>
              <strong>Import Instructions:</strong> Open the 3D building
              instructions for the catapult arm
            </li>
            <li>
              <strong>Create Assembly:</strong> Start a new assembly or add to
              your existing robot assembly
            </li>
            <li>
              <strong>Import Parts:</strong> Import all required arm, pivot, and
              mounting parts
            </li>
            <li>
              <strong>Follow Instructions:</strong> Use step-by-step 3D
              instructions to position parts
            </li>
            <li>
              <strong>Apply Constraints:</strong> Use Revolute Mate for pivot
              points and Fasten Mate for connections
            </li>
            <li>
              <strong>Test Motion:</strong> Verify the arm can pivot smoothly
              through its range
            </li>
            <li>
              <strong>Add Energy Storage:</strong> Design attachment points for
              elastic bands or springs
            </li>
          </ol>
        </div>

        <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-200 mb-6">
          <h4 className="text-base font-semibold text-cyan-700 mb-2">
            Design Considerations:
          </h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Arm length affects launch power and trajectory</li>
            <li>Pivot point location influences mechanical advantage</li>
            <li>Energy storage attachment points must be secure</li>
            <li>Arm must be strong enough to handle launch forces</li>
            <li>Consider clearance for arm movement</li>
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
          Building the Catapult Arm
        </h2>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Construction Steps:
          </h3>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>
              <strong>Base Structure:</strong> Build the mounting frame for the
              arm
            </li>
            <li>
              <strong>Pivot Assembly:</strong> Install the pivot mechanism for
              smooth arm movement
            </li>
            <li>
              <strong>Arm Construction:</strong> Build the main arm structure
              with proper geometry
            </li>
            <li>
              <strong>Energy Storage:</strong> Add elastic bands or springs for
              energy storage
            </li>
            <li>
              <strong>Release Mechanism:</strong> Install the trigger system for
              controlled release
            </li>
            <li>
              <strong>Test Motion:</strong> Verify arm moves smoothly through
              its range
            </li>
            <li>
              <strong>Strength Test:</strong> Ensure arm can handle launch
              forces
            </li>
          </ol>
        </div>

        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
          <h4 className="text-base font-semibold text-green-700 mb-2">
            Building Tips:
          </h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Follow your CAD model exactly for proper alignment</li>
            <li>Ensure pivot points are smooth and well-lubricated</li>
            <li>Check that elastic bands are properly tensioned</li>
            <li>Test arm motion frequently during construction</li>
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
          Testing Your Catapult Arm
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Functionality Tests:
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Range of Motion:</strong> Arm should move through full
                range smoothly
              </li>
              <li>
                <strong>Energy Storage:</strong> Elastic bands should store
                energy effectively
              </li>
              <li>
                <strong>Release Mechanism:</strong> Trigger should work reliably
              </li>
              <li>
                <strong>Strength:</strong> Arm should withstand launch forces
              </li>
              <li>
                <strong>Consistency:</strong> Multiple releases should behave
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
                <strong>Binding:</strong> Pivot points may be too tight or
                misaligned
              </li>
              <li>
                <strong>Weak Launch:</strong> Insufficient elastic band tension
              </li>
              <li>
                <strong>Inconsistent Release:</strong> Trigger mechanism needs
                adjustment
              </li>
              <li>
                <strong>Arm Breakage:</strong> Insufficient structural strength
              </li>
              <li>
                <strong>Poor Accuracy:</strong> Inconsistent release timing
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <h4 className="text-base font-semibold text-blue-700 mb-2">
            Testing Protocol:
          </h4>
          <ol className="list-decimal list-inside text-gray-700 space-y-1">
            <li>Test manual arm movement first</li>
            <li>Verify elastic band tension and attachment</li>
            <li>Test release mechanism with low tension</li>
            <li>Gradually increase tension while monitoring</li>
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
        Instructor Check-in: Catapult Arm Design
      </h4>
      <div className="bg-white p-4 rounded-lg border border-yellow-200">
        <p className="text-sm text-gray-700 mb-2">
          <strong>What to review:</strong> Check each student's catapult arm CAD
          design and building progress.
        </p>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>Verify proper arm geometry and pivot point design</li>
          <li>Check energy storage mechanism and attachment points</li>
          <li>Ensure release mechanism is properly designed</li>
          <li>Test arm motion and strength during construction</li>
          <li>Review design decisions and provide optimization suggestions</li>
        </ul>
      </div>
    </div>

    {/* Homework Section */}
    <div className="bg-gradient-to-br from-white via-cyan-50 to-cyan-100 border-l-4 border-cyan-500 p-6 rounded-lg shadow-xl mb-8">
      <h3 className="text-xl font-bold text-cyan-700 mb-3">Homework</h3>
      <div className="space-y-3 text-cyan-700">
        <p>
          <strong>1. Complete Your Catapult Arm:</strong>
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>
            Finish CAD-ing your catapult arm using the 3D building instructions
          </li>
          <li>Build the catapult arm mechanism following your CAD model</li>
          <li>Test the arm's motion and energy storage capabilities</li>
          <li>Take photos of your completed catapult arm</li>
        </ul>
        <p>
          <strong>2. Update your Engineering Notebook:</strong>
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Document your catapult arm design and building process</li>
          <li>
            Include screenshots of your CAD model and photos of the built arm
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

export default Lesson2;
