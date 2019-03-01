import getOrderAxis from './getOrderAxis';

describe('get order axis by direction', () => {
    test('top', () => {
        expect(getOrderAxis('TOP')).toEqual('y');
    });

    test('left', () => {
        expect(getOrderAxis('LEFT')).toEqual('x');
    });

    test('right', () => {
        expect(getOrderAxis('RIGHT')).toEqual('x');
    });

    test('bottom', () => {
        expect(getOrderAxis('BOTTOM')).toEqual('y');
    });
});
