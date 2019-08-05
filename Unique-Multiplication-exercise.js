function perkalianUnik(arr) {
    let total1 = [];
    let tampung =1;
    for (let i = 0; i<arr.length;i++){
      for (let j = 0; j < arr.length; j++){
        if (i !== j){
          tampung = tampung * arr[j];
        } 
      } 
      total1.push(tampung);
      tampung =1;
    } 
    return total1;
}
  
  // TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]