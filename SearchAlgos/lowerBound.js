
let array = [10, 15, 20, 29, 30,33, 43, 45, 67, 89];

// Element 23 is not present in the given array but i want to get the min index where 23 will be fit

// For these kind of problems we have to use lowerbound least index where i want to insert the element in the array

// also if the element is already present in the array it will give the index of the same


// Implementation

let ele = 23; //Output: The index of the element 23 is 3

let val = 67; //Output: The index of the element 23 is 7

let low = 0, high = array.length - 1;
let idx = 0;
while(low<=high){
    let mid = Math.floor((low+high)/2)

    if(array[mid]>=ele){
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
