// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined) {
        return [];
    } else {
        let towelArr = [];
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 !== 0) {
                towelArr.push(matrix[i].reverse());
            } else {
                towelArr.push(matrix[i]);
            }
        }
        return towelArr.flat();
    }
};
