import React from 'react';

const Modifier = ({ modifier }) => {
    return (
        <div>
            <h4>{modifier.name}</h4>
            {modifier.modifiers.map((mod, index) => (
                <div key={index}>
                    <p>{mod.name} - {mod.price ? `$${mod.price}` : 'Free'}</p>
                    <p>{mod.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Modifier;
