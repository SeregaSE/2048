import rotator from '../operations/rotator';

const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
];

test('rotator: left', () => {
    expect(rotator(matrix, 0, 0, 'LEFT')).toBe(4);
    expect(rotator(matrix, 3, 3, 'LEFT')).toBe(13);
});

test('rotator: right', () => {
    expect(rotator(matrix, 0, 3, 'RIGHT')).toBe(16);
    expect(rotator(matrix, 3, 0, 'RIGHT')).toBe(1);
});
