import React from "react";

const Lesson1 = () => (
  <>
    {/* Exciting intro above video */}
    <div className="mb-6">
      <h2 className="text-2xl text-white mb-2">
        Design Your Robot's "Cannon"!
      </h2>
      <p className="text-base text-white">
        Learn about catapult mechanics and energy principles. Your robot will
        soon be able to launch objects with precision and power!
      </p>
    </div>

    {/* Removed Rick Astley video */}

    <p className="text-white leading-relaxed mb-6">
      In this lesson, you'll explore the fundamental principles of catapult
      mechanics and energy conversion. You'll learn how potential energy is
      stored and converted to kinetic energy for launching objects with
      controlled power and accuracy.
    </p>

    {/* Catapult Mechanics Section */}
    <div className="flex flex-col items-center mb-12">
      <div className="w-full max-w-4xl bg-white border-l-4 border-cyan-500 rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold text-cyan-700 mb-6 flex items-center gap-2">
          <span role="img" aria-label="catapult">
            ⚡
          </span>
          Catapult Mechanics
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-6">
          <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-200">
            <h3 className="text-lg font-semibold text-cyan-800 mb-3">
              Energy Storage
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Potential energy stored in elastic materials</li>
              <li>Mechanical energy stored in wound mechanisms</li>
              <li>Energy proportional to displacement squared</li>
              <li>Must be controlled for safe release</li>
            </ul>
          </div>
          <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-200">
            <h3 className="text-lg font-semibold text-cyan-800 mb-3">
              Energy Release
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Controlled conversion to kinetic energy</li>
              <li>Release mechanism must be reliable</li>
              <li>Power output depends on energy stored</li>
              <li>Consistency is key for accuracy</li>
            </ul>
          </div>
        </div>

        <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-200 mb-6">
          <h3 className="text-lg font-semibold text-cyan-800 mb-3">
            Key Components
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Catapult Arm:</strong> Lever that stores and releases
              energy
            </li>
            <li>
              <strong>Ratchet Motor:</strong> Winds the mechanism and controls
              release
            </li>
            <li>
              <strong>Release Mechanism:</strong> Triggers the launch at the
              right moment
            </li>
            <li>
              <strong>Energy Storage:</strong> Elastic bands, springs, or wound
              mechanisms
            </li>
            <li>
              <strong>Launch Platform:</strong> Guides the projectile for
              accuracy
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Design Considerations Section */}
    <div className="flex flex-col items-center mb-12">
      <div className="w-full max-w-4xl bg-white border-l-4 border-green-500 rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold text-green-700 mb-6 flex items-center gap-2">
          <span role="img" aria-label="design">
            🎯
          </span>
          Design Considerations
        </h2>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Performance Factors:
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Power Control:</strong> Must be able to adjust launch
              force for different distances
            </li>
            <li>
              <strong>Accuracy:</strong> Consistent release mechanism for
              repeatable results
            </li>
            <li>
              <strong>Reliability:</strong> Must work consistently under
              competition pressure
            </li>
            <li>
              <strong>Safety:</strong> Controlled release to prevent damage to
              robot or field
            </li>
            <li>
              <strong>Integration:</strong> Must fit with existing robot systems
            </li>
          </ul>
        </div>

        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
          <h4 className="text-base font-semibold text-green-700 mb-2">
            Design Challenges:
          </h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Balancing power with control</li>
            <li>Creating reliable release mechanisms</li>
            <li>Managing recoil forces</li>
            <li>Ensuring consistent performance</li>
            <li>Integrating with robot's power systems</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Objectives and Checklist Section */}
    <div className="flex flex-col items-center mb-12">
      <div className="w-full max-w-4xl bg-white border-l-4 border-blue-500 rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 flex items-center gap-2">
          <span role="img" aria-label="checklist">
            📋
          </span>
          Objectives and Checklist
        </h2>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Learning Objectives:
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Understand catapult mechanics and energy conversion principles
            </li>
            <li>
              Learn about different catapult designs and their applications
            </li>
            <li>
              Develop skills in designing energy storage and release systems
            </li>
            <li>Master safety considerations for high-energy mechanisms</li>
          </ul>
        </div>

        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <h4 className="text-base font-semibold text-blue-700 mb-2">
            Pre-Design Checklist:
          </h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Concept Development:</strong>
              <ul className="list-disc list-inside text-gray-700 mt-1">
                <li>Energy storage method chosen</li>
                <li>Release mechanism designed</li>
                <li>Power requirements calculated</li>
                <li>Safety measures planned</li>
              </ul>
            </div>
            <div>
              <strong>Integration Planning:</strong>
              <ul className="list-disc list-inside text-gray-700 mt-1">
                <li>Mounting location determined</li>
                <li>Power source identified</li>
                <li>Control system planned</li>
                <li>Space requirements calculated</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Instructor Check-in */}
    <div className="bg-gradient-to-br from-yellow-50 to-orange-100 border-l-4 border-yellow-500 p-6 rounded-lg shadow-lg mb-8">
      <h4 className="text-lg font-bold text-yellow-800 mb-4 flex items-center gap-2">
        <span role="img" aria-label="teacher">
          👨‍🏫
        </span>
        Instructor Check-in: Catapult Concepts
      </h4>
      <div className="bg-white p-4 rounded-lg border border-yellow-200">
        <p className="text-sm text-gray-700 mb-2">
          <strong>What to verify:</strong> Ensure students understand catapult
          mechanics and energy principles.
        </p>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>Check understanding of energy storage and release concepts</li>
          <li>Verify comprehension of safety considerations</li>
          <li>Review design brainstorming and concept development</li>
          <li>Ensure students can explain their design approach</li>
          <li>Confirm understanding of integration requirements</li>
        </ul>
      </div>
    </div>

    {/* Homework Section */}
    <div className="bg-gradient-to-br from-white via-cyan-50 to-cyan-100 border-l-4 border-cyan-500 p-6 rounded-lg shadow-xl mb-8">
      <h3 className="text-xl font-bold text-cyan-700 mb-3">Homework</h3>
      <div className="space-y-3 text-cyan-700">
        <p>
          <strong>1. Research and Brainstorm:</strong>
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Research different catapult designs and their applications</li>
          <li>Brainstorm your own catapult design concepts</li>
          <li>Consider energy storage methods and release mechanisms</li>
          <li>Think about integration with your existing robot</li>
        </ul>
        <p>
          <strong>2. Update your Engineering Notebook:</strong>
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Document what you learned about catapult mechanics</li>
          <li>Include sketches of your design ideas</li>
          <li>Explain your energy storage and release approach</li>
          <li>Note any safety considerations you've identified</li>
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
          Submit Design Ideas
        </a>
      </div>
    </div>
  </>
);

export default Lesson1;
