import React from 'react';
import SkillBlock from './SkillBlock';
import './Skill.css';

const Skill = () => {
  return (
    <div className="skills-container section-container">
      <h2>Skills</h2>
      <div className="skill-block-container">
        <SkillBlock
          title="Programming Languages"
          skills={[
            { name: "C++", level: 50 },
            { name: "Python", level: 40 },
            { name: "Java", level: 30 },
            { name: "Golang", level: 20 },
            { name: "C#", level: 10 },
            { name: "SQL", level: 100 },
            { name: "Javascript", level: 100 },
            { name: "Typescript", level: 100 },
            { name: "PHP", level: 100 }
          ]}
        />

        <SkillBlock
          title="Frameworks"
          skills={[
            { name: "React.js", level: 50 },
            { name: "Vue.js", level: 40 },
            { name: "Express.js", level: 30 },
            { name: "Next.js", level: 20 },
            { name: "Laravel", level: 10 },
            { name: "Gin", level: 100 },
            { name: "Pytorch", level: 100 },
            { name: "Node.js", level: 100 },
            { name: "React Native", level: 100 },
          ]}
          color="#f7b801"
        />

        <SkillBlock
          title="Database & Tools"
          skills={[
            { name: "Git", level: 50 },
            { name: "Docker", level: 40 },
            { name: "MySql", level: 30 },
            { name: "PostgreSQL", level: 20 },
            { name: "MSSQL", level: 10 },
          ]}
          color="#f50"
        />

        <SkillBlock
          title="Languages"
          skills={[
            { name: "English", level: 70 },
            { name: "Chinese", level: 100 },
          ]}
          // purple
          color="#a0a"
        />
      </div>
    </div>
  );
}

export default Skill;
