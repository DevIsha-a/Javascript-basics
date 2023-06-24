// Objects are key-value pair  
// e.g., in this example name, and age are keys and john and 23 are their values respectively age:23 is an entry

const person={
    name:'john',
    age:'23',
    hello: function(){
        return `Hello! I am ${this.name} and I am ${this.age} years old`
    }

}

// Accessing  values 

console.log(person.name)
 // or
console.log(person['name'])

 // accessing functions
console.log(person.hello())
 // or
console.log(person['hello']())

let newp=delete person.name //returns true or false 
console.log(newp)


// checks if the objet contains a particular key or not
console.log("name" in person)  // logs true if person contains property name
console.log(person.hasOwnProperty("name")) //alternative of   ("name" in person)


// get All the keys of an object

const keys= Object.keys(person)
// console.log(keys)  //logs all the keys of object person

// sort the keys 
const sortedKeys= Object.keys(person).sort()
// console.log(sortedKeys)


// get All the keys of an object

const values= Object.values(person)
console.log(values)  //logs all the values of object person (just values, not keys)
 
// sort the keys 
const sortedValues= Object.entries(person).sort()
console.log(sortedValues)     //logs all the sorted arrays of object person





// Iteration in objects
for (let key in person){
    console.log(`${key}:${ person[key]}` )  //consoles entries one by one
}

// Iteration in objects


// Note we can create objects using constructs as well. For example:
function Student(name, age){
    this.name= name,
    this.age=age
}
let mystudent=new Student('Ali', 23)
console.log(mystudent)