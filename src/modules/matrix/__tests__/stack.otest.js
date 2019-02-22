import stack from '../operations/stack';
import { LEFT, RIGHT } from '../constants';

test('stack: left', () => {
    expect(stack([0, 0, 0, 0], LEFT)).toEqual([0, 0, 0, 0]);
    expect(stack([0, 0, 2, 0], LEFT)).toEqual([2, 0, 0, 0]);
    expect(stack([4, 0, 2, 0], LEFT)).toEqual([4, 2, 0, 0]);
    expect(stack([2, 8, 4, 2], LEFT)).toEqual([2, 8, 4, 2]);
    expect(stack([4, 0, 4, 0], LEFT)).toEqual([8, 0, 0, 0]);
    expect(stack([2, 2, 2, 2], LEFT)).toEqual([4, 4, 0, 0]);
    expect(stack([2, 2, 4, 4], LEFT)).toEqual([4, 8, 0, 0]);
});

test('stack: right', () => {
    expect(stack([0, 0, 0, 0], RIGHT)).toEqual([0, 0, 0, 0]);
    expect(stack([0, 0, 2, 0], RIGHT)).toEqual([0, 0, 0, 2]);
    expect(stack([4, 0, 2, 0], RIGHT)).toEqual([0, 0, 4, 2]);
    expect(stack([2, 8, 4, 2], RIGHT)).toEqual([2, 8, 4, 2]);
    expect(stack([4, 0, 4, 0], RIGHT)).toEqual([0, 0, 0, 8]);
    expect(stack([2, 2, 4, 4], RIGHT)).toEqual([0, 0, 4, 8]);
});
