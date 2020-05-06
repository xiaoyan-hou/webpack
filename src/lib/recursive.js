export function fibonacci(n) {
    // console.log('n',n);
    if (n <= 0) {
        return -1;
    }
    if (n === 1 || n === 2) {
        return 1;
    }
    return fibonacci(n -1 ) + fibonacci(n - 2);
}
export function factorial(n) {
    if (n < 0) {
        return -1;
    }
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
function findNum(arr) {
    if (!arr[0]) {
        return 0;
    }
    arr.pop();
    return 1 + findNum(arr);
}
// console.log(fibonacci(9));
// console.log(factorial(4));
console.log(findNum([1,2,3,4]));

