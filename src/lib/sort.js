function findSmallest(arr) {
    let smallest = arr[0];
    let smallest_index = 0;
    arr.forEach((item, index) => {
        if (item < smallest) {
            smallest = item;
            smallest_index = index;
        }
    });
    return smallest_index;
}
export function selectionSort(arr) {
    let sortArr = [];
    const len = arr.length;
    for(let idx = 0; idx < len; idx ++) {
        let index = findSmallest(arr);
        sortArr.push(...arr.splice(index,1));
    }
    return sortArr;
};
function sum(list) {
    if (list.length === 0) {
        return 0;
    }
    return list.shift() + sum(list);
}
function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let pivot_index = parseInt(arr.length / 2) ;
    let pivot = arr[pivot_index];
    let less = [];
    let larger = [];
    arr.forEach(item => {
        if (item < pivot) {
            less.push(item)
        } else if (item > pivot) {
            larger.push(item);
        }
    });
    return quickSort(less).concat([pivot]).concat(quickSort(larger));
}

const arr = [5, 6, 3, 8, 9, 1];
// console.log(selectionSort(arr));
console.log(quickSort(arr));