// import React from 'react';
// import MenuItem from './menuitem';

// const Category = ({ category }) => {
//     return (
//         <div>
//             <h2>{category.name}</h2>
//             {category.items.map((item, index) => (
//                 <MenuItem key={index} item={item} />
//             ))}
//         </div>
//     );
// };

// export default Category;

// import React from 'react';
// import MenuItem from './menuitem';

// const Section = ({ section, taxRates }) => {
//     return (
//         <div>
//             <h2>{section.name}</h2>
//             <p>{section.description}</p>
//             {section.items.map((item, index) => (
//                 <MenuItem key={index} item={item} taxRates={taxRates} />
//             ))}
//         </div>
//     );
// };

// export default Section;

import React from 'react';
import Item from './item';

const Section = ({ section }) => {
  return (
    <div>
      <h3>{section.name}</h3>
      {section.description && <p>{section.description}</p>}
      {section.items.map(item => (
        <Item key={item.external_id} item={item} />
      ))}
    </div>
  );
}

export default Section;

