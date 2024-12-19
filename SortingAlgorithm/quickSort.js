// Steps to do quick sort

// 1) pick the pivot - pivot can be any random element in the array

// After picking the element place it in its correct order in the array by swapping like if a particular element is greater than or lesser than the pivote

// 2) Smaller on the left and larger on the right

// repeat the 1st and 2nd steps till the array is sorted.

// Divide and conqure algorithm

// Implementation

let array = [10, 20, 33, 29, 15, 30, 45, 67, 89, 43];

quickSort(array,0,array.length - 1);

function quickSort(array, low, high) {

    if (low < high) {

        pidx = findPivot(array, low, high);
        quickSort(array, low, pidx);
        quickSort(array, pidx + 1, high);
    }
}


function findPivot(array, low, high) {
    let i = low, j = high, pivot = array[low];

    while (i < j) {
        while (array[i] <= pivot && i <= high) {
            i++;
        }

        while (array[j] > pivot && j >= low) {
            j--;
        }

        if (i < j) {
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
        [array[i],array[j]] = [array[j],array[i]];
        return j;
}

console.log(array);

// Time Complexity: O(n log n) 

// Space Complexity: O(1) 
