import React from 'react';
import './SkillBlock.css';
import ProgressBar from '../ProgressBar/ProgressBar';

const SkillBlock = ({
  title,
  skills,
  color = '#71adfc',
}) => {
  return (
    <div className='w-full skill-block'>
      <h3>{title}</h3>
      <ul className='skills--ul'>
        {skills.map((skill, index) => (
          <li key={index} className='skills--li'>
            <div className="skill-container">
              <p className="skill-name__p">{skill.name}</p>
              <div className="skill-level">
                <ProgressBar progressPercentage={skill.level} color={color} />
              </div>
            </div>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillBlock;
