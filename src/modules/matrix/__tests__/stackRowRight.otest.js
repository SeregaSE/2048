import stack from '../operations/stackRowRight';

test('stack row right', () => {
    expect(stack([0, 0, 0, 0])).toEqual([0, 0, 0, 0]);
    expect(stack([0, 0, 2, 0])).toEqual([0, 0, 0, 2]);
    expect(stack([4, 0, 2, 0])).toEqual([0, 0, 4, 2]);
    expect(stack([2, 8, 4, 2])).toEqual([2, 8, 4, 2]);
    expect(stack([4, 0, 4, 0])).toEqual([0, 0, 0, 8]);
    expect(stack([2, 2, 2, 2])).toEqual([0, 0, 4, 4]);
    expect(stack([2, 2, 4, 4])).toEqual([0, 0, 4, 8]);
});
