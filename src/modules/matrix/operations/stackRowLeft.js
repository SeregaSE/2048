/* eslint-disable */
export default row => row.reduce((acc, current, x) => {
    if (acc.length) {
        const stacked = [];

        return acc.reduceRight((left, item, i) => {
            return [
                ...left,
                item,
            ]
        }, [])
    }

    return [
        ...acc,
        current,
    ]
}, []);

// {
//     for (let y = 0; y < matrix.length; y += 1) {
//         const stacked = [];

//         for (let x = 1; x < row.length; x++) {
//             if (row[x] === 0) {
//                 continue
//             }
            
//             for (let n = x - 1; n >= 0; n--) {
//                 if (!stacked.some(s => s === n) && row[n + 1] === row[n]) {
//                     row[n] += row[n + 1];
//                     row[n + 1] = 0;
//                     stacked.push(n);
//                     continue
//                 }
    
//                 if (row[n] === 0) {
//                     row[n] = row[n + 1];
//                     row[n + 1] = 0;
//                 }
//             }
//         }
//     }
// };
