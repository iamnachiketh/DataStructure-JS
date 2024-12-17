// In selection it will check which is the min element in the given array

// When it will get a minimum it will swap it with the first position in the array.

// Select min in the sub array and swap them with the first index in the sub array.

let array = [101, 10, 20, 33, 29, 15, 30, 45, 67, 89, 43];


for (let i = 0; i < array.length - 1; i++) {

    let idx = i;
    
    for (let j = i; j < array.length; j++) {
    
        if (array[j] < array[idx]) {
    
            idx = j;
    
        }
    
    }
    
    [array[i], array[idx]] = [array[idx], array[i]];

}

console.log(array);


// Time Complexity: O(n^2) this is the best, average, worst time complexity
// Space Complexity: O(1) since we are not using any extra space.