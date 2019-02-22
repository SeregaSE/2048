import React from 'react';
import Value, { Text } from './Styled';
import pure from '../../../../hocs/pure';

const Number = ({
    x,
    y,
    width,
    value,
}) => (
    <Value
        x={x}
        y={y}
        width={width}
        value={value}
    >
        <Text width={width} value={value}>{value}</Text>
    </Value>
);

export default pure(Number);
