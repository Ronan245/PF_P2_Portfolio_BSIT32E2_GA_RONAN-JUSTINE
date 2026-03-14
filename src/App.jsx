import { useState, useEffect } from 'react';
import Profile from './components/Profile';
import Education from './components/Education';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const studentData = {
    personal: {
      name: "Ronan Justine D. Ga",
      section: "BSIT-32E2",
      course: "Bachelor of Science in Information Technology",
      id: "1585-23",
      image: "https://lh3.googleusercontent.com/a/ACg8ocLNi550mDV38nzHTOBb_IDohuZOveDxVKrC8KPevkKC9GKCFnCy=s360-c-no",
      email: "ronanjustinega44@gmail.com",
      github: "https://github.com/Ronan245",
      intro: `Hi! I'm Ronan, a passionate IT student, who is currently learning and specializing in developing web applications and object-oriented programms. I enjoy building interactive and data-driven applications that aims to solve real-world problems.`
    },
    education: [
      { level: "College", school: "Lyceum of Alabang", course: "BSIT", year: "2023-Present" },
      { level: "Elementary & High School", school: "Liceo De San Pedro", year: "2010-2022" },
      { level: "Kindergarten", school: "Sta. Cecilia's Kindergarten", year: "2006-2009" }
    ],
    skills: [
      "JavaScript / React",
      "HTML / CSS",
      "VB.NET / ASP.NET",
      "Database Management (MySQL, SQLite)",
      "Version Control (GitHub)"
    ],
    hobbies: [
      "Coding Personal Projects",
      "UI/UX Designing",
      "Learning Programming Languages",
      "Exploring New Technologies",
      "Watching Tech Tutorials"
    ],
    projects: [
      {
        name: "ASP.NET Web Authentication API",
        description: "An ASP.NET Web API that handles user authentication and authorization, allowing secure login and access control for web applications.",
        github: "https://github.com/Ronan245/MIDTERM_Q2_BSIT32E2_RONAN-JUSTINE_GA"
      },
      {
        name: "React Features App",
        description: "A React application demonstrating various React features such as components, state management, and interactive UI functionality.",
        github: "https://github.com/Ronan245/PF_A2_BSIT32E2_GA_RONAN-JUSTINE"
      },
      {
        name: "HTML/CSS Reflection Project",
        description: "A responsive website built with HTML and CSS showcasing reflections and structured content with a clean layout design.",
        github: "https://github.com/Ronan245/PRELIM_PROJECT_BONUS_BSIT32E2_RONAN-JUSTINE_GA"
      }
    ],
    achievements: [
      "Academic Excellence with Honors (2017-2018)",
      "Academic Achiever (2018-2019)",
      "Academic Excellence with Honors (2019-2020)",
      "Academic Excellence with Honors (2020-2021)",
      "Academic Excellence with High Honors (2021-2022)",
      "Dean's Lister (2024-2025)"
    ]
  };

  return (
    <div className={`app ${theme}`}>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? '🌙' : '☀️'}
      </button>

      <Profile personal={studentData.personal} />
      <Education education={studentData.education} />
      <Skills skills={studentData.skills} />
      <Hobbies hobbies={studentData.hobbies} />
      <Projects projects={studentData.projects} />
      <Achievements achievements={studentData.achievements} />
    </div>
  );
}

export default App;