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