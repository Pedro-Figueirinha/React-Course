import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
const skillsArray = [
  {
    skill: "PVMer",
    level: "intermediate",
    color: "#4da607",
  },
  {
    skill: "Completionist",
    level: "beginner",
    color: "#FF3B00",
  },
  {
    skill: "Master Quester",
    level: "beginner",
    color: "#60DAFB",
  },
  {
    skill: "Bank Standing",
    level: "advanced",
    color: "#54038f",
  },
];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  return (
    <div className="card">
      <Avatar name="./avatar-photo.jpg" />
      <div className="data">
        <Intro pname="Pedro Figueirinha" pdesc="Olá Sou o Pedro!" />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(prop) {
  return <img className="avatar" src={prop.name} alt="" />;
}

function Intro(prop) {
  return (
    <div>
      <h1>{prop.pname}</h1>
      <p>{prop.pdesc}</p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      {skillsArray.map((skill) => (
        <Skill skill={skill} key={skill.skill} />
      ))}
    </div>
  );
}
function Skill({ skill }) {
  let emoji = "";
  const level = skill.level;
  console.log(emoji);
  return (
    <h3 className="skill" style={{ backgroundColor: skill.color }}>
      {skill.skill}
      {level === "beginner" && "😅"}
      {level === "intermediate" && "😁"}
      {level === "advanced" && "😎"}
    </h3>
  );
}
