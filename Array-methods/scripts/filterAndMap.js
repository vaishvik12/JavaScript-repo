// let arr = [10,20,30];

// let arrDoubled = arr.map(nums =>  nums * 2);

// console.log(arr);
// console.log(arrDoubled);


// const people = [
//   {name : "Vaishvik", age : 24, city : "Shimla"},
//   {name : "Rohan", age : 21, city : "Pune"},
//   {name : "Sonal", age : 22, city : "Mumbai"}
// ];

// const names = people.map(person => person.name);
// console.log(names);



// const arr = [1,5,2,5,10,24,78,33,31];

// let evenNumbers = arr.filter(num => num % 2 === 0);

// console.log(evenNumbers);


// const users = [
//   {name : "Vaishvik", active : true},
//   {name : "Shail", active : false},
//   {name : "Vanni", active : false},
//   {name : "Vaishnavi", active : true},
//   {name : "Rohit", active : true}
// ];

// let activeUser = users.filter(user => {
//   if(user.active === true){
//     return true;
//   }else{
//     return false;
//   }
// });

// const activeUser = users.filter(user => user.active);
// console.log(activeUser);



function outer(){
  let count = 0;

  function inner(){
    count++;
    console.log(count);
  }
  return inner;
}

const fn = outer();

fn();
fn();
fn();