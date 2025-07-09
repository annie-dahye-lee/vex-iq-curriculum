import React from "react";

const Lesson2 = () => (
  <>
    {/* Exciting intro above video */}
    <div className="mb-6">
      <h2 className="text-2xl text-white mb-2">
        Build Your Intake Roller System!
      </h2>
      <p className="text-base text-white">
        Time to bring your CAD design to life! Construct your intake roller
        mechanism and test its performance for efficient object collection.
      </p>
    </div>

    {/* Removed Rick Astley video */}

    <p className="text-white leading-relaxed mb-6">
      In this lesson, you'll construct your intake roller mechanism using your
      CAD model and Objectives & Checklist document as reference. Pay close
      attention to roller alignment, gear ratios, and smooth operation for
      optimal performance.
    </p>

    {/* Building Process Section */}
    <div className="flex flex-col items-center mb-12">
      <div className="w-full max-w-4xl bg-white border-l-4 border-cyan-500 rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold text-cyan-700 mb-6 flex items-center gap-2">
          <span role="img" aria-label="build">
            🔨
          </span>
          Building Process
        </h2>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Step-by-Step Building:
          </h3>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>
              <strong>Mounting Structure:</strong> Build the base that connects
              to your robot
            </li>
            <li>
              <strong>Roller Assembly:</strong> Construct the roller mechanism
              with proper spacing
            </li>
            <li>
              <strong>Gear Train:</strong> Install the gear system for power
              transfer
            </li>
            <li>
              <strong>Motor Installation:</strong> Mount and connect the drive
              motor
            </li>
            <li>
              <strong>Belt/Chain System:</strong> Install power transmission
              between rollers
            </li>
            <li>
              <strong>Entry Guide:</strong> Add guides to direct objects into
              the intake
            </li>
            <li>
              <strong>Test Operation:</strong> Verify smooth rotation and object
              collection
            </li>
          </ol>
        </div>

        <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-200 mb-6">
          <h4 className="text-base font-semibold text-cyan-700 mb-2">
            Building Tips:
          </h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Follow your CAD model exactly for proper alignment</li>
            <li>Ensure roller spacing is appropriate for target objects</li>
            <li>Check gear meshing and belt tension</li>
            <li>Test roller rotation frequently during assembly</li>
            <li>Keep your workspace organized</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Testing and Performance Section */}
    <div className="flex flex-col items-center mb-12">
      <div className="w-full max-w-4xl bg-white border-l-4 border-green-500 rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold text-green-700 mb-6 flex items-center gap-2">
          <span role="img" aria-label="test">
            🧪
          </span>
          Testing and Performance
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Performance Tests:
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Object Collection:</strong> Test with different object
                sizes and shapes
              </li>
              <li>
                <strong>Collection Speed:</strong> Verify quick and efficient
                object gathering
              </li>
              <li>
                <strong>Reliability:</strong> Consistent performance over
                multiple cycles
              </li>
              <li>
                <strong>Integration:</strong> Works well with existing robot
                systems
              </li>
              <li>
                <strong>Durability:</strong> Handles repeated use without damage
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Common Issues:
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Roller Spacing:</strong> Too wide or narrow for target
                objects
              </li>
              <li>
                <strong>Belt Slippage:</strong> Insufficient tension or worn
                belts
              </li>
              <li>
                <strong>Gear Binding:</strong> Poor alignment or over-tightened
                connections
              </li>
              <li>
                <strong>Motor Overload:</strong> Insufficient power or excessive
                friction
              </li>
              <li>
                <strong>Object Jamming:</strong> Poor entry angle or guide
                design
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
          <h4 className="text-base font-semibold text-green-700 mb-2">
            Testing Protocol:
          </h4>
          <ol className="list-decimal list-inside text-gray-700 space-y-1">
            <li>Test manual operation first (turn rollers by hand)</li>
            <li>Connect motor and test with low power</li>
            <li>Gradually increase speed while monitoring</li>
            <li>Test with different object types and arrangements</li>
            <li>Document any issues and solutions</li>
          </ol>
        </div>
      </div>
    </div>

    {/* Integration Section */}
    <div className="flex flex-col items-center mb-12">
      <div className="w-full max-w-4xl bg-white border-l-4 border-blue-500 rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 flex items-center gap-2">
          <span role="img" aria-label="integration">
            🔗
          </span>
          Integration with Robot
        </h2>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Integration Steps:
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Mounting:</strong> Secure the intake to your robot's frame
            </li>
            <li>
              <strong>Power Connection:</strong> Connect motor to appropriate
              Brain port
            </li>
            <li>
              <strong>Control Programming:</strong> Write code to control intake
              operation
            </li>
            <li>
              <strong>Balance Check:</strong> Ensure robot remains stable with
              intake mounted
            </li>
            <li>
              <strong>Full System Test:</strong> Test complete robot with all
              systems operational
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <h4 className="text-base font-semibold text-blue-700 mb-2">
            Integration Considerations:
          </h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Ensure intake doesn't interfere with other robot systems</li>
            <li>Check that robot can still move and operate normally</li>
            <li>
              Verify all wiring is secure and won't get caught in moving parts
            </li>
            <li>Test that intake can be operated while robot is moving</li>
            <li>Consider object storage and transport after collection</li>
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
        Instructor Check-in: Roller Assembly
      </h4>
      <div className="bg-white p-4 rounded-lg border border-yellow-200">
        <p className="text-sm text-gray-700 mb-2">
          <strong>What to verify:</strong> Monitor students during roller
          assembly and check for proper construction techniques.
        </p>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>Check for proper roller alignment and spacing</li>
          <li>Verify belt tension and gear engagement</li>
          <li>Test mechanical functionality and smooth operation</li>
          <li>Ensure students are following their CAD models correctly</li>
          <li>Help troubleshoot any mechanical issues that arise</li>
        </ul>
      </div>
    </div>

    {/* Performance Testing Check-in */}
    <div className="bg-gradient-to-br from-yellow-50 to-orange-100 border-l-4 border-yellow-500 p-6 rounded-lg shadow-lg mb-8">
      <h4 className="text-lg font-bold text-yellow-800 mb-4 flex items-center gap-2">
        <span role="img" aria-label="teacher">
          👨‍🏫
        </span>
        Instructor Check-in: Performance Testing
      </h4>
      <div className="bg-white p-4 rounded-lg border border-yellow-200">
        <p className="text-sm text-gray-700 mb-2">
          <strong>What to test:</strong> Verify each student's completed intake
          system meets all performance requirements.
        </p>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>Test object collection efficiency with different object types</li>
          <li>Verify roller speed and smooth operation</li>
          <li>Check system reliability and consistency</li>
          <li>
            Ensure proper integration with robot doesn't cause interference
          </li>
          <li>
            Confirm students can explain their design and building process
          </li>
        </ul>
      </div>
    </div>

    {/* Homework Section */}
    <div className="bg-gradient-to-br from-white via-cyan-50 to-cyan-100 border-l-4 border-cyan-500 p-6 rounded-lg shadow-xl mb-8">
      <h3 className="text-xl font-bold text-cyan-700 mb-3">Homework</h3>
      <div className="space-y-3 text-cyan-700">
        <p>
          <strong>1. Complete Your Intake Build:</strong>
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>
            Finish building your intake roller mechanism if not completed in
            class
          </li>
          <li>
            Test the intake with different objects to verify functionality
          </li>
          <li>Make any necessary adjustments for optimal performance</li>
          <li>Take photos of your completed intake system</li>
        </ul>
        <p>
          <strong>2. Update your Engineering Notebook:</strong>
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Document your building process with photos and notes</li>
          <li>
            Include screenshots of your CAD model alongside the built mechanism
          </li>
          <li>Note any challenges you faced and how you solved them</li>
          <li>Document any modifications you made during building</li>
          <li>Record test results and performance observations</li>
        </ul>
        <p>
          <strong>3. Finalize Your CAD Model:</strong>
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>
            Update your CAD model to reflect any changes made during building
          </li>
          <li>Ensure the final CAD model matches your physical build</li>
          <li>
            Document any design improvements discovered during construction
          </li>
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
