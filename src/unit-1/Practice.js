import React from "react";

const exercises = [
  {
    title: "Exercise 1: Assemble Two Beams",
    instructions: [
      "Insert a 2x6 and 2x8 VEX IQ beam.",
      "Use Fasten Mate to connect them through one hole.",
      "Tip: Align their holes before applying the mate.",
    ],
    pdf: "../../pdfs/1.1.pdf#zoom=80&pagemode=none",
  },
  {
    title: "Exercise 2: Connect a Gear to a Shaft",
    instructions: [
      "Insert a 36-tooth gear and a shaft.",
      "Use Fasten Mate to attach the gear to the shaft.",
    ],
    guide: "🔗 Click for Guide",
    pdf: "../../pdfs/1.2.pdf#zoom=80&pagemode=none",
  },
  {
    title: "Exercise 3: Mount a Motor to a Beam",
    instructions: [
      "Insert a VEX IQ Motor and a beam.",
      "Use Fasten Mate to mount the motor onto the beam securely.",
    ],
    pdf: "../../pdfs/1.3.pdf#zoom=80&pagemode=none",
  },
  {
    title: "Exercise 4: Add Connector, Standoff, and Pin",
    instructions: [
      "Insert a connector, standoff, pin, and a beam.",
      "Use Fasten Mate to place the pin through the connector into the beam — like building in real life!",
    ],
    pdf: "../../pdfs/1.4.pdf#zoom=80&pagemode=none",
  },
];

const Practice = () => (
  <div className="flex flex-col items-center mt-8">
    <div className="w-full max-w-4xl bg-white border-l-4 border-cyan-500 rounded-lg shadow p-8 mb-8">
      <p className="text-gray-700 mb-8">
        Follow the exercises below to practice CAD-ing! Take your time
        understanding VEX IQ parts and basic Onshape functions.
      </p>
      <div className="flex flex-col gap-8">
        {exercises.map((ex, idx) => (
          <div
            key={idx}
            className="bg-cyan-50 rounded-lg p-6 shadow border border-cyan-100"
          >
            <h3 className="text-xl font-semibold text-cyan-700 mb-2">
              {ex.title}
            </h3>
            {ex.guide && (
              <div className="mb-2">
                <span className="text-cyan-700 font-bold">{ex.guide}</span>
              </div>
            )}
            <ul className="list-disc list-inside text-gray-800 mb-4 pl-4">
              {ex.instructions.map((inst, i) => (
                <li key={i}>{inst}</li>
              ))}
            </ul>
            {/* <iframe
              src={ex.pdf}
              title={ex.title}
              width="100%"
              height="500"
              style={{ border: "1px solid #ccc", borderRadius: "8px" }}
            ></iframe> */}
            <iframe
              className="w-full h-64 md:h-96 rounded-lg shadow-md"
              src={ex.pdf}
              frameBorder="0"
            ></iframe>
            <div className="text-xs text-gray-500 mt-2">
              If the PDF does not load,{" "}
              <a
                href={ex.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-cyan-700"
              >
                open it in a new tab
              </a>
              .
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Practice;
