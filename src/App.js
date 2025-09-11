import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import logo from "./imgs/sidebar/tb_logo.png";
import onshapeLogo from "./imgs/sidebar/onshape_logo.png";
import docsLogo from "./imgs/sidebar/docs_logo.png";
import vexiqLogo from "./imgs/sidebar/vex_logo.png";
import unit1_img from "./imgs/units/unit1_img.jpg";
import unit2_img from "./imgs/units/unit2_img.jpg";

import LearningGoals from "./unit-1/LearningGoals";
import Lesson1 from "./unit-1/Lesson1";
import Lesson2 from "./unit-1/Lesson2";
import Practice from "./unit-1/Practice";
import Sidebar from "./components/Sidebar";
import LessonPageLayout from "./components/LessonPageLayout";
import Unit2LearningGoals from "./unit-2/LearningGoals";
import Unit2Lesson1 from "./unit-2/Lesson1";
import Unit2Lesson2 from "./unit-2/Lesson2";
import Unit2Lesson3 from "./unit-2/Lesson3";
import Unit2Lesson4 from "./unit-2/Lesson4";
import Unit2Lesson5 from "./unit-2/Lesson5";

// Unit 3 imports
import Unit3LearningGoals from "./unit-3/LearningGoals";
import Unit3Lesson1 from "./unit-3/Lesson1";
import Unit3Lesson2 from "./unit-3/Lesson2";

// Unit 4 imports
import Unit4LearningGoals from "./unit-4/LearningGoals";
import Unit4Lesson1 from "./unit-4/Lesson1";
import Unit4Lesson2 from "./unit-4/Lesson2";

// Unit 5 imports
import Unit5LearningGoals from "./unit-5/LearningGoals";
import Unit5Lesson1 from "./unit-5/Lesson1";
import Unit5Lesson2 from "./unit-5/Lesson2";

// Unit 6 imports
import Unit6LearningGoals from "./unit-6/LearningGoals";
import Unit6Lesson1 from "./unit-6/Lesson1";
import Unit6Lesson2 from "./unit-6/Lesson2";
import Unit6Lesson3 from "./unit-6/Lesson3";
import Unit6Lesson4 from "./unit-6/Lesson4";
import Unit6Lesson5 from "./unit-6/Lesson5";

// Unit 7 imports
import Unit7LearningGoals from "./unit-7/LearningGoals";
import Unit7Lesson1 from "./unit-7/Lesson1";
import Unit7Lesson2 from "./unit-7/Lesson2";
import Unit7Lesson3 from "./unit-7/Lesson3";

const classroomLogo =
  "https://upload.wikimedia.org/wikipedia/commons/5/59/Google_Classroom_Logo.png";

const HomePage = ({ units }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 leading-tight mb-4">
          <span className="text-red-600">VEX IQ</span> Course Curriculum
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-6">
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
              <a
                href={unit.link}
                className="inline-block px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
              >
                View Lesson
              </a>
            </div>
            <div className="mt-6 md:mt-0 md:ml-12">
              <img
                src={unit.image}
                alt={unit.title}
                className="rounded-lg object-contain w-60 h-100 bg-white p-2 transform transition-transform duration-300 ease-in-out group-hover:scale-105"
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
  const [isUnitsOpen, setIsUnitsOpen] = useState(true);

  const units = [
    {
      title: "1 - Intro",
      link: "/unit-1",
      description:
        "Kickstart your robotics journey by meeting the robot you'll eventually build and mastering the tools that will guide you along the way. Learn how to navigate the course structure, manage assignments on Google Classroom, and organize your ideas using your engineering Notebook. Get hands-on with essential VEX IQ parts — beams, pins, wheels, and electronics — and dive into the world of CAD by setting up your Onshape account and creating your first designs.",
      image: unit1_img,
    },
    {
      title: "2 - Drivetrain, Coding, PID",
      link: "/unit-2",
      description:
        "Start building and coding your drivetrain! Explore gear ratios and drivetrain designs by CAD-ing and physically building it. Dive into coding fundamentals with VEXcode IQ — from simple movements to advanced control loops — and tackle real challenges. Enhance precision with Gyro sensors and learn the basics of PID control to make your robot move smarter. By the end of this unit, you'll have a fully functional drivetrain and an engineering Notebook full of gear calculations, CAD models, and coding insights.",
      image: unit2_img,
    },
    {
      title: "3 - Sensors",
      link: "/unit-3",
      description:
        "Kickstart your robotics journey by meeting the robot you'll eventually build and mastering the tools that will guide you along the way. Learn how to navigate the course structure, manage assignments on Google Classroom, and organize your ideas using your engineering Notebook. Get hands-on with essential VEX IQ parts — beams, pins, wheels, and electronics — and dive into the world of CAD by setting up your Onshape account and creating your first designs.",
      image: unit1_img,
    },
    {
      title: "4 - Claw",
      link: "/unit-4",
      description:
        "Kickstart your robotics journey by meeting the robot you'll eventually build and mastering the tools that will guide you along the way. Learn how to navigate the course structure, manage assignments on Google Classroom, and organize your ideas using your engineering Notebook. Get hands-on with essential VEX IQ parts — beams, pins, wheels, and electronics — and dive into the world of CAD by setting up your Onshape account and creating your first designs.",
      image: unit1_img,
    },
    {
      title: "5 - Intake Roller",
      link: "/unit-5",
      description:
        "Kickstart your robotics journey by meeting the robot you'll eventually build and mastering the tools that will guide you along the way. Learn how to navigate the course structure, manage assignments on Google Classroom, and organize your ideas using your engineering Notebook. Get hands-on with essential VEX IQ parts — beams, pins, wheels, and electronics — and dive into the world of CAD by setting up your Onshape account and creating your first designs.",
      image: unit1_img,
    },
    {
      title: "6 - Catapult",
      link: "/unit-6",
      description:
        "Kickstart your robotics journey by meeting the robot you'll eventually build and mastering the tools that will guide you along the way. Learn how to navigate the course structure, manage assignments on Google Classroom, and organize your ideas using your engineering Notebook. Get hands-on with essential VEX IQ parts — beams, pins, wheels, and electronics — and dive into the world of CAD by setting up your Onshape account and creating your first designs.",
      image: unit1_img,
    },
    {
      title: "7 - Final: The Competition Robot",
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

  // Sidebar props to pass to lesson pages
  const sidebarProps = {
    logo,
    units,
    sidebarLinks,
    isUnitsOpen,
    setIsUnitsOpen,
    isQuickLinksOpen,
    setIsQuickLinksOpen,
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="h-screen flex">
              <Sidebar {...sidebarProps} />
              <main className="flex-1 bg-gray-50 p-10 overflow-y-auto">
                <HomePage units={units} />
              </main>
            </div>
          }
        />
        <Route
          path="/unit-1"
          element={
            <LessonPageLayout
              {...sidebarProps}
              title="Unit 1 Overview"
              prevLink={null}
              nextLink="/unit-1/lesson-1"
            >
              <LearningGoals />
            </LessonPageLayout>
          }
        />
        <Route
          path="/unit-1/lesson-1"
          element={
            <LessonPageLayout
              {...sidebarProps}
              title="Lesson 1: Introduction to VEX IQ Parts"
              prevLink="/unit-1"
              nextLink="/unit-1/lesson-2"
            >
              <Lesson1 />
            </LessonPageLayout>
          }
        />
        <Route
          path="/unit-1/lesson-2"
          element={
            <LessonPageLayout
              {...sidebarProps}
              title="Lesson 2: Intro to Onshape"
              prevLink="/unit-1/lesson-1"
              nextLink="/unit-1/practice"
            >
              <Lesson2 />
            </LessonPageLayout>
          }
        />
        <Route
          path="/unit-1/practice"
          element={
            <LessonPageLayout
              {...sidebarProps}
              title="Practice"
              prevLink="/unit-1/lesson-2"
              nextLink={null}
            >
              <Practice />
            </LessonPageLayout>
          }
        />
        <Route
          path="/unit-2"
          element={
            <LessonPageLayout
              {...sidebarProps}
              title="Unit 2 Overview"
              prevLink={null}
              nextLink="/unit-2/lesson-1"
            >
              <Unit2LearningGoals />
            </LessonPageLayout>
          }
        />
        <Route
          path="/unit-2/lesson-1"
          element={
            <LessonPageLayout
              {...sidebarProps}
              title="Lesson 1: Intro to Drivetrain"
              prevLink="/unit-2"
              nextLink="/unit-2/lesson-2"
            >
              <Unit2Lesson1 />
            </LessonPageLayout>
          }
        />
        <Route
          path="/unit-2/lesson-2"
          element={
            <LessonPageLayout
              {...sidebarProps}
              title="Lesson 2: Building the Drivetrain"
              prevLink="/unit-2/lesson-1"
              nextLink="/unit-2/lesson-3"
            >
              <Unit2Lesson2 />
            </LessonPageLayout>
          }
        />
        <Route
          path="/unit-2/lesson-3"
          element={
            <LessonPageLayout
              {...sidebarProps}
              title="Lesson 3: Coding the Drivetrain"
              prevLink="/unit-2/lesson-2"
              nextLink="/unit-2/lesson-4"
            >
              <Unit2Lesson3 />
            </LessonPageLayout>
          }
        />
        <Route
          path="/unit-2/lesson-4"
          element={
            <LessonPageLayout
              {...sidebarProps}
              title="Lesson 4: Gyro Sensors"
              prevLink="/unit-2/lesson-3"
              nextLink="/unit-2/lesson-5"
            >
              <Unit2Lesson4 />
            </LessonPageLayout>
          }
        />
        <Route
          path="/unit-2/lesson-5"
          element={
            <LessonPageLayout
              {...sidebarProps}
              title="Lesson 5: PID"
              prevLink="/unit-2/lesson-4"
              nextLink={null}
            >
              <Unit2Lesson5 />
            </LessonPageLayout>
          }
        />
        {/* Unit 3 Routes */}
        <Route
          path="/unit-3"
          element={
            <LessonPageLayout
              {...sidebarProps}
              title="Unit 3 Overview"
              prevLink={null}
              nextLink="/unit-3/lesson-1"
            >
              <Unit3LearningGoals />
            </LessonPageLayout>
          }
        />
        <Route
          path="/unit-3/lesson-1"
          element={
            <LessonPageLayout
              {...sidebarProps}
              title="Lesson 1: Distance Sensor & Bumper Switch"
              prevLink="/unit-3"
              nextLink="/unit-3/lesson-2"
            >
              <Unit3Lesson1 />
            </LessonPageLayout>
          }
        />
        <Route
          path="/unit-3/lesson-2"
          element={
            <LessonPageLayout
              {...sidebarProps}
              title="Lesson 2: Touch LED Sensor & Optical Sensor"
              prevLink="/unit-3/lesson-1"
              nextLink={null}
            >
              <Unit3Lesson2 />
            </LessonPageLayout>
          }
        />
        {/* Unit 4 Routes */}
        <Route
          path="/unit-4"
          element={
            <LessonPageLayout
              {...sidebarProps}
              title="Unit 4 Overview"
              prevLink={null}
              nextLink="/unit-4/lesson-1"
            >
              <Unit4LearningGoals />
            </LessonPageLayout>
          }
        />
        <Route
          path="/unit-4/lesson-1"
          element={
            <LessonPageLayout
              {...sidebarProps}
              title="Lesson 1: Intro to Claw"
              prevLink="/unit-4"
              nextLink="/unit-4/lesson-2"
            >
              <Unit4Lesson1 />
            </LessonPageLayout>
          }
        />
        <Route
          path="/unit-4/lesson-2"
          element={
            <LessonPageLayout
              {...sidebarProps}
              title="Lesson 2: Build the Claw"
              prevLink="/unit-4/lesson-1"
              nextLink={null}
            >
              <Unit4Lesson2 />
            </LessonPageLayout>
          }
        />
        {/* Unit 5 Routes */}
        <Route
          path="/unit-5"
          element={
            <LessonPageLayout
              {...sidebarProps}
              title="Unit 5 Overview"
              prevLink={null}
              nextLink="/unit-5/lesson-1"
            >
              <Unit5LearningGoals />
            </LessonPageLayout>
          }
        />
        <Route
          path="/unit-5/lesson-1"
          element={
            <LessonPageLayout
              {...sidebarProps}
              title="Lesson 1: Intro to Intake Roller"
              prevLink="/unit-5"
              nextLink="/unit-5/lesson-2"
            >
              <Unit5Lesson1 />
            </LessonPageLayout>
          }
        />
        <Route
          path="/unit-5/lesson-2"
          element={
            <LessonPageLayout
              {...sidebarProps}
              title="Lesson 2: Building Intake Roller"
              prevLink="/unit-5/lesson-1"
              nextLink={null}
            >
              <Unit5Lesson2 />
            </LessonPageLayout>
          }
        />
        {/* Unit 6 Routes */}
        <Route
          path="/unit-6"
          element={
            <LessonPageLayout
              {...sidebarProps}
              title="Unit 6 Overview"
              prevLink={null}
              nextLink="/unit-6/lesson-1"
            >
              <Unit6LearningGoals />
            </LessonPageLayout>
          }
        />
        <Route
          path="/unit-6/lesson-1"
          element={
            <LessonPageLayout
              {...sidebarProps}
              title="Lesson 1: Intro to Catapult"
              prevLink="/unit-6"
              nextLink="/unit-6/lesson-2"
            >
              <Unit6Lesson1 />
            </LessonPageLayout>
          }
        />
        <Route
          path="/unit-6/lesson-2"
          element={
            <LessonPageLayout
              {...sidebarProps}
              title="Lesson 2: Catapult Arm"
              prevLink="/unit-6/lesson-1"
              nextLink="/unit-6/lesson-3"
            >
              <Unit6Lesson2 />
            </LessonPageLayout>
          }
        />
        <Route
          path="/unit-6/lesson-3"
          element={
            <LessonPageLayout
              {...sidebarProps}
              title="Lesson 3: Ratchet Motor"
              prevLink="/unit-6/lesson-2"
              nextLink="/unit-6/lesson-4"
            >
              <Unit6Lesson3 />
            </LessonPageLayout>
          }
        />
        <Route
          path="/unit-6/lesson-4"
          element={
            <LessonPageLayout
              {...sidebarProps}
              title="Lesson 4: Combining Parts"
              prevLink="/unit-6/lesson-3"
              nextLink="/unit-6/lesson-5"
            >
              <Unit6Lesson4 />
            </LessonPageLayout>
          }
        />
        <Route
          path="/unit-6/lesson-5"
          element={
            <LessonPageLayout
              {...sidebarProps}
              title="Lesson 5: Building It All"
              prevLink="/unit-6/lesson-4"
              nextLink={null}
            >
              <Unit6Lesson5 />
            </LessonPageLayout>
          }
        />
        {/* More routes as needed */}
        {/* Unit 7 Routes */}
        <Route
          path="/unit-7"
          element={
            <LessonPageLayout
              {...sidebarProps}
              title="Unit 7 Overview"
              prevLink={null}
              nextLink="/unit-7/lesson-1"
            >
              <Unit7LearningGoals />
            </LessonPageLayout>
          }
        />
        <Route
          path="/unit-7/lesson-1"
          element={
            <LessonPageLayout
              {...sidebarProps}
              title="Lesson 1: CAD, Build, and Test Final Robot"
              prevLink="/unit-7"
              nextLink="/unit-7/lesson-2"
            >
              <Unit7Lesson1 />
            </LessonPageLayout>
          }
        />
        <Route
          path="/unit-7/lesson-2"
          element={
            <LessonPageLayout
              {...sidebarProps}
              title="Lesson 2: Programming"
              prevLink="/unit-7/lesson-1"
              nextLink="/unit-7/lesson-3"
            >
              <Unit7Lesson2 />
            </LessonPageLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
