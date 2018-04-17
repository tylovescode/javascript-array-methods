//indexOf
//Return the index of a specific element in the array.
//If the element does not exist in the array, the function returns -1. 

var arr = [1, 2, 100, 12, -1];

arr.indexOf(100); // 2
arr.indexOf(5); // -1

//---------------
//push and pop
//Push elements to the end of the array
//Delete the last element from an array

var arr2 = [1, 2, 3, 4];

arr2.push(5); // [1, 2, 3, 4, 5]
arr2.push(6, 7, 8); // [1, 2, 3, 4, 5, 6, 7 ,8]

arr2.pop(); // [1, 2, 3, 4, 5, 6, 7]

//---------------
//shift and unshift
//Remove the first element from an array and return that element
//or add an element to the front of the array

var arr3 = [1, 2, 100, 12, -1];

var first = arr.shift(); // 1
//arr3 is now [2, 100, 12, -1]

arr3.unshift(5000); //arr3 is now [5000, 2, 100, 12, -1]

//---------------
//reverse
//Reverse the elements in an array

var arr4 = [1, 2, 100, 12, -1];
arr4.reverse(); // [-1, 12, 100, 2, 1]

//---------------
//sort
//Sort the elements in an array based on a compare function

var arr5 = [1, 2, 100, 12, -1];

//sort in ascending order
arr5.sort(function(a, b) { return a - b; });
// [-1, 1, 2, 12, 100]

//sort in descending order
arr5.sort(function(a, b) { return b - a; });
// [100, 12, 2, 1, -1]

//---------------
//slice
//Return a part of the array specified by two numbers, start and end index

var arr6 = [1, 2, 100, 12, -1];
var cutArr = arr6.slice(1, 3); // [2, 100]


