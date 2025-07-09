import React from "react";

const Lesson4 = () => (
  <>
    <div className="mb-6">
      <h2 className="text-2xl text-white mb-2">
        Combine Your Catapult Components!
      </h2>
      <p className="text-base text-white">
        Integrate the ratchet motor and catapult arm into a unified system. This
        is where your individual components come together to create a functional
        catapult.
      </p>
    </div>

    {/* Removed Rick Astley video */}

    <p className="text-white leading-relaxed mb-6">
      In this lesson, you'll integrate the ratchet motor and catapult arm into a
      unified system. You'll CAD the complete integration and test the combined
      mechanism to ensure everything works together smoothly.
    </p>

    {/* Integration Design Section */}
    <div className="flex flex-col items-center mb-12">
      <div className="w-full max-w-4xl bg-white border-l-4 border-cyan-500 rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold text-cyan-700 mb-6 flex items-center gap-2">
          <span role="img" aria-label="integration">
            🔗
          </span>
          CAD the Complete Integration
        </h2>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Integration Process:
          </h3>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>
              <strong>Combine Assemblies:</strong> Import both ratchet motor and
              catapult arm into one assembly
            </li>
            <li>
              <strong>Position Components:</strong> Arrange the components in
              their final relative positions
            </li>
            <li>
              <strong>Design Connection:</strong> Create the mechanical
              connection between ratchet and arm
            </li>
            <li>
              <strong>Apply Constraints:</strong> Use mates to properly connect
              the components
            </li>
            <li>
              <strong>Test Motion:</strong> Verify the integrated system moves
              correctly
            </li>
            <li>
              <strong>Check Clearance:</strong> Ensure no interference between
              moving parts
            </li>
            <li>
              <strong>Optimize Layout:</strong> Arrange for best performance and
              accessibility
            </li>
          </ol>
        </div>

        <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-200 mb-6">
          <h4 className="text-base font-semibold text-cyan-700 mb-2">
            Integration Considerations:
          </h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Connection point must transfer power efficiently</li>
            <li>Ensure proper alignment for smooth operation</li>
            <li>Consider maintenance and adjustment access</li>
            <li>Plan for mounting to the robot frame</li>
            <li>Account for all moving parts and clearances</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Physical Integration Section */}
    <div className="flex flex-col items-center mb-12">
      <div className="w-full max-w-4xl bg-white border-l-4 border-green-500 rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold text-green-700 mb-6 flex items-center gap-2">
          <span role="img" aria-label="build">
            🔨
          </span>
          Physical Integration
        </h2>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Integration Steps:
          </h3>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>
              <strong>Prepare Components:</strong> Ensure both ratchet motor and
              catapult arm are complete
            </li>
            <li>
              <strong>Position Components:</strong> Arrange them according to
              your CAD design
            </li>
            <li>
              <strong>Create Connection:</strong> Build the mechanical link
              between ratchet and arm
            </li>
            <li>
              <strong>Test Engagement:</strong> Verify ratchet properly engages
              with the arm
            </li>
            <li>
              <strong>Adjust Alignment:</strong> Fine-tune positioning for
              optimal performance
            </li>
            <li>
              <strong>Test Full Motion:</strong> Verify complete winding and
              release cycle
            </li>
            <li>
              <strong>Secure Assembly:</strong> Ensure all connections are
              properly fastened
            </li>
          </ol>
        </div>

        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
          <h4 className="text-base font-semibold text-green-700 mb-2">
            Integration Tips:
          </h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Follow your CAD model exactly for proper alignment</li>
            <li>Test engagement frequently during integration</li>
            <li>Ensure smooth motion throughout the range</li>
            <li>Check that all connections are secure</li>
            <li>Verify no interference between components</li>
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
          Testing the Integrated System
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              System Tests:
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Winding Cycle:</strong> Ratchet should wind the arm
                smoothly
              </li>
              <li>
                <strong>Energy Storage:</strong> Arm should hold position when
                wound
              </li>
              <li>
                <strong>Release Operation:</strong> Should release cleanly when
                triggered
              </li>
              <li>
                <strong>Return Motion:</strong> Arm should return to starting
                position
              </li>
              <li>
                <strong>Consistency:</strong> Multiple cycles should behave
                similarly
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Integration Issues:
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Poor Engagement:</strong> Ratchet not properly
                connecting to arm
              </li>
              <li>
                <strong>Binding:</strong> Friction or interference in the
                connection
              </li>
              <li>
                <strong>Inconsistent Release:</strong> Release mechanism not
                working properly
              </li>
              <li>
                <strong>Weak Performance:</strong> Insufficient power transfer
              </li>
              <li>
                <strong>Alignment Problems:</strong> Components not properly
                aligned
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <h4 className="text-base font-semibold text-blue-700 mb-2">
            Testing Protocol:
          </h4>
          <ol className="list-decimal list-inside text-gray-700 space-y-1">
            <li>Test manual operation first (turn ratchet by hand)</li>
            <li>Connect motor and test with low power</li>
            <li>Verify complete winding and release cycle</li>
            <li>Test multiple cycles for consistency</li>
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
        Instructor Check-in: System Integration
      </h4>
      <div className="bg-white p-4 rounded-lg border border-yellow-200">
        <p className="text-sm text-gray-700 mb-2">
          <strong>What to test:</strong> Verify the integration of ratchet motor
          and catapult arm works correctly.
        </p>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>Check proper engagement between ratchet and arm</li>
          <li>Verify smooth winding and release operation</li>
          <li>Test complete system functionality</li>
          <li>Ensure no interference or binding</li>
          <li>Confirm students can explain their integration approach</li>
        </ul>
      </div>
    </div>

    {/* Homework Section */}
    <div className="bg-gradient-to-br from-white via-cyan-50 to-cyan-100 border-l-4 border-cyan-500 p-6 rounded-lg shadow-xl mb-8">
      <h3 className="text-xl font-bold text-cyan-700 mb-3">Homework</h3>
      <div className="space-y-3 text-cyan-700">
        <p>
          <strong>1. Complete Your Integration:</strong>
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Finish CAD-ing the complete integration using your designs</li>
          <li>Physically integrate your ratchet motor and catapult arm</li>
          <li>Test the combined system for proper operation</li>
          <li>Take photos of your integrated catapult system</li>
        </ul>
        <p>
          <strong>2. Update your Engineering Notebook:</strong>
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Document your integration design and building process</li>
          <li>
            Include screenshots of your CAD model and photos of the integrated
            system
          </li>
          <li>
            Explain your integration approach and any challenges you faced
          </li>
          <li>Note any modifications you made during integration</li>
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

export default Lesson4;
