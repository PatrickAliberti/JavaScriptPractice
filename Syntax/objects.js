// Creating a plain object via an object literal
const obj = {
  first: 'Jane',
  last: 'Doe',
  getFullName() { return this.first + ' ' + this.last },
}

// Acessing properties
console.log(obj.first);
console.log(obj['last']);

// Adding/deleting properties
obj.age = 25;
console.log(obj.age);

delete obj.age;
console.log(obj.age);

// Object.create() - used to create an object with the same properties as an existing object
let newObj = Object.create(obj);

// Object constructor - a function that is used to create an object
function Person(_f, _l, _a) {
  this.first = _f;
  this.last = _l;
  this.age = _a;
}

let person1 = new Person("steve", "the minecraft dude", 20);

// Prototype property - used to add a method shared by all of the objects created by the object constructor
Person.prototype.fullname = function() { return "my name is " + this.first + " " + this.last }



//////////////////////////////////////////////
//    Looping through an object
//////////////////////////////////////////////

// Looping through an object
for (let key in obj) {
  console.log(key, obj[key]);
}

// Object.keys() - returns an array of an object's property names
for (let key of Object.keys(obj)) {
  console.log(key, obj[key]);
}

// Object.keys() - returns an array of an object's property values
for (let value of Object.values(obj)) {
  console.log(value);
}

// Object.entries() - returns an array of an objects names and values
for (let entry of Object.entries(obj)) {
  console.log(entry);
}
//////////////////////////////////////////////