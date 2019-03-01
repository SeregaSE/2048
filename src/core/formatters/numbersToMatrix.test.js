import numbersToMatrix from './numbersToMatrix';
import fixtures from '../tests/fixtures';

const toTopExpects = [
    // simple case
    [
        [
            {
                id: 2,
                value: 4,
                x: 0,
                y: 2,
            },
        ],
        [],
        [
            {
                id: 1,
                value: 2,
                x: 2,
                y: 0,
            },
        ],
        [],
    ],
    // hard case
    [
        [
            {
                id: 3,
                value: 2,
                x: 0,
                y: 0,
            },
            {
                id: 1,
                value: 2,
                x: 0,
                y: 2,
            },
        ],
        [
            {
                id: 4,
                value: 2,
                x: 1,
                y: 2,
            },
            {
                id: 7,
                value: 2,
                x: 1,
                y: 3,
            },
        ],
        [
            {
                id: 5,
                value: 2,
                x: 2,
                y: 3,
            },
        ],
        [
            {
                id: 2,
                value: 2,
                x: 3,
                y: 1,
            },
            {
                id: 6,
                value: 2,
                x: 3,
                y: 3,
            },
        ],
    ],
];

const toLeftExpects = [
    // simple case
    [
        [
            {
                id: 1,
                value: 2,
                x: 2,
                y: 0,
            },
        ],
        [],
        [
            {
                id: 2,
                value: 4,
                x: 0,
                y: 2,
            },
        ],
        [],
    ],
    // hard case
    [
        [
            {
                id: 3,
                value: 2,
                x: 0,
                y: 0,
            },
        ],
        [
            {
                id: 2,
                value: 2,
                x: 3,
                y: 1,
            },
        ],
        [
            {
                id: 1,
                value: 2,
                x: 0,
                y: 2,
            },
            {
                id: 4,
                value: 2,
                x: 1,
                y: 2,
            },
        ],
        [
            {
                id: 7,
                value: 2,
                x: 1,
                y: 3,
            },
            {
                id: 5,
                value: 2,
                x: 2,
                y: 3,
            },
            {
                id: 6,
                value: 2,
                x: 3,
                y: 3,
            },
        ],
    ],
];

describe('transform numbers to matrix', () => {
    fixtures.forEach((fixture, i) => {
        const input = fixture[1];

        test(`${fixture[0]} to top`, () => {
            expect(numbersToMatrix(input, 'TOP', 4)).toEqual(toTopExpects[i]);
        });

        test(`${fixture[0]} to left`, () => {
            expect(numbersToMatrix(input, 'LEFT', 4)).toEqual(toLeftExpects[i]);
        });
    });
});
