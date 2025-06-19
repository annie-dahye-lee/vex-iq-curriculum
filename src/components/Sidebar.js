import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({
  logo,
  units,
  sidebarLinks,
  isUnitsOpen,
  setIsUnitsOpen,
  isQuickLinksOpen,
  setIsQuickLinksOpen,
}) => {
  const location = useLocation();
  // Local state for which unit's dropdown is open
  const [openUnits, setOpenUnits] = useState([]);

  // Updated lessons for each unit (custom names)
  const unitsWithLessons = units.map((unit, idx) => {
    const number = idx + 1;
    let lessons = [];
    if (number === 1) {
      lessons = [
        { name: "Learning Goals", link: `/unit-1` },
        { name: "Intro to Parts", link: `/unit-1/lesson-1` },
        { name: "Onshape Tutorial", link: `/unit-1/lesson-2` },
        { name: "Practice", link: `/unit-1/practice` },
      ];
    } else if (number === 2) {
      lessons = [
        { name: "Learning Goals", link: `/unit-2` },
        { name: "Intro to Drivetrain", link: `/unit-2/lesson-1` },
        { name: "Build", link: `/unit-2/lesson-2` },
      ];
    } else if (number === 3) {
      lessons = [
        { name: "Learning Goals", link: `/unit-3` },
        {
          name: "Distance Sensor & Bumper Switch",
          link: `/unit-3/lesson-1`,
        },
        {
          name: "Touch LED & Optical Sensor",
          link: `/unit-3/lesson-2`,
        },
      ];
    } else if (number === 4) {
      lessons = [
        { name: "Learning Goals", link: `/unit-4` },
        { name: "Intro to Claw", link: `/unit-4/lesson-1` },
        { name: "Build", link: `/unit-4/lesson-2` },
      ];
    } else if (number === 5) {
      lessons = [
        { name: "Learning Goals", link: `/unit-5` },
        { name: "Intro to Intake Roller", link: `/unit-5/lesson-1` },
        { name: "Build", link: `/unit-5/lesson-2` },
      ];
    } else if (number === 6) {
      lessons = [
        { name: "Learning Goals", link: `/unit-6` },
        { name: "Intro to Catapult", link: `/unit-6/lesson-1` },
        { name: "Catapult Arm", link: `/unit-6/lesson-2` },
        { name: "Ratchet Motor", link: `/unit-6/lesson-3` },
        { name: "Combining Parts", link: `/unit-6/lesson-4` },
        { name: "Final Build", link: `/unit-6/lesson-5` },
      ];
    } else {
      // Default: use first 2 lessons for other units
      lessons = [
        { name: "Learning Goals", link: `/unit-${number}` },
        { name: "1", link: `/unit-${number}/lesson-1` },
        { name: "2", link: `/unit-${number}/lesson-2` },
      ];
    }
    return { ...unit, number, lessons };
  });

  const handleUnitClick = (idx) => {
    setOpenUnits((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <aside className="w-64 bg-black text-white flex flex-col h-screen shadow-2xl relative z-10">
      <div
        className="flex flex-col items-center justify-center bg-gradient-to-b from-black via-red-700 to-black p-8 flex-shrink-0 shadow-lg relative"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 90%, 95% 100%, 0 100%)" }}
      >
        <Link to="/" className="flex flex-col items-center group">
          <img
            src={logo}
            alt="Techblazers Logo"
            className="h-16 w-16 object-contain mb-3 drop-shadow-[0_0_12px_rgba(239,68,68,0.5)] group-hover:scale-110 transition-transform duration-200"
          />
          <span className="text-xl font-bold tracking-wide text-white group-hover:text-red-200 transition-colors duration-200 drop-shadow">
            TECHBLAZERS
          </span>
        </Link>
      </div>
      <div className="flex-1 min-h-0 overflow-y-auto pb-6 px-2">
        {/* Units Dropdown */}
        <div className="mt-8">
          <button
            onClick={() => setIsUnitsOpen(!isUnitsOpen)}
            className="w-full flex items-center justify-between text-sm font-bold uppercase tracking-wider text-white bg-transparent hover:text-red-400 transition-all duration-200 py-3 px-4 rounded-xl mb-3 focus:outline-none sidebar-link-btn"
            style={{ border: "none" }}
          >
            <span>UNITS</span>
            <span className="transform transition-transform duration-200">
              {isUnitsOpen ? "▲" : "▼"}
            </span>
          </button>
          {isUnitsOpen && (
            <div className="mt-2 space-y-2 animate-fadeIn">
              {unitsWithLessons.map((unit, idx) => (
                <div key={unit.number} className="ml-2">
                  <button
                    className={`flex items-center w-full text-sm font-normal py-1.5 focus:outline-none whitespace-nowrap overflow-hidden text-ellipsis transition-all duration-200 rounded-lg px-2 mb-1 shadow-sm uppercase tracking-wide
                      ${
                        openUnits.includes(idx)
                          ? "bg-red-900/60 text-red-200 scale-[1.03] shadow-lg"
                          : "hover:bg-red-800/80 hover:text-red-200 text-white hover:scale-[1.03] hover:shadow-lg"
                      }
                    `}
                    onClick={() => handleUnitClick(idx)}
                    title={unit.title}
                    style={{ border: "none" }}
                  >
                    <span className="truncate">{unit.title}</span>
                    <span className="ml-2 text-xs">
                      {openUnits.includes(idx) ? "▲" : "▼"}
                    </span>
                  </button>
                  {openUnits.includes(idx) && (
                    <div className="ml-4 flex flex-col space-y-1 mt-1">
                      {unit.lessons.map((lesson) => (
                        <Link
                          key={lesson.link}
                          to={lesson.link}
                          className={`text-xs pl-2 py-1 rounded hover:text-red-300 transition-all font-semibold tracking-wide uppercase sidebar-link
                            ${
                              location.pathname === lesson.link
                                ? "font-bold text-red-400"
                                : "text-white"
                            }
                          `}
                          style={{ border: "none" }}
                        >
                          {lesson.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Divider */}
        <div className="my-6"></div>
        {/* Quick Links Dropdown */}
        <div>
          <button
            onClick={() => setIsQuickLinksOpen(!isQuickLinksOpen)}
            className="w-full flex items-center justify-between text-sm font-bold uppercase tracking-wider text-white bg-transparent hover:text-red-400 transition-all duration-200 py-3 px-4 rounded-xl mb-3 focus:outline-none sidebar-link-btn"
            style={{ border: "none" }}
          >
            <span>Quick Links</span>
            <span>{isQuickLinksOpen ? "▲" : "▼"}</span>
          </button>
          {isQuickLinksOpen && (
            <nav className="flex flex-col px-2 space-y-3 mt-2">
              {sidebarLinks.map((item) => (
                <a
                  key={item.link}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 px-2 py-3 transition-all hover:scale-105 sidebar-link"
                  style={{ border: "none" }}
                >
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="object-contain h-9 w-9"
                  />
                  <span className="text-base font-semibold text-red-100 tracking-wide uppercase hover:text-red-400 focus:text-red-400">
                    {item.name}
                  </span>
                </a>
              ))}
            </nav>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
