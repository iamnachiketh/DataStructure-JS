// Set is a Object in JS which only stores unique elements.

// It can also be used to remove duplicates

let set1 = new Set();

set1.add(20);
set1.add(10);
set1.add(80);
set1.add(40);

let set2 = new Set();

set2.add(80);
set2.add(10);
set2.add(45);
set2.add(63);

// Gets the size of the set is an instance properties
console.log(set1.size); // Output: 4


// Instance methods in set

// Intersection in set  gives common values prosent in both the sets

set1.intersection(set2)

// Union in set all the elements present in both the sets.

set1.union(set2);

// Note: The current invoking object has to be instance of set but the passing arguments could be set-like objects eg: Map, HashTable

let hmap = new Map([
    [80,"Alex"],
    [10,"John"],
    [110,"Steve"]
]);

set1.intersection(hmap);// Output: 10,80


// Set.prototype.add()

set1.add(100);


// has() checks if the passed argument present in the set instance or not then return a boolean value

console.log(set1.has(20))// Output:true

// delete() Removes the element which is passed as argument

// returns a boolean asserting whether an element was successfully removed or not.

console.log(set1.delete(20)) // Output: true

// clear() removes all the elements in the set

set1.clear();

// entries() Returns a new iterator object that contains an array of [value1, value2, value3] for each element in the Set object, in insertion order.

let array = set1.entries();

console.log(array); // [10,20,80,40,100]

// forEach() Calls callback function once for each value present in the Set object, in insertion order.

set1.forEach((value)=>console.log(value));

// keys()/values() Returns a new iterator object that prints/yields the values for each element in the Set object in insertion order.

console.log(set1.values());

// A WeakSet is a collection of garbage-collectable values, including objects and non-registered symbols.




