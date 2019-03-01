export default [
    /**
     * IDS           # VALUES
     * 0 | 0 | 1 | 0 # 0 | 0 | 2 | 0
     * 0 | 0 | 0 | 0 # 0 | 0 | 0 | 0
     * 2 | 0 | 0 | 0 # 4 | 0 | 0 | 0
     * 0 | 0 | 0 | 0 # 0 | 0 | 0 | 0
     * */
    [
        'simple case',
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
                y: 2,
            },
        ],
    ],
    /**
     * IDS           # VALUES
     * 3 | 0 | 0 | 0 # 2 | 0 | 0 | 0
     * 0 | 0 | 0 | 2 # 0 | 0 | 0 | 2
     * 1 | 4 | 0 | 0 # 2 | 2 | 0 | 0
     * 0 | 7 | 5 | 6 # 0 | 2 | 2 | 2
     * */
    [
        'hard case',
        [
            {
                id: 3,
                value: 2,
                x: 0,
                y: 0,
            },
            {
                id: 2,
                value: 2,
                x: 3,
                y: 1,
            },
            {
                id: 4,
                value: 2,
                x: 1,
                y: 2,
            },
            {
                id: 1,
                value: 2,
                x: 0,
                y: 2,
            },
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
