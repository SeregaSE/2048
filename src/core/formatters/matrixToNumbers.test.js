import matrixToNumbers from './matrixToNumbers';

describe('transform matrix to number', () => {
    test('simple matrix', () => {
        expect(matrixToNumbers([
            [
                {
                    id: 3,
                    value: 2,
                    x: 2,
                    y: 0,
                },
            ],
            [],
            [],
            [],
        ])).toEqual([
            {
                id: 3,
                value: 2,
                x: 2,
                y: 0,
            },
        ]);
    });

    test('hard matrix', () => {
        expect(matrixToNumbers([
            [
                {
                    id: 1,
                    value: 2,
                    x: 2,
                    y: 0,
                },
                {
                    id: 2,
                    value: 2,
                    x: 3,
                    y: 0,
                },
            ],
            [],
            [
                {
                    id: 5,
                    value: 2,
                    x: 2,
                    y: 2,
                },
                {
                    id: 4,
                    value: 4,
                    x: 3,
                    y: 2,
                },
            ],
            [
                {
                    id: 3,
                    value: 8,
                    x: 1,
                    y: 3,
                },
            ],
        ])).toEqual([
            {
                id: 1,
                value: 2,
                x: 2,
                y: 0,
            },
            {
                id: 2,
                value: 2,
                x: 3,
                y: 0,
            },
            {
                id: 3,
                value: 8,
                x: 1,
                y: 3,
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
                x: 2,
                y: 2,
            },
        ]);
    });
});
