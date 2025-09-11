import React from "react";

const Lesson2 = () => (
  <>
    {/* Exciting intro above video */}
    <div className="mb-6">
      <h2 className="text-2xl text-white mb-2">
        Add Color and Light Detection!
      </h2>
      <p className="text-base text-white">
        Learn how Touch LED sensors provide visual feedback and optical sensors
        detect light and color. Your robot will become more interactive and
        responsive!
      </p>
    </div>

    {/* Removed Rick Astley video */}

    <p className="text-white leading-relaxed mb-6">
      In this lesson, you'll explore two advanced sensors: the Touch LED that
      combines touch detection with colorful visual feedback, and the Optical
      sensor that can detect light levels and colors. These sensors add
      sophisticated interaction capabilities to your robot.
    </p>

    {/* Touch LED Sensor Section */}
    <div className="flex flex-col items-center mb-12">
      <div className="w-full max-w-4xl bg-white border-l-4 border-purple-500 rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold text-purple-700 mb-6 flex items-center gap-2">
          <span role="img" aria-label="light">
            💡
          </span>
          Touch LED Sensor
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-lg font-semibold text-black mb-3">
              What it does:
            </h3>
            <ul className="list-disc list-inside text-black space-y-2">
              <li>Detects when someone touches it</li>
              <li>Displays different colors (red, green, blue, etc.)</li>
              <li>Can change color based on programming</li>
              <li>Perfect for user interaction and status indicators</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black mb-3">
              How to connect:
            </h3>
            <ul className="list-disc list-inside text-black space-y-2">
              <li>Connect to any digital port on the Brain</li>
              <li>Add as "Touch LED" in VEXcode IQ</li>
              <li>Set the port number to match your connection</li>
              <li>Test both touch detection and color display</li>
            </ul>
          </div>
        </div>

        <div className="bg-purple-50 rounded-lg p-4 border border-purple-100 mb-6">
          <h4 className="text-base font-semibold text-purple-700 mb-2">
            Key Programming Blocks:
          </h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong className="text-black">Touch LED &gt; Pressed</strong>
              <p className="text-black">Returns true when touched</p>
            </div>
            <div>
              <strong className="text-black">Touch LED &gt; Set Color</strong>
              <p className="text-black">Changes the LED color</p>
            </div>
            <div>
              <strong className="text-black">
                Touch LED &gt; Set Brightness
              </strong>
              <p className="text-black">Controls LED brightness (0-100%)</p>
            </div>
            <div>
              <strong className="text-black">Touch LED &gt; Turn Off</strong>
              <p className="text-black">Turns the LED off</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Optical Sensor Section */}
    <div className="flex flex-col items-center mb-12">
      <div className="w-full max-w-4xl bg-white border-l-4 border-indigo-500 rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold text-indigo-700 mb-6 flex items-center gap-2">
          <span role="img" aria-label="eye">
            👁️
          </span>
          Optical Sensor
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-lg font-semibold text-black mb-3">
              What it does:
            </h3>
            <ul className="list-disc list-inside text-black space-y-2">
              <li>Detects light intensity (brightness)</li>
              <li>Can distinguish between different colors</li>
              <li>Measures reflected light from surfaces</li>
              <li>Perfect for line following and color detection</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black mb-3">
              How to connect:
            </h3>
            <ul className="list-disc list-inside text-black space-y-2">
              <li>Connect to any digital port on the Brain</li>
              <li>Add as "Optical Sensor" in VEXcode IQ</li>
              <li>Set the port number to match your connection</li>
              <li>Calibrate for your lighting conditions</li>
            </ul>
          </div>
        </div>

        <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-100 mb-6">
          <h4 className="text-base font-semibold text-indigo-700 mb-2">
            Key Programming Blocks:
          </h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong className="text-black">
                Optical Sensor &gt; Brightness
              </strong>
              <p className="text-black">Returns light level (0-100%)</p>
            </div>
            <div>
              <strong className="text-black">Optical Sensor &gt; Color</strong>
              <p className="text-black">Returns detected color</p>
            </div>
            <div>
              <strong className="text-black">
                Optical Sensor &gt; Is Color
              </strong>
              <p className="text-black">Checks if specific color detected</p>
            </div>
            <div>
              <strong className="text-black">
                Optical Sensor &gt; Calibrate
              </strong>
              <p className="text-black">
                Calibrates sensor for current lighting
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Exercises Section */}
    <div className="bg-gradient-to-br from-green-50 to-emerald-100 border-l-4 border-green-500 p-6 rounded-lg shadow-lg mb-8">
      <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
        Coding Exercises
      </h3>
      <div className="space-y-6">
        <div className="bg-white p-4 rounded-lg border border-green-200">
          <h4 className="font-semibold text-green-800 mb-2">
            Exercise 1: Touch LED
          </h4>
          <p className="text-black mb-2">
            Make the Touch LED change color each time it's pressed. Cycle
            through red, green, blue, and off.
          </p>
          <p className="text-gray-600 italic">
            <strong>Hint:</strong> Use a variable to track the current color
            state and increment it on each press.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg border border-green-200">
          <h4 className="font-semibold text-green-800 mb-2">
            Exercise 2: Optical Sensing
          </h4>
          <p className="text-black mb-2">
            Create a robot that drives on light surfaces and stops or adjusts
            direction on dark surfaces.
          </p>
          <p className="text-gray-600 italic">
            <strong>Hint:</strong> Use the optical sensor's brightness reading
            to determine surface type.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg border border-green-200">
          <h4 className="font-semibold text-green-800 mb-2">
            Exercise 3: Color-Responsive Robot
          </h4>
          <p className="text-black mb-2">
            Make the Touch LED change color to match what the optical sensor
            detects.
          </p>
          <p className="text-sm text-gray-600 italic">
            <strong>Hint:</strong> Use "If" statements to check the optical
            sensor's color reading and set the Touch LED accordingly.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg border border-green-200">
          <h4 className="font-semibold text-green-800 mb-2">
            Challenge: Autonomous Start System
          </h4>
          <p className="text-black mb-2">
            Create a system where the robot waits until the Touch LED is
            pressed, then starts its autonomous routine. Use the optical sensor
            to detect a finish line (dark surface) and stop.
          </p>
          <p className="text-sm text-gray-600 italic">
            <strong>Hint:</strong> Combine "Wait Until" blocks with the Touch
            LED and optical sensor for a complete autonomous sequence.
          </p>
        </div>
      </div>
    </div>

    {/* Instructor Check-in */}
    <div className="bg-gradient-to-br from-yellow-50 to-orange-100 border-l-4 border-yellow-500 p-6 rounded-lg shadow-lg mb-8">
      <h4 className="text-lg font-bold text-yellow-800 mb-4 flex items-center gap-2">
        Instructor Check-in: Light Navigation
      </h4>
      <div className="bg-white p-4 rounded-lg border border-yellow-200">
        <p className="text-sm text-gray-800 mb-2">
          <strong>What to verify:</strong> Test each student's light-based
          navigation system and color detection capabilities.
        </p>
        <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
          <li>
            Confirm Touch LED responds correctly to touch and color changes
          </li>
          <li>
            Verify optical sensor can distinguish between light and dark
            surfaces
          </li>
          <li>Test color detection accuracy with different colored objects</li>
          <li>Ensure students can explain how their navigation logic works</li>
        </ul>
      </div>
    </div>

    {/* Homework Section */}
    <div className="bg-gradient-to-br from-white via-cyan-50 to-cyan-100 border-l-4 border-cyan-500 p-6 rounded-lg shadow-xl mb-8">
      <h3 className="text-xl font-bold text-cyan-700 mb-3">Homework</h3>
      <div className="space-y-3 text-cyan-700">
        <p>
          <strong>1. Update your Engineering Notebook:</strong>
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Document what you learned about Touch LED and optical sensors</li>
          <li>Include screenshots of your working code</li>
          <li>Explain how light-based navigation works</li>
          <li>
            Note any challenges with sensor calibration or color detection
          </li>
        </ul>
        <p>
          <strong>2. Submit your code on Google Classroom:</strong>
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Upload screenshots of your completed exercises</li>
          <li>Include a brief explanation of your programming logic</li>
          <li>Document any creative solutions you developed</li>
        </ul>
      </div>
    </div>
  </>
);

export default Lesson2;
