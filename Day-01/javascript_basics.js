//Swap two numbers without temporary variable

let a = 5, b = 10;

a = a + b;  
b = a - b;  
a = a - b;  

console.log("Swapped : " + a, b);

//Find large number Among given array of numbers

function findLargest(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findLargest([5, 12, 8, 130, 44])); 

//Break a whole no into digitsblike 4562-> 4,5,6,2
function getDigits(num) {
    let digits = [];
    while (num > 0) {
        digits.unshift(num % 10);  // take last digit
        num = Math.floor(num / 10); // remove last digit
    }
    return digits;
}

console.log(getDigits(4562));|

//Scale a matrix
function scaleMatrix(matrix, scalar) {
    return matrix.map(row => row.map(value => value * scalar));
}


let A = [
    [1, 2],
    [3, 4]
];
let k = 3;

let scaled = scaleMatrix(A, k);
console.log(scaled);

//Multiply 2 matrix

function multiplyMatrices(A, B) {
    let rowsA = A.length,
        colsA = A[0].length,
        rowsB = B.length,
        colsB = B[0].length;

    if (colsA !== rowsB) {
        throw new Error("Matrix multiplication not possible: columns of A must equal rows of B");
    }

    // create result matrix filled with 0
    let result = Array.from({ length: rowsA }, () => Array(colsB).fill(0));

    for (let i = 0; i < rowsA; i++) {
        for (let j = 0; j < colsB; j++) {
            for (let k = 0; k < colsA; k++) {
                result[i][j] += A[i][k] * B[k][j];
            }
        }
    }
    return result;
}


let X= [
    [1, 2, 3],
    [4, 5, 6]
];
let B = [
    [7, 8],
    [9, 10],
    [11, 12]
];

console.log(multiplyMatrices(X, B));


//Create a function to print element la from multidimensional array

function printAllElements(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            console.log(matrix[i][j]);
        }
    }
}
printAllElements(arr);