import React from 'react';
import Section from './section';

const Schedule = ({ schedule }) => {
  return (
    <div>
      <h2>Schedule</h2>
      {schedule.sections.map(section => (
        <Section key={section.external_id} section={section} />
      ))}
    </div>
  );
}

export default Schedule;
