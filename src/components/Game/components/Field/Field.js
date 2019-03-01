import React from 'react';
import { Wrapper, Content } from './Styled';
import Value from '../Value';
import Position from '../Position';

const Field = ({ size, positions, numbers }) => {
    const width = 100 / size;

    return (
        <Wrapper>
            <Content>
                {positions.map(({ x, y }) => (
                    <Position
                        key={`${x}${y}`}
                        width={width}
                    />
                ))}
                {numbers.map(n => (
                    <Value
                        x={n.x}
                        y={n.y}
                        key={n.id}
                        width={width}
                        value={n.value}
                    />
                ))}
            </Content>
        </Wrapper>
    );
};

export default Field;
