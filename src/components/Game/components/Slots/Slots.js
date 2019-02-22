import React from 'react';
import Slot from '../Slot';

const Slots = ({ size }) => {
    const items = [];
    const width = 100 / size;

    for (let y = 0; y < size; y += 1) {
        for (let x = 0; x < size; x += 1) {
            items.push(<Slot key={`${x}${y}`} width={width} />);
        }
    }

    return items;
};

export default Slots;
