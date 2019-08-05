function groupAnimals(animals) {
  animals = animals.sort();
  var inputAnimals = [];
  var totalAnimals = [];

  for (var i = 0; i<animals.length;i++){
    inputAnimals.push(animals[i]);
    if (i < animals.length-1){
      if (animals[i][0] !== animals[i+1][0]){
        totalAnimals.push(inputAnimals);
        inputAnimals = [];
      }
    } else {
      totalAnimals.push(inputAnimals);
      inputAnimals = [];
    }
  }
  return totalAnimals;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]