export default matrix => matrix.reduce((numbers, row) => ([
    ...numbers,
    ...row,
])).sort((a, b) => a.id - b.id);
