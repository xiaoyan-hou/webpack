function binary_search1(list, key) {
    let low = 0;
    let high =  list.length - 1;
    let mid = -1;
    while(low <= high) {
        mid = parseInt(low + (high - low) /2);
        if (key === list[mid]) {
            return mid;
        } else if (key > list[mid]) {
            low = mid + 1;
        } else if (key < list[mid]) {
            high = mid - 1;
        } else {
            return -1;
        }
    }
    return -1;
};
function binary_search2(list, low, high, key) {
    console.log('low', low, high);
    if (low >= high) {
        return -1;
    }
    let mid = parseInt((low + (high - low)/2));
    if (key === list[mid]) {
        return mid;
    }
    if (key > list[mid]) {
        low = mid + 1;
        return binary_search2(list, low, high, key)
    } 
    if (key < list[mid]) {
        high = mid - 1;
        return binary_search2(list, low, high, key);
    }
}

export {
    binary_search1,
    binary_search2
}