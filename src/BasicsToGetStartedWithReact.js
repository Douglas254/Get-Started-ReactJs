// var - is scoped within the function it is defined,accessible anywhere within the function.
// let - it is scoped within the block it is defined,useful when reasigning variables.
// const - it's used to define constant variables and also they are scoped within that block defined like the let keyword.

function sayHello(){
    for(var i=1; i<5;i++){
        console.log(i);
    }
    console.log(i);
}
sayHello();

//_____________________________________________________________________________________________________________________________
// Objects - collection of key value pairs.
 
const person = {
    name: 'Douglas254',
    walk() {}, // method - a function inside an object.
    talk(){}
};

// ways of accessing its members
// Dot notation 
person.talk();
person.name = 'Obara';

// Bracket notation
person['name'] = 'Phanice';

const targetMember = 'name';
person[targetMember.value] = 'Njogu';

//_____________________________________________________________________________________________________________________________
// The this Keyword - returns a reference to the current object.
const action = {
    name: 'Test',
    walk(){
        console.log(this);
    }
};

action.walk();

// Binding this - solves the problems of the undefined, when functions gets called.

const walk = action.walk.bind(person);
walk();

//_____________________________________________________________________________________________________________________________

// Arrow  functions
//old javascript
// const square = function(number){
//     return number * number;
// }
// console.log(square(25));

// ES6 Javascript 
const square = number => number * number;
console.log(square(5));

// Usefull application of the arrow function
const jobs = [
    {id: 1, isActive: true},
    {id: 2, isActive: true},
    {id: 3, isActive: false}

];

// const activeJobs = jobs.filter(function(job){return job.isActive});
const activeJobs = jobs.filter(job => job.isActive); // filter method traverses through the list

console.log(activeJobs);

// Arrow functions they dont rebind this keyword

 const doingWhat = {
     digging(){
         var self = this;
        setTimeout(() => {
            console.log("this", this);
        },1000);
     }
 }

 doingWhat.digging();


 // Arrray.map Method
//  const colors = ['Red','Green','Blue'];
//  const items = colors.map(function(color){
//      return '<li>' + color + '<li>';
//   });
//   console.log(items);

const colors = ['red','green','blue'];
const items = colors.map(color => `<li> ${color} <li>`); // template literal i.e `<li>${color}<li>`
console.log(items);

//_____________________________________________________________________________________________________________________________

// Object Destructuring
const address = {
    street: 'kibra',
    city: '',
    country: ''
};

const { street, city, country} = address;
const { street: st } = address // setting alias st inplace of street
console.log(st);


// Spread Operator - they are represented using three dots i.e ...

const first = [1, 2, 3];
const second = [4, 5, 6];

// const combined = first.concat(second);
const combined = [...first, 'a',...second, 'b'];
console.log(combined);

const clone = [...first];
console.log(clone);

const first1 = {name: 'Douglas', school: 'Kabarak University'};
const second1 = {city: 'Nakuru', location: 'Kenya'};

const combined1 = {...first1,...second1, department: 'Information Technology(IT)'};
console.log(combined1);

const clone1 = {...second1}
console.log(clone1);