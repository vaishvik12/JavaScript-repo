const removeEgg = (foods) => {
    let eggCount = 0;

  return foods.filter(food => {
      if(food === 'egg' && eggCount < 2){
        eggCount++;
        return false;
      }
      return true;
    });
};
console.log(removeEgg(['egg','roti','chawal','egg','egg','panner','egg']));