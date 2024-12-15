// The Map object holds key-value pairs and remembers the original insertion order of the keys.

let map = new Map([
    ["Alex",21],
    ["Donald",20],
    ["John",18]
]);


// To add elements to map onject

map.set("Steve", 22);

console.log(map); //Output: { 'Alex' => 21, 'Donald' => 20, 'John' => 18, 'Steve' => 22 }



// To get the size of the map

console.log(map.size);



// Map.prototype.entries() Returns a new Iterator object that contains a two-member array of [key, value] for each element in the Map object in insertion order.

for(let [key,value] of map.entries())
    console.log(key," -> ",value); //Output: Alex  ->  21  Donald  ->  20  John  ->  18  Steve  ->  22



// Map.prototype.forEach() Calls callback function once for each key-value pair present in the Map object, in insertion order.

map.forEach((value,key) => {
    console.log(key," -> ",value); //Output: Alex  ->  21  Donald  ->  20  John  ->  18  Steve  ->  22
});



// Map.prototype.get() Returns the value associated to the passed key, or undefined if there is none.

console.log(map.get("Steve")); // Output: 22




// Map.prototype.has() Returns a boolean indicating whether a value has been associated with the passed key in the Map object or not.

console.log(map.has("John")); //Output: true



// Map.prototype.keys() Returns a new Iterator object that contains the keys for each element in the Map object in insertion order.

for(let key of map.keys()){
    console.log(key); //Output: Alex  Donald  John  Steve
}




// Map.prototype.set() Sets the value for the passed key in the Map object. Returns the Map object.

map.set("Victor",25);


// Map.prototype.values() Returns a new Iterator object that contains the values for each element in the Map object in insertion order.

for(let val of map.values()){
    console.log(val);
}


// NaN can also be used as a key. Even though every NaN is not equal to itself (NaN !== NaN is true), the following example works because NaNs are indistinguishable from each other:

const myMap = new Map();

myMap.set(NaN, "not a number");

myMap.get(NaN); // "not a number"

const otherNaN = Number("foo");

myMap.get(otherNaN); // "not a number"

