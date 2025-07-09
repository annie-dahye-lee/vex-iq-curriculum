import React from "react";

const Lesson5 = () => (
  <>
    {/* Exciting intro above video */}
    <div className="mb-6">
      <h2 className="text-2xl text-white mb-2">
        Complete Your Catapult System!
      </h2>
      <p className="text-base text-white">
        Time to build the complete catapult system and integrate it with your
        robot. Test, tune, and optimize for maximum performance!
      </p>
    </div>

    {/* Removed Rick Astley video */}

    <p className="text-white leading-relaxed mb-6">
      In this final lesson, you'll construct the complete catapult system by
      combining all the components you've designed and built. This is where
      everything comes together to create a powerful, reliable launching
      mechanism.
    </p>

    {/* Final Assembly Section */}
    <div className="flex flex-col items-center mb-12">
      <div className="w-full max-w-4xl bg-white border-l-4 border-cyan-500 rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold text-cyan-700 mb-6 flex items-center gap-2">
          <span role="img" aria-label="assembly">
            🔧
          </span>
          Final Assembly Process
        </h2>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Step-by-Step Assembly:
          </h3>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>
              <strong>Mount Catapult Arm:</strong> Secure the completed catapult
              arm to your robot's frame
            </li>
            <li>
              <strong>Install Ratchet Motor:</strong> Mount the ratchet motor
              system in the correct position
            </li>
            <li>
              <strong>Connect Components:</strong> Link the ratchet motor to the
              catapult arm mechanism
            </li>
            <li>
              <strong>Add Energy Storage:</strong> Install elastic bands or
              springs for energy storage
            </li>
            <li>
              <strong>Test Release Mechanism:</strong> Verify the release system
              works reliably
            </li>
            <li>
              <strong>Connect Electronics:</strong> Wire the motor to the Brain
              and test control
            </li>
            <li>
              <strong>Final Integration:</strong> Ensure everything works
              together smoothly
            </li>
          </ol>
        </div>

        <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-200 mb-6">
          <h4 className="text-base font-semibold text-cyan-700 mb-2">
            Assembly Tips:
          </h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Follow your CAD model exactly for proper alignment</li>
            <li>Check all connections are secure but not over-tightened</li>
            <li>Test each component individually before final assembly</li>
            <li>Ensure proper clearance for all moving parts</li>
            <li>Document any modifications made during assembly</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Testing and Tuning Section */}
    <div className="flex flex-col items-center mb-12">
      <div className="w-full max-w-4xl bg-white border-l-4 border-green-500 rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold text-green-700 mb-6 flex items-center gap-2">
          <span role="img" aria-label="test">
            🎯
          </span>
          Testing and Tuning
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Performance Tests:
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Launch Consistency:</strong> Multiple launches should
                hit similar targets
              </li>
              <li>
                <strong>Power Control:</strong> Ability to adjust launch force
                for different distances
              </li>
              <li>
                <strong>Reliability:</strong> System works consistently under
                repeated use
              </li>
              <li>
                <strong>Accuracy:</strong> Projectiles land where intended
              </li>
              <li>
                <strong>Safety:</strong> No damage to robot or field during
                operation
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Tuning Parameters:
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Elastic Band Tension:</strong> Adjust for desired power
                output
              </li>
              <li>
                <strong>Release Point:</strong> Fine-tune for optimal trajectory
              </li>
              <li>
                <strong>Motor Speed:</strong> Control winding speed and power
              </li>
              <li>
                <strong>Arm Geometry:</strong> Optimize for maximum efficiency
              </li>
              <li>
                <strong>Friction Points:</strong> Minimize for smooth operation
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
          <h4 className="text-base font-semibold text-green-700 mb-2">
            Testing Protocol:
          </h4>
          <ol className="list-decimal list-inside text-gray-700 space-y-1">
            <li>Start with low-power tests to verify basic functionality</li>
            <li>Gradually increase power while monitoring performance</li>
            <li>Test with different projectile types and weights</li>
            <li>Measure accuracy and consistency over multiple launches</li>
            <li>Document all adjustments and their effects</li>
          </ol>
        </div>
      </div>
    </div>

    {/* Integration with Robot Section */}
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
            Final Integration Steps:
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Mounting:</strong> Secure the complete catapult to your
              robot's frame
            </li>
            <li>
              <strong>Power Connection:</strong> Connect motor to appropriate
              Brain port
            </li>
            <li>
              <strong>Control Programming:</strong> Write code to control the
              catapult system
            </li>
            <li>
              <strong>Balance Check:</strong> Ensure robot remains stable with
              catapult mounted
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
            <li>Ensure catapult doesn't interfere with other robot systems</li>
            <li>Check that robot can still move and operate normally</li>
            <li>
              Verify all wiring is secure and won't get caught in moving parts
            </li>
            <li>Test that catapult can be operated while robot is moving</li>
            <li>Ensure safety measures are in place for operation</li>
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
        Instructor Check-in: Final Performance
      </h4>
      <div className="bg-white p-4 rounded-lg border border-yellow-200">
        <p className="text-sm text-gray-700 mb-2">
          <strong>What to test:</strong> Verify each student's completed
          catapult system meets all performance requirements.
        </p>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>Test launch consistency and accuracy over multiple attempts</li>
          <li>Verify power control and ability to adjust launch force</li>
          <li>Check system reliability and smooth operation</li>
          <li>
            Ensure proper integration with robot doesn't cause interference
          </li>
          <li>Confirm students can explain their design and tuning process</li>
        </ul>
      </div>
    </div>

    {/* Homework Section */}
    <div className="bg-gradient-to-br from-white via-cyan-50 to-cyan-100 border-l-4 border-cyan-500 p-6 rounded-lg shadow-xl mb-8">
      <h3 className="text-xl font-bold text-cyan-700 mb-3">Homework</h3>
      <div className="space-y-3 text-cyan-700">
        <p>
          <strong>1. Complete Your Catapult System:</strong>
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Finish building and integrating your complete catapult system</li>
          <li>Test and tune for optimal performance</li>
          <li>Make any necessary adjustments for consistency and accuracy</li>
          <li>Take photos and videos of your system in action</li>
        </ul>
        <p>
          <strong>2. Update your Engineering Notebook:</strong>
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Document your complete building and integration process</li>
          <li>Include photos of your final catapult system</li>
          <li>Record test results and performance data</li>
          <li>Note any challenges faced and solutions implemented</li>
          <li>Document tuning parameters and their effects</li>
        </ul>
        <p>
          <strong>3. Finalize Your CAD Model:</strong>
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Update your CAD model to reflect the final built system</li>
          <li>Ensure all modifications are documented</li>
          <li>Create final assembly drawings and documentation</li>
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
          Submit Final System
        </a>
      </div>
    </div>
  </>
);

export default Lesson5;
