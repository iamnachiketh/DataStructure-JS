// Divide and Conqure algorithm in this algorithm we divide a array till a sinple element is left

// When the single element is left then we have to start merging the elements into a single array.

let array = [10, 20, 33, 29, 15, 30, 45, 67, 89, 43];

mergeSort(array, 0, array.length - 1);

console.log(array);


function mergeSort(array, low, high) {

    if (low >= high) return;
    let mid = Math.floor((low + high) / 2);

    mergeSort(array, low, mid);
    mergeSort(array, mid + 1, high);
    merge(array, low, mid, high);

}





function merge(array, low, mid, high) {
    let temp = [];
    let left = low, right = mid + 1;

    while (left <= mid && right <= high) {
        if (array[left] <= array[right]) {
            temp.push(array[left]);
            left++;
        } else {
            temp.push(array[right]);
            right++;
        }
    }
    
    // If there are remaining elements in the left or right array, append them to the temp array
    while (left <= mid) {
        temp.push(array[left]);
    }

    while (right <= high) {
        temp.push(array[right]);
        right++;
    }

    // It will replace the elements present in the array without disturbing the other elements of the array 

    // The numbers will rearrange themselfs in the array, a portion of the elements are sotred and stored in the temp array  
    
    for (let i = low; i <= high; i++) {
        array[i] = temp[i - low];
    }

}

// Time Complexity: O(n log n) since we are dividing the array in the half n/2, n/4, n/8, n/16, n/32........ and we are also performing merge so at worst case it takes n 

// Space complexity: O(n) since at the worst case it could take n space.

