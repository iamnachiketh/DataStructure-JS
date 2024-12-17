
// Bubble sort pushes the max element to the end by doing adjacent sorting

// If the current element is greater than its next element swap it.


let array = [10, 20, 33, 29, 15, 30, 45, 67, 89, 43];

for (let i = array.length - 1; i >= 1; i--) { // we will got till i index bcause no need to check for one element.
    let flag = 0;
    for (let j = 0; j <= i - 1; j++) { // We have to go till i - 1 because if the j is at last position and j + 1 will get index out of bounds 
        if (array[j] > array[j + 1]){

            [array[i], array[j]] = [array[j], array[i]];
            flag = 1;
        }
    }
    if (flag == 0) {
        break; // if no swaps happen then array is already sorted and break out of the loop.
    }
}

console.log(array);

// Time Complexity: O(n^2)  in the worst case but it can be optimized to O(n) if all the elements in the array is already sorted






