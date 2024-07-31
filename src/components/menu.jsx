// import React from 'react';
// import Category from './category';

// const Menu = ({ menuData }) => {
//     return (
//         <div>
//             <h1>Restaurant Menu</h1>
//             {menuData.map((category, index) => (
//                 <Category key={index} category={category} />
//             ))}
//         </div>
//     );
// };

// export default Menu;

// import React from 'react';
// import Section from './section';

// const Menu = ({ menuData }) => {
//     const { tax_rates, schedules, sections } = menuData;

//     return (
//         <div>
//             <h1>Restaurant Menu</h1>
//             {sections && sections.map((section, index) => (
//                 <Section key={index} section={section} taxRates={tax_rates} />
//             ))}
//         </div>
//     );
// };

// export default Menu;


import React from 'react';
import Schedule from './schedule';

const Menu = ({ menuData }) => {
  return (
    <div>
      <h1>Menu</h1>
      {menuData.schedules.map(schedule => (
        <Schedule key={schedule.external_id} schedule={schedule} />
      ))}
    </div>
  );
}

export default Menu;
