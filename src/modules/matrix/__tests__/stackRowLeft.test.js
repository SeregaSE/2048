import { LEFT } from '../constants';
import hard from './fixtures/simple';
import simple from './fixtures/simple';
import rotate from '../operations/rotate';
import stack from '../operations/stackRowLeft';

const expactations = [
    [
        {
            id: 1,
            value: 2,
            position: {
                x: 0,
                y: 0,
            },
        },
        {
            id: 2,
            value: 0,
            position: {
                x: 1,
                y: 0,
            },
        },
        {
            id: 3,
            value: 0,
            position: {
                x: 2,
                y: 0,
            },
        },
        {
            id: 4,
            value: 0,
            position: {
                x: 3,
                y: 0,
            },
        },
    ],
    [
        {
            id: 5,
            value: 0,
            position: {
                x: 0,
                y: 1,
            },
        },
        {
            id: 6,
            value: 0,
            position: {
                x: 1,
                y: 1,
            },
        },
        {
            id: 7,
            value: 0,
            position: {
                x: 2,
                y: 1,
            },
        },
        {
            id: 8,
            value: 0,
            position: {
                x: 3,
                y: 1,
            },
        },
    ],
    [
        {
            id: 9,
            value: 0,
            position: {
                x: 0,
                y: 2,
            },
        },
        {
            id: 10,
            value: 0,
            position: {
                x: 1,
                y: 2,
            },
        },
        {
            id: 11,
            value: 0,
            position: {
                x: 2,
                y: 2,
            },
        },
        {
            id: 12,
            value: 0,
            position: {
                x: 3,
                y: 2,
            },
        },
    ],
    [
        {
            id: 13,
            value: 2,
            position: {
                x: 0,
                y: 3,
            },
        },
        {
            id: 14,
            value: 0,
            position: {
                x: 1,
                y: 3,
            },
        },
        {
            id: 15,
            value: 0,
            position: {
                x: 2,
                y: 3,
            },
        },
        {
            id: 16,
            value: 0,
            position: {
                x: 3,
                y: 3,
            },
        },
    ],
];

test('stack row left: simple tests', () => {
    simple.map(row => )
    expect(stack([0, 0, 0, 0])).toEqual([0, 0, 0, 0]);
    expect(stack([0, 0, 2, 0])).toEqual([2, 0, 0, 0]);
    expect(stack([4, 0, 2, 0])).toEqual([4, 2, 0, 0]);
    expect(stack([2, 8, 4, 2])).toEqual([2, 8, 4, 2]);
    expect(stack([4, 0, 4, 0])).toEqual([8, 0, 0, 0]);
    expect(stack([2, 2, 2, 2])).toEqual([4, 4, 0, 0]);
    expect(stack([2, 2, 4, 4])).toEqual([4, 8, 0, 0]);
});
