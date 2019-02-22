import move from '../operations/move';
import {
    TOP,
    LEFT,
    RIGHT,
    BOTTOM,
} from '../constants';
import hard from './fixtures/matrices/hard';
import simple from './fixtures/matrices/simple';

test('move top', () => {
    expect(move(
        simple,
        TOP,
    )).toEqual(
        [
            [4, 2, 2, 4],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ],
    );

    expect(move(
        [
            [4, 0, 2, 0],
            [2, 8, 4, 2],
            [0, 0, 4, 0],
            [2, 0, 4, 0],
        ],
        TOP,
    )).toEqual(
        [
            [4, 8, 2, 2],
            [4, 0, 4, 0],
            [0, 0, 8, 0],
            [0, 0, 0, 0],
        ],
    );
});

test('move left', () => {
    expect(move(
        [
            [0, 0, 2, 0],
            [0, 2, 0, 0],
            [0, 0, 0, 0],
            [4, 0, 0, 4],
        ],
        LEFT,
    )).toEqual(
        [
            [2, 0, 0, 0],
            [2, 0, 0, 0],
            [0, 0, 0, 0],
            [8, 0, 0, 0],
        ],
    );

    expect(move(
        [
            [4, 0, 2, 0],
            [2, 8, 4, 2],
            [0, 0, 0, 0],
            [2, 0, 4, 0],
        ],
        LEFT,
    )).toEqual(
        [
            [4, 2, 0, 0],
            [2, 8, 4, 2],
            [0, 0, 0, 0],
            [2, 4, 0, 0],
        ],
    );
});

test('move right', () => {
    expect(move(
        [
            [0, 0, 2, 0],
            [0, 2, 0, 0],
            [0, 0, 0, 0],
            [4, 0, 0, 4],
        ],
        RIGHT,
    )).toEqual(
        [
            [0, 0, 0, 2],
            [0, 0, 0, 2],
            [0, 0, 0, 0],
            [0, 0, 0, 8],
        ],
    );

    expect(move(
        [
            [4, 0, 2, 0],
            [2, 8, 4, 2],
            [0, 0, 0, 0],
            [2, 0, 4, 0],
        ],
        RIGHT,
    )).toEqual(
        [
            [0, 0, 4, 2],
            [2, 8, 4, 2],
            [0, 0, 0, 0],
            [0, 0, 2, 4],
        ],
    );
});


test('move bottom', () => {
    expect(move(
        [
            [0, 0, 2, 0],
            [0, 2, 0, 0],
            [0, 0, 0, 0],
            [4, 0, 0, 4],
        ],
        BOTTOM,
    )).toEqual(
        [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [4, 2, 2, 4],
        ],
    );

    expect(move(
        [
            [4, 0, 2, 0],
            [2, 8, 4, 2],
            [0, 0, 4, 0],
            [2, 0, 4, 0],
        ],
        BOTTOM,
    )).toEqual(
        [
            [0, 0, 0, 0],
            [0, 0, 2, 0],
            [4, 0, 4, 0],
            [4, 8, 8, 2],
        ],
    );
});
