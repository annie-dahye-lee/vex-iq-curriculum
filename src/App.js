import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import logo from "./imgs/sidebar/tb_logo.png";
import onshapeLogo from "./imgs/sidebar/onshape_logo.png";
import docsLogo from "./imgs/sidebar/docs_logo.png";
import vexiqLogo from "./imgs/sidebar/vex_logo.png";
import unit1_img from "./imgs/units/unit1_img.jpg";

import Unit_1 from "./unit1/Unit_1";

const classroomLogo =
  "https://upload.wikimedia.org/wikipedia/commons/5/59/Google_Classroom_Logo.png";

// HomePage component
const HomePage = ({ units }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <header className="mb-12 text-center">
        <h1 className="text-4xl sm:text-4xl font-extrabold text-gray-800 leading-tight mb-4">
          <span className="text-red-600">VEX IQ</span> Course Curriculum
        </h1>
        <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto mb-6">
          Click on each unit to start learning
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-red-500 via-red-400 to-red-600 mx-auto rounded-full"></div>
      </header>

      <div className="flex flex-col space-y-8 pb-20">
        {units.map((unit, index) => (
          <div
            key={index}
            className="group flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md hover:shadow-lg hover:shadow-red-200 p-6 transition"
          >
            <div className="max-w-[1200px]">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-red-600 transition">
                {unit.title}
              </h2>
              <p className="text-gray-600 mb-6 max-w-[950px]">
                {unit.description}
              </p>
              <Link
                to={unit.link}
                className="inline-block px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
              >
                View Lesson
              </Link>
            </div>
            <div className="mt-6 md:mt-0 md:ml-12">
              <img
                src={unit.image}
                alt={unit.title}
                className="rounded-lg object-cover w-60 h-60 transform transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function App() {
  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(true);

  const units = [
    {
      title: "Unit 1: Welcome to the Course!",
      link: "/unit-1",
      description:
        "Kickstart your robotics journey by meeting the robot you'll eventually build and mastering the tools that will guide you along the way. Learn how to navigate the course structure, manage assignments on Google Classroom, and organize your ideas using your engineering Notebook. Get hands-on with essential VEX IQ parts — beams, pins, wheels, and electronics — and dive into the world of CAD by setting up your Onshape account and creating your first designs.",
      image: unit1_img,
    },
    {
      title: "Unit 2: Drivetrain, Coding, and PID",
      link: "/unit-2",
      description:
        "Start building and coding your drivetrain! Explore gear ratios and drivetrain designs by CAD-ing and physically building it. Dive into coding fundamentals with VEXcode IQ — from simple movements to advanced control loops — and tackle real challenges. Enhance precision with Gyro sensors and learn the basics of PID control to make your robot move smarter. By the end of this unit, you'll have a fully functional drivetrain and an engineering Notebook full of gear calculations, CAD models, and coding insights.",
      image: unit1_img,
    },
    {
      title: "Unit 3: Sensors",
      link: "/unit-3",
      description:
        "Kickstart your robotics journey by meeting the robot you'll eventually build and mastering the tools that will guide you along the way. Learn how to navigate the course structure, manage assignments on Google Classroom, and organize your ideas using your engineering Notebook. Get hands-on with essential VEX IQ parts — beams, pins, wheels, and electronics — and dive into the world of CAD by setting up your Onshape account and creating your first designs.",
      image: unit1_img,
    },
    {
      title: "Unit 4: The Claw",
      link: "/unit-4",
      description:
        "Kickstart your robotics journey by meeting the robot you'll eventually build and mastering the tools that will guide you along the way. Learn how to navigate the course structure, manage assignments on Google Classroom, and organize your ideas using your engineering Notebook. Get hands-on with essential VEX IQ parts — beams, pins, wheels, and electronics — and dive into the world of CAD by setting up your Onshape account and creating your first designs.",
      image: unit1_img,
    },
    {
      title: "Unit 5: The Intake Roller",
      link: "/unit-5",
      description:
        "Kickstart your robotics journey by meeting the robot you'll eventually build and mastering the tools that will guide you along the way. Learn how to navigate the course structure, manage assignments on Google Classroom, and organize your ideas using your engineering Notebook. Get hands-on with essential VEX IQ parts — beams, pins, wheels, and electronics — and dive into the world of CAD by setting up your Onshape account and creating your first designs.",
      image: unit1_img,
    },
    {
      title: "Unit 6: The Catapult",
      link: "/unit-6",
      description:
        "Kickstart your robotics journey by meeting the robot you'll eventually build and mastering the tools that will guide you along the way. Learn how to navigate the course structure, manage assignments on Google Classroom, and organize your ideas using your engineering Notebook. Get hands-on with essential VEX IQ parts — beams, pins, wheels, and electronics — and dive into the world of CAD by setting up your Onshape account and creating your first designs.",
      image: unit1_img,
    },
    {
      title: "FINAL: The Competition Robot",
      link: "/final",
      description:
        "Kickstart your robotics journey by meeting the robot you'll eventually build and mastering the tools that will guide you along the way. Learn how to navigate the course structure, manage assignments on Google Classroom, and organize your ideas using your engineering Notebook. Get hands-on with essential VEX IQ parts — beams, pins, wheels, and electronics — and dive into the world of CAD by setting up your Onshape account and creating your first designs.",
      image: unit1_img,
    },
  ];

  const sidebarLinks = [
    { name: "Onshape", link: "https://www.onshape.com/", logo: onshapeLogo },
    {
      name: "Google Classroom",
      link: "https://classroom.google.com/",
      logo: classroomLogo,
    },
    { name: "Google Docs", link: "https://docs.google.com/", logo: docsLogo },
    {
      name: "VEX IQ",
      link: "https://www.vexrobotics.com/iq/competition/viqc-current-game",
      logo: vexiqLogo,
    },
  ];

  return (
    <Router>
      <div>
        {/* Sidebar */}
        <aside className="fixed top-0 left-0 h-full w-44 bg-gray-900 text-white flex flex-col">
          {/* Logo Section */}
          <div className="flex flex-col items-center justify-center bg-gradient-to-b from-red-600 to-gray-900 p-4 border-b border-gray-700">
            <img
              src={logo}
              alt="Techblazers Logo"
              className="h-12 w-12 object-contain mb-2"
            />
            <span className="text-base font-bold tracking-wide">
              TECHBLAZERS
            </span>
          </div>

          {/* Quick Links Dropdown */}
          <div className="mt-8">
            <button
              onClick={() => setIsQuickLinksOpen(!isQuickLinksOpen)}
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-400 px-4 pb-2 focus:outline-none"
            >
              <span>Quick Links</span>
              <span>{isQuickLinksOpen ? "▲" : "▼"}</span>
            </button>

            {/* Navigation */}
            {isQuickLinksOpen && (
              <nav className="flex flex-col px-2 space-y-4 mt-2">
                {sidebarLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 hover:bg-gray-700 px-2 py-3 rounded-md transition ${
                      item.name === "VEX IQ" ? "ml-2" : ""
                    }`}
                  >
                    <img
                      src={item.logo}
                      alt={item.name}
                      className={`object-contain ${
                        item.name === "VEX IQ" ? "h-10 w-10" : "h-8 w-8"
                      }`}
                    />
                    <span className="text-sm">{item.name}</span>
                  </a>
                ))}
              </nav>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <main className="ml-44 h-screen overflow-y-auto bg-gray-50 p-10">
          <Routes>
            <Route path="/" element={<HomePage units={units} />} />
            <Route path="/unit-1" element={<Unit_1 />} />
            {/* Add more Routes for unit-2, unit-3, etc. */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
