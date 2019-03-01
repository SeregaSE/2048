import React from 'react';
import Slots from '../Slots';
import { Wrapper, Content } from './Styled';
import Value from '../Value';

const Field = ({ size, slots, value }) => (
    <Wrapper>
        <Content>
            <Slots size={size} />
            {value.map(item => (
                <Value
                    x={item.x}
                    y={item.y}
                    width={100 / size}
                    value={item.value}
                    key={item.id}
                />
            ))}
        </Content>
    </Wrapper>
);

export default Field;
