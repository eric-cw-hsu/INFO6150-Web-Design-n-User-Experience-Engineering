import React from 'react';
import './WorkExperience.css';
import Banner from '../Banner/Banner';

const WorkExperience = () => {
  return (
    <div className="work-experience section-container">
      <div className="work-experience__header">
        <h2 className="work-experience__h2">Work Experience</h2>

        <Banner bannerComponents={[
          (<>Banner1</>), (<>Banner2</>), (<>Banner3</>)
        ]} />
      </div>
    </div>
  );
}

export default WorkExperience;
