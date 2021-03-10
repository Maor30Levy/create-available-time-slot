const merge = (arr1, arr2) => {
    const arr = [];
    let i = 0, j = 0;
    while (i !== arr1.length || j !== arr2.length) {
        if (
            (j === arr2.length || arr1[i]?.startTime <= arr2[j]?.startTime) &&
            (i < arr1.length)
        ) {
            arr.push(arr1[i])
            i++;
            continue;
        }
        if (
            (i === arr1.length || arr2[j]?.startTime <= arr1[i]?.startTime) &&
            (j < arr2.length)
        ) {
            arr.push(arr2[j])
            j++;
        }

    }
    return arr;
};

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    const seperator = Math.floor(arr.length / 2);
    const arr1 = arr.slice(0, seperator);
    const arr2 = arr.slice(seperator, arr.length);
    return merge(mergeSort(arr1), mergeSort(arr2));
}

module.exports = { mergeSort };