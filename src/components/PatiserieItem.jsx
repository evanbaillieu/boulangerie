import React from 'react';

const Patiserieitem = ({item}) => {
    return (
        <div>
            <img src={item.image} alt={item.title}  />
            <p>{item.title}</p>
        </div>
    );
}

export default Patiserieitem;
