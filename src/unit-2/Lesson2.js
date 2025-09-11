import React from "react";
import PDFViewer from "../components/PDFViewer";

const Lesson2 = () => (
  <>
    <p className="text-white text-lg mb-8">
      In this lesson, you'll build your drivetrain using your CAD model as a
      reference. Integrate your chosen gear ratio and use the checklist below to
      ensure your build is complete.
    </p>
    <div className="bg-cyan-50 border-l-4 border-cyan-400 p-6 rounded-lg shadow mb-8">
      <h3 className="text-xl font-bold text-cyan-700 mb-2">
        Objectives & Checklist
      </h3>
      <PDFViewer
        src="/pdfs/drivetrain%20objectives%20%26%20checklist.pdf#zoom=100&pagemode=none"
        title="Objectives & Checklist PDF"
      />
    </div>
  </>
);

export default Lesson2;
