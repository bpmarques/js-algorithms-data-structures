/**
 * Quick Sort
 *
 * @link https://www.geeksforgeeks.org/quick-sort/
 */
function quickSort(arr, begin, end) {
    if (begin < end) {
        let partitionIndex = _partition(arr, begin, end);

        quickSort(arr, begin, partitionIndex-1);
        quickSort(arr, partitionIndex+1, end);
    }
    return arr;
}

function _partition(arr, begin, end) {
    let pivot = arr[end];
    let i = (begin-1);
    let swapTemp = null;
    for (let j = begin; j < end; j++) {
        if (arr[j] <= pivot) {
            i++;

            swapTemp = arr[i];
            arr[i] = arr[j];
            arr[j] = swapTemp;
        }
    }

    swapTemp = arr[i+1];
    arr[i+1] = arr[end];
    arr[end] = swapTemp;

    return i+1;
}

module.exports = quickSort;
