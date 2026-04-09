// ["Shimla",101,50.23,true,{town : "Rohru"},[10,20]];


// let name = ["shree","paras", "rohan"];
// let name2 = name; // reference copy

// name[0] = 'Rohit';
// console.log(name);
// console.log(name2);


// const names = ["Shree","Jay","William","Rohit","Ray"];

// names.splice(1,1,"karan","Lala");
// console.log(names);

// let a = [10,20,30,40,50,{name : "Vaishvik"}];
// let b = a; reference copy
// let b = a.slice();  shallow copy :- top level properties are different but nested properties are shared
// let b = structuredClone(a); Deep copy :- all properties are different
// let b = JSON.parse(JSON.stringify(a)); :- Deep copy


// let a = [10,20,30,40,50,{name : "Vaishvik"}];
// let b = a.slice(1,4);

// console.log(a);
// console.log(b);