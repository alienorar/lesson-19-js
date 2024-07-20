// Task 47
// Berilgan massiv ichida k indeksdagi elementni oxirgi indeksdagi element bilan almashtiring.

function swapElements(arr, k) {
    arr.push(...arr.splice(k, 1, arr.pop()))
    return arr
}

// console.log(swapElements([1, 2, 3, 4, 5], 2)); // [1, 2, 5, 4, 3]


// Task 48
// Berilgan massiv ichidagi barcha elementlarni n marta takrorlang va yangi massiv qaytaring


function repeatElements(arr, n) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        for (let g = 1; g <= n; g++) {
            result.push(arr[i])
        }
    }
    return result
}

// console.log(repeatElements([1, 2, 3], 3)); // [1, 1, 1, 2, 2, 2, 3, 3, 3]

// Task 49
// Berilgan massiv ichidagi juft indeksdagi elementlar yig'indisini toping.

function sumEvenIndexedElements(arr) {
    let result = []
    arr.forEach((item, index) => {
        if (index % 2 == 0) {
            result.push(item)
        }
    });
    return result.reduce((a, b) => a + b, 0);
}

// console.log(sumEvenIndexedElements([1, 2, 3, 4, 5, 6])); // 9 (1 + 3 + 5)


// Task 50
// Berilgan massiv ichidagi barcha unikal(takrorlanmagan) elementlarni qaytaring

function uniqueElements(arr) {
    let result = arr.filter((item) => arr.indexOf(item) == arr.lastIndexOf(item))
    return result
}

// console.log(uniqueElements([1, 2, 2, 3, 4, 4, 5])); // [1, 3, 5]


// Task 51
// Berilgan massiv ichidagi barcha qatorlarni teskarisiga o'giring.

function reverseStringsInArray(arr) {
    let result = []
    for (const item of arr) {
        result.push(item.split("").reverse().join(" "));
    }
    return result
}

// console.log(reverseStringsInArray(['abc', 'def', 'ghi'])); // ['cba', 'fed', 'ihg']

// Task 52

// Berilgan massiv ichidagi elementlarni n qadamga chapga ko'chiring.

function rotateArrayLeft(arr, n) {
    for (let i = 0; i <= n; i++) {
        arr.unshift(arr.pop());
    }
    return arr
}

console.log(rotateArrayLeft([1, 2, 3, 4, 5, 6, 7], 3)); // [4, 5, 6, 7, 1, 2, 3]