import stackRow from './stackRow';

const stack = (matrix, direction) => matrix.map(row => stackRow(row, direction));

export default stack;
