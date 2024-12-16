let array = [10, 15, 20, 29, 30, 33, 43, 45, 67, 89];
//           0   1   2   3   4   5   6   7   8   9

// Element 23 is not present in the given array but i want to get the max index where 23 will be fit

// For these kind of problems we have to use lowerbound least index where i want to insert the element in the array

// also if the element is already present in the array it will give the index of the same


// Implementation

let ele = 31; //Output: The index of the element 23 is 3

let low = 0, high = array.length - 1;
let idx = array.length;
while(low<=high){
    let mid = Math.floor((low+high)/2)

    if(array[mid]>ele){
        idx = mid;
        high = mid-1;
    }else{
        low = mid+1;
    }
}

console.log(`The index of the element ${ele} is ${idx}`);

// Time Complexity: O(log n) 
// Since we are dividing the array into half we will get O(log n) where n is the length of the array


// Space Complexity: O(1)
// Since i am not using any  extra space space complexity will be O(1)