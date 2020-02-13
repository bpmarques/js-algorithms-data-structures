/**
 * K maximum sum combinations from two arrays
 *
 * @link https://www.geeksforgeeks.org/k-maximum-sum-combinations-two-arrays/
 */

const sumCombination = function(firstArray, secondArray, length, combination) {
    let res = [];
    for (let firstArrayElement of firstArray) {
        for (let secondArrayElement of secondArray) {
            res.push(firstArrayElement + secondArrayElement);
        }
    }

    return res.sort((a, b) => a < b ? 1 : -1).splice(0, combination);
};

module.exports = sumCombination;
