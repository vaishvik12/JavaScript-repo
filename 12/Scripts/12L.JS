// const countPositiveNum = nums => {
//   let count = 0;

//   nums.forEach(num => {
//     if(num > 0) count++;
//   });

//   return count;
// };


const countPositiveNum = nums => nums.filter(num => num > 0).length;
console.log(countPositiveNum([-1,2,-5,10,9,-2]));