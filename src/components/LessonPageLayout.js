import React from "react";
import { Link, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";

const LessonPageLayout = ({
  title,
  children,
  prevLink,
  nextLink,
  logo,
  units,
  sidebarLinks,
  isUnitsOpen,
  setIsUnitsOpen,
  isQuickLinksOpen,
  setIsQuickLinksOpen,
}) => {
  const location = useLocation();

  // Determine current unit number from URL
  const match = location.pathname.match(/unit-(\d+)/);
  const unitNumber = match ? parseInt(match[1], 10) : null;

  // Build lessons array for the current unit (mimic Sidebar.js logic)
  let lessons = [];
  if (unitNumber) {
    if (unitNumber === 1) {
      lessons = [
        { name: "Learning Goals", link: `/unit-1` },
        { name: "Lesson 1", link: `/unit-1/lesson-1` },
        { name: "Lesson 2", link: `/unit-1/lesson-2` },
        { name: "Practice", link: `/unit-1/practice` },
      ];
    } else if (unitNumber === 2) {
      lessons = [
        { name: "Learning Goals", link: `/unit-2` },
        { name: "Lesson 1", link: `/unit-2/lesson-1` },
        { name: "Lesson 2", link: `/unit-2/lesson-2` },
        { name: "Lesson 3", link: `/unit-2/lesson-3` },
        { name: "Lesson 4", link: `/unit-2/lesson-4` },
        { name: "Lesson 5", link: `/unit-2/lesson-5` },
      ];
    } else {
      lessons = [
        { name: "Learning Goals", link: `/unit-${unitNumber}` },
        { name: "Lesson 1", link: `/unit-${unitNumber}/lesson-1` },
        { name: "Lesson 2", link: `/unit-${unitNumber}/lesson-2` },
      ];
    }
  }

  const practicePDFs = [
    {
      title: "Exercise 1: Assemble Two VEX IQ Beams",
      url: "https://agate-diploma-268.notion.site/Exercise-1-Assemble-Two-VEX-IQ-Beams-6683925746394433b77592d37267c7a6?pvs=143",
    },
    {
      title: "Practice 2: Onshape Navigation",
      url: "/pdfs/unit1-practice-2.pdf",
    },
    {
      title: "Practice 3: Build & Label",
      url: "/pdfs/unit1-practice-3.pdf",
    },
  ];

  return (
    <div className="h-screen flex bg-cyan overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        logo={logo}
        units={units}
        sidebarLinks={sidebarLinks}
        isUnitsOpen={isUnitsOpen}
        setIsUnitsOpen={setIsUnitsOpen}
        isQuickLinksOpen={isQuickLinksOpen}
        setIsQuickLinksOpen={setIsQuickLinksOpen}
      />
      {/* Main Area */}
      <div className="flex-1 flex flex-col items-center justify-start min-h-0 overflow-hidden relative">
        {/* Floating Side Navigation Buttons - On background, outside main card */}
        {prevLink && (
          <Link
            to={prevLink}
            className="fixed z-40 flex items-center justify-center w-20 h-20 bg-[#1e293b] text-white rounded-full shadow-2xl hover:scale-110 hover:brightness-110 transition-all duration-200 focus:outline-none"
            style={{
              left: "calc(50% - 32rem)", // 40rem = 640px (max-w-5xl), 2.5rem = 40px (button + margin)
              top: "50%",
              transform: "translateY(-50%)",
            }}
            aria-label="Previous"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </Link>
        )}
        {nextLink && (
          <Link
            to={nextLink}
            className="fixed z-40 flex items-center justify-center w-20 h-20 bg-[#1e293b] text-white rounded-full shadow-2xl hover:scale-110 hover:brightness-110 transition-all duration-200 focus:outline-none"
            style={{
              right: "calc(50% - 48rem )",
              top: "50%",
              transform: "translateY(-50%)",
            }}
            aria-label="Next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        )}
        {/* Main Card */}
        <div
          className="w-full max-w-5xl bg-[#101a2b] text-white shadow-2xl mt-10 mb-8 flex flex-col min-h-[80vh] relative"
          style={{
            clipPath: "polygon(0 0, 98% 0, 100% 8%, 100% 100%, 2% 100%, 0 92%)",
          }}
        >
          {/* Header */}
          <header
            className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 px-10 py-8 bg-gradient-to-r from-[#0a0f1c] to-[#1a2a4f] border-b-2 border-cyan-500"
            style={{
              clipPath: "polygon(0 0, 98% 0, 100% 80%, 100% 100%, 0 100%)",
            }}
          >
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight mb-1 drop-shadow-sm text-white uppercase">
                {title}
              </h1>
            </div>
            <Link
              to="/"
              className="text-white bg-cyan-600 hover:bg-cyan-400 transition-colors duration-200 flex items-center gap-2 px-6 py-2 rounded-md font-bold shadow border border-cyan-400 uppercase tracking-wider"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Home
            </Link>
          </header>
          {/* Tab Bar */}
          <nav className="flex gap-2 px-10 pt-6 pb-2 border-b border-cyan-800">
            {lessons.map((lesson) => (
              <Link
                key={lesson.link}
                to={lesson.link}
                className={`px-5 py-2 rounded-md font-bold transition text-white bg-[#181f3a] border border-cyan-700 hover:bg-cyan-700 hover:text-black tracking-wide uppercase shadow-sm ${
                  location.pathname === lesson.link
                    ? "bg-cyan-500 text-black border-cyan-300 shadow-md"
                    : ""
                }`}
              >
                {lesson.name}
              </Link>
            ))}
          </nav>
          {/* Content */}
          <main className="flex-1 flex justify-center items-start overflow-y-auto px-10 py-8">
            <div className="w-full">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default LessonPageLayout;
