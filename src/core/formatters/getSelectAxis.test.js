import getSelectAxis from './getSelectAxis';

describe('get select axis by direction', () => {
    test('top', () => {
        expect(getSelectAxis('TOP')).toEqual('x');
    });

    test('left', () => {
        expect(getSelectAxis('LEFT')).toEqual('y');
    });

    test('right', () => {
        expect(getSelectAxis('RIGHT')).toEqual('y');
    });

    test('bottom', () => {
        expect(getSelectAxis('BOTTOM')).toEqual('x');
    });
});
