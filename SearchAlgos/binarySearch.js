// Binary Search: In this algorithm we divide the array in half and check if the element is present in the first half or the second half

// It comes under divide and comqure algrithm 

// In Order to use this algorithm the array must be sorted.

// Implementation

let array = [10, 20, 33, 29, 15, 30, 45, 67, 89, 43];

// Since array was not sorted i have used inbuilt algorithm first to sort the array
array = array.sort((a, b) => a - b);

// Element to be searched.
let ele = 1100;

// Take two pointer
let low = 0, high = array.length - 1;

while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (array[mid] === ele) {
        console.log("Element " + ele + " is present at index " + mid);
        return;
    }

    if (array[mid] > ele) {
        high = mid - 1;
    }else{
        low = mid + 1;
    }
}

console.log(`Element ${ele} is not present`);


// Time Complexity: O(log n) 
// Since we are dividing the array into half we will get O(log n) where n is the length of the array

// Space Complexity: O(1)
// Since i am not using any  extra space space complexity will be O(1)

