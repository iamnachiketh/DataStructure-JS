// Take an element place it in correct order

let array = [10, 20, 33, 29, 15, 30, 45, 67, 89, 43];


for (let i = 0; i <= array.length - 1; i++) {
    let j = i;

    while (j > 0 && array[j - 1] > array[j]) {
        [array[j - 1], array[j]] = [array[j], array[j - 1]];
        j--;
    }
}

console.log(array);

// Time complexity: O(n^2) both worst case and best case, best case complexity will be O(n).

// Space Complexity: O(1) since we are not using any extra space.