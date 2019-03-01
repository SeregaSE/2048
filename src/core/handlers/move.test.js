import move from './move';
import fixtures from '../tests/fixtures';

const toTopExpects = [
    // simple case
    [
        {
            id: 1,
            value: 2,
            x: 2,
            y: 0,
        },
        {
            id: 2,
            value: 4,
            x: 0,
            y: 0,
        },
    ],
    // hard case
    [
        {
            id: 1,
            value: 2,
            x: 0,
            y: 0,
            stacked: true,
        },
        {
            id: 2,
            value: 4,
            x: 3,
            y: 0,
        },
        {
            id: 3,
            value: 4,
            x: 0,
            y: 0,
        },
        {
            id: 4,
            value: 4,
            x: 1,
            y: 0,
        },
        {
            id: 5,
            value: 2,
            x: 2,
            y: 0,
        },
        {
            id: 6,
            value: 2,
            x: 3,
            y: 0,
            stacked: true,
        },
        {
            id: 7,
            value: 2,
            x: 1,
            y: 0,
            stacked: true,
        },
    ],
];

const toLeftExpects = [
    // simple case
    [
        {
            id: 1,
            value: 2,
            x: 0,
            y: 0,
        },
        {
            id: 2,
            value: 4,
            x: 0,
            y: 2,
        },
    ],
    // hard case
    [
        {
            id: 1,
            value: 4,
            x: 0,
            y: 2,
        },
        {
            id: 2,
            value: 2,
            x: 0,
            y: 1,
        },
        {
            id: 3,
            value: 2,
            x: 0,
            y: 0,
        },
        {
            id: 4,
            value: 2,
            x: 0,
            y: 2,
            stacked: true,
        },
        {
            id: 5,
            value: 2,
            x: 0,
            y: 3,
            stacked: true,
        },
        {
            id: 6,
            value: 2,
            x: 1,
            y: 3,
        },
        {
            id: 7,
            value: 4,
            x: 0,
            y: 3,
        },
    ],
];

const toRightExpects = [
    // simple case
    [
        {
            id: 1,
            value: 2,
            x: 3,
            y: 0,
        },
        {
            id: 2,
            value: 4,
            x: 3,
            y: 2,
        },
    ],
    // hard case
    [
        {
            id: 1,
            value: 2,
            x: 3,
            y: 2,
            stacked: true,
        },
        {
            id: 2,
            value: 2,
            x: 3,
            y: 1,
        },
        {
            id: 3,
            value: 2,
            x: 3,
            y: 0,
        },
        {
            id: 4,
            value: 4,
            x: 3,
            y: 2,
        },
        {
            id: 5,
            value: 2,
            x: 3,
            y: 3,
            stacked: true,
        },
        {
            id: 6,
            value: 4,
            x: 3,
            y: 3,
        },
        {
            id: 7,
            value: 2,
            x: 2,
            y: 3,
        },
    ],
];

const toBottomExpects = [
    // simple case
    [
        {
            id: 1,
            value: 2,
            x: 2,
            y: 3,
        },
        {
            id: 2,
            value: 4,
            x: 0,
            y: 3,
        },
    ],
    // hard case
    [
        {
            id: 1,
            value: 4,
            x: 0,
            y: 3,
        },
        {
            id: 2,
            value: 2,
            x: 3,
            y: 3,
            stacked: true,
        },
        {
            id: 3,
            value: 2,
            x: 0,
            y: 3,
            stacked: true,
        },
        {
            id: 4,
            value: 2,
            x: 1,
            y: 3,
            stacked: true,
        },
        {
            id: 5,
            value: 2,
            x: 2,
            y: 3,
        },
        {
            id: 6,
            value: 4,
            x: 3,
            y: 3,
        },
        {
            id: 7,
            value: 4,
            x: 1,
            y: 3,
        },
    ],
];

describe('move', () => {
    fixtures.forEach((fixture, i) => {
        test(`${fixture[0]} to top`, () => {
            expect(move(fixture[1], 'TOP', 4)).toEqual(toTopExpects[i]);
        });

        test(`${fixture[0]} to left`, () => {
            expect(move(fixture[1], 'LEFT', 4)).toEqual(toLeftExpects[i]);
        });

        test(`${fixture[0]} to right`, () => {
            expect(move(fixture[1], 'RIGHT', 4)).toEqual(toRightExpects[i]);
        });

        test(`${fixture[0]} to bottom`, () => {
            expect(move(fixture[1], 'BOTTOM', 4)).toEqual(toBottomExpects[i]);
        });
    });
});
