import React from "react";

const Lesson2 = () => (
  <>
    <div className="flex flex-col items-center mb-12">
      <div className="w-full max-w-4xl bg-white border-l-4 border-cyan-500 rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold text-cyan-700 mb-6">
          OnShape Tutorial
        </h2>
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <span role="img" aria-label="check">
              ✅
            </span>{" "}
            Before You Start
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-2 pl-4">
            <li>
              <span className="font-bold">Create an Onshape Account:</span> Go
              to{" "}
              <a
                href="https://www.onshape.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-700 underline"
              >
                onshape.com
              </a>{" "}
              and sign up for a free student account.
            </li>
            <li>
              <span className="font-bold">Get the VEX IQ Parts Library:</span>{" "}
              Ask your instructor to share the VEX IQ parts library with you on
              Onshape. <br />
              <span className="text-gray-500 text-sm">
                (This gives you access to all the parts you'll use.)
              </span>
            </li>
          </ul>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <span role="img" aria-label="tools">
              🛠️
            </span>{" "}
            What is Fasten Mate?
          </h3>
          <p className="mb-2 text-gray-700">
            <span className="font-bold">Fasten Mate</span> locks two parts
            together so they don't move. It's like gluing them in place — they
            rotate and move together.
          </p>
          <div className="flex flex-col items-center mb-2">
            <img
              src="/imgs/fasten-mate.png"
              alt="Fasten Mate Icon"
              className="h-21 w-25 mb-1"
            />
            <span className="text-gray-500 text-xs">
              (Find it in the Assembly toolbar)
            </span>
          </div>
          <p className="mb-2 text-gray-700">
            <span className="font-bold">Use it to:</span> attach beams, gears,
            motors, connectors, etc.
          </p>
          <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-100">
            <h4 className="text-base font-semibold text-cyan-700 mb-2">
              How it works:
            </h4>
            <ol className="list-decimal list-inside text-gray-700 space-y-1 pl-4">
              <li>
                Click <span className="font-bold">Fasten Mate</span>.
              </li>
              <li>
                Select a hole or face on{" "}
                <span className="font-bold">Part 1</span>.
              </li>
              <li>
                Select a matching hole or face on{" "}
                <span className="font-bold">Part 2</span>.
              </li>
              <li>Done! The parts snap together and stay fixed.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    {/* Homework Section */}
    <div className="bg-gradient-to-br from-white via-cyan-50 to-cyan-100 border-l-4 border-cyan-500 p-6 rounded-lg shadow-xl mb-8">
      <h4 className="text-lg font-bold text-cyan-700 mb-4 uppercase tracking-wide">
        Homework
      </h4>
      <ul className="list-disc list-inside text-gray-800 space-y-2 mb-4">
        <li>
          CAD your drivetrain using the 3D Building Instructions provided.
        </li>
        <li>
          Document your CAD process and results in your engineering notebook.
        </li>
      </ul>
      <a
        href="https://docs.google.com/presentation/your-google-slides-link"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-6 py-3 bg-cyan-700 hover:bg-cyan-500 text-white font-bold rounded-md transition uppercase tracking-wide shadow-lg border-2 border-cyan-400"
      >
        Open Notebook
      </a>
    </div>
  </>
);

export default Lesson2;
