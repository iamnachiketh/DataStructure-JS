let person1 = {
    name: "Sally",
    age: 20,
    place: "Holland"
}

console.log(person1);

let person2 = {

}

// Copies properties from a source object to a target object
Object.assign(person2, person1); // person2 is target and person1 is the source
console.log(person2); // Output: { name: 'Sally', age: 20, place: 'Holland' }



// Creates an object from an existing object
Object.create(person2);



// Returns an array of the key/value pairs of an object
var array = Object.entries(person2);
console.log(array);


// Creates an object from a list of keys/values
var obj = Object.fromEntries([["name","Alex"],["age","19"],["place","NYC"],["display",function(){
    console.log(this);
}]]);

console.log(obj);


// Returns an array of the keys of an object
let keys = Object.keys(obj);
console.log(keys);


// Returns an array of the property values of an object
let values = Object.values(obj);
console.log(values);

// Groups object elements according to a function
Object.groupBy(object, callback)


