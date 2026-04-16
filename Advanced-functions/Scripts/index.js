// function add(a,b){
//   return a + b;
// }

// let add = (a,b) => {
//   return a + b;
// }

// above syntax does the same thing as below
// let add = (a,b) => a + b;

// let sum = add(10,20);
// console.log(sum);

// function squareRoot(x){
//   return x * x;
// }
// console.log(squareRoot(10));

// let square = x => x * x;
// console.log(square(10));


// const getUser = () => ({name : "Rahul", age : 23});

// console.log(getUser());


// const person1 = {
//   name : "Rahul",
//   age : 23,
//   normal : function(){
//     console.log(this.name);
//   },
//   arrow : () => {
//     console.log(this.name);
//   }
// }

// person1.arrow();

// let numbers = [10,20,30,40];


// for (let i = 0; i < numbers.length; i++){
//   let value = numbers[i];
//   console.log(`Square root of ${value} = ${value * value}`);
// }

// numbers.forEach(function(value){
//   console.log(`Square root of ${value} = ${value * value}`);
// })




// const fruits = ["apple","mango","pear"];

// fruits.forEach(function(fruit, index){
//  console.log(index + " " + fruit)
// })


const numbers = [10,20,30,40];

let sum = 0;

numbers.forEach(num => {
  sum += num;
});

console.log(sum);
