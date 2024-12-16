// Searching it is the process of finding a given element in the Data Structure.

// Linear Search: In this algorithm we traverse through a data structure until we find a matching element to given element

// This is the array that we want to search if the element is present or not


// Implementation

let array = [10, 20, 33, 29, 15, 30, 45, 67, 89, 43];

// This is the element that check with.
let num = 67;

// so we run a loop to the length of the array.
for (let i = 0; i < array.length; i++) {

    // Check in each iteration if the element matches the array element by using a if condition.
    if (array[i] === num) {
        console.log(`In index ${i} the element ${num} is present`);
        return;
    }
}

console.log(`Element ${num} is not present`);


// Time Complexity - O(n)
// Since i may traverse to the end of the array which is of length n so the time complexity would be O(n)


// Space Complexity - O(1)
// Since i am not using any extra space so the time complexity would be O(1)



