import React from "react";

const Lesson2 = () => (
  <>
    {/* Exciting intro above video */}
    <div className="mb-6">
      <h2 className="text-2xl text-white mb-2">Build Your Robot's Claw!</h2>
      <p className="text-base text-white">
        Time to bring your CAD design to life! Follow your 3D model and build a
        fully functional claw mechanism that can grab and hold objects.
      </p>
    </div>

    {/* Removed Rick Astley video */}

    <p className="text-white leading-relaxed mb-6">
      In this lesson, you'll construct your claw mechanism using your CAD model
      as a reference. Pay close attention to gear alignment, proper connections,
      and mechanical functionality. This is where your design becomes reality!
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
          <ol className="list-decimal list-inside text-white-700 space-y-2">
            <li>
              <strong>Gather Parts:</strong> Collect all required parts from
              your CAD model
            </li>
            <li>
              <strong>Start with Base:</strong> Build the mounting structure
              that connects to your drivetrain
            </li>
            <li>
              <strong>Add Motor:</strong> Install the motor that will power the
              claw mechanism
            </li>
            <li>
              <strong>Build Gear Train:</strong> Assemble the gear system that
              transfers power to the claw
            </li>
            <li>
              <strong>Construct Claw Arms:</strong> Build the actual gripping
              mechanism
            </li>
            <li>
              <strong>Connect Everything:</strong> Link the gear train to the
              claw arms
            </li>
            <li>
              <strong>Test Motion:</strong> Verify the claw opens and closes
              smoothly
            </li>
          </ol>
        </div>

        <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-200 mb-6">
          <h4 className="text-base font-semibold text-cyan-700 mb-2">
            Building Tips:
          </h4>
          <ul className="list-disc list-inside text-white-700 space-y-1">
            <li>Follow your CAD model exactly - it's your blueprint!</li>
            <li>
              Check gear meshing - teeth should engage properly without binding
            </li>
            <li>Ensure all connections are secure but not over-tightened</li>
            <li>Test motion frequently as you build</li>
            <li>Keep your workspace organized</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Testing and Troubleshooting Section */}
    <div className="flex flex-col items-center mb-12">
      <div className="w-full max-w-4xl bg-white border-l-4 border-green-500 rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold text-green-700 mb-6 flex items-center gap-2">
          <span role="img" aria-label="test">
            🧪
          </span>
          Testing and Troubleshooting
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Functionality Tests:
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Range of Motion:</strong> Claw should open and close
                fully
              </li>
              <li>
                <strong>Smooth Operation:</strong> No binding or jerky movement
              </li>
              <li>
                <strong>Grip Strength:</strong> Can hold objects without
                slipping
              </li>
              <li>
                <strong>Release:</strong> Objects should release cleanly
              </li>
              <li>
                <strong>Integration:</strong> Doesn't interfere with drivetrain
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Common Issues:
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Gears Not Meshing:</strong> Check alignment and spacing
              </li>
              <li>
                <strong>Binding:</strong> Look for over-tightened connections
              </li>
              <li>
                <strong>Weak Grip:</strong> Verify gear ratios and motor power
              </li>
              <li>
                <strong>Inconsistent Motion:</strong> Check for loose parts
              </li>
              <li>
                <strong>Interference:</strong> Ensure proper clearance
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
          <h4 className="text-base font-semibold text-green-700 mb-2">
            Testing Protocol:
          </h4>
          <ol className="list-decimal list-inside text-gray-700 space-y-1">
            <li>Test manual operation first (turn gears by hand)</li>
            <li>Connect motor and test with low power</li>
            <li>Gradually increase power while monitoring</li>
            <li>Test with different object sizes and shapes</li>
            <li>Document any issues and solutions</li>
          </ol>
        </div>
      </div>
    </div>

    {/* Integration with Drivetrain Section */}
    <div className="flex flex-col items-center mb-12">
      <div className="w-full max-w-4xl bg-white border-l-4 border-blue-500 rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 flex items-center gap-2">
          <span role="img" aria-label="integration">
            🔗
          </span>
          Integration with Drivetrain
        </h2>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Mounting Considerations:
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Position:</strong> Claw should be easily accessible for
              grabbing objects
            </li>
            <li>
              <strong>Balance:</strong> Don't make the robot too front-heavy
            </li>
            <li>
              <strong>Clearance:</strong> Ensure claw doesn't hit the ground or
              other parts
            </li>
            <li>
              <strong>Wiring:</strong> Route motor wires cleanly to avoid
              interference
            </li>
            <li>
              <strong>Accessibility:</strong> Easy to maintain and adjust
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <h4 className="text-base font-semibold text-blue-700 mb-2">
            Final Integration Steps:
          </h4>
          <ol className="list-decimal list-inside text-gray-700 space-y-1">
            <li>
              Mount the claw to your drivetrain using your CAD design as
              reference
            </li>
            <li>Connect the motor to the appropriate port on the Brain</li>
            <li>Test the complete system (drivetrain + claw)</li>
            <li>Make any final adjustments for optimal performance</li>
            <li>Document the final configuration</li>
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
        Instructor Check-in: Building Progress
      </h4>
      <div className="bg-white p-4 rounded-lg border border-yellow-200">
        <p className="text-sm text-gray-700 mb-2">
          <strong>What to verify:</strong> Monitor students during the building
          process and check for proper construction techniques.
        </p>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>Check for proper gear alignment and meshing</li>
          <li>Verify secure connections and proper part placement</li>
          <li>Test mechanical functionality and smooth operation</li>
          <li>Ensure students are following their CAD models correctly</li>
          <li>Help troubleshoot any mechanical issues that arise</li>
        </ul>
      </div>
    </div>

    {/* Final Testing Check-in */}
    <div className="bg-gradient-to-br from-yellow-50 to-orange-100 border-l-4 border-yellow-500 p-6 rounded-lg shadow-lg mb-8">
      <h4 className="text-lg font-bold text-yellow-800 mb-4 flex items-center gap-2">
        <span role="img" aria-label="teacher">
          👨‍🏫
        </span>
        Instructor Check-in: Final Testing
      </h4>
      <div className="bg-white p-4 rounded-lg border border-yellow-200">
        <p className="text-sm text-gray-700 mb-2">
          <strong>What to test:</strong> Verify each student's completed claw
          mechanism meets all functionality requirements.
        </p>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>Test grabbing, holding, and releasing different objects</li>
          <li>Verify smooth operation without binding or jerky movement</li>
          <li>Check integration with drivetrain doesn't cause interference</li>
          <li>Ensure proper motor connection and control</li>
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
          <strong>1. Complete Your Claw Build:</strong>
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Finish building your claw mechanism if not completed in class</li>
          <li>Test the claw with different objects to verify functionality</li>
          <li>Make any necessary adjustments for optimal performance</li>
          <li>Take photos of your completed claw mechanism</li>
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
