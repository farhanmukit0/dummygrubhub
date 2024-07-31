import React from 'react';

const ModifierCategory = ({ modifier }) => {
  return (
    <div>
      <h5>{modifier.name}</h5>
      {modifier.modifiers.map(mod => (
        <div key={mod.external_id}>
          <p>{mod.name}</p>
          <p>Description: {mod.description}</p>
          <p>Price Adjustment: ${mod.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}

export default ModifierCategory;
