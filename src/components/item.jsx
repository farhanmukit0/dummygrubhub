import React from 'react';
import ModifierCategory from './modifiercategory.jsx';

const Item = ({ item }) => {
  return (
    <div>
      <h4>{item.name}</h4>
      <p>{item.description}</p>
      <p>Calories: {item.calorie_content}</p>
      <p>Price: ${item.price.toFixed(2)}</p>
      {item.modifier_categories.map(modifier => (
        <ModifierCategory key={modifier.external_id} modifier={modifier} />
      ))}
    </div>
  );
}

export default Item;
