function cariMean(arr) {
   var mean = 0;
   var total = 0;
   for (var i = arr.length-1; i>=0;i--){
       total = total + Number(arr[i])
   }
   mean = total / Number(arr.length);
   return Math.round(mean);
  }
  
  // TESTing CASES
  console.log(cariMean([1, 2, 3, 4, 5])); // 3
  console.log(cariMean([3, 5, 7, 5, 3])); // 5
  console.log(cariMean([6, 5, 4, 7, 3])); // 5
  console.log(cariMean([1, 3, 3])); // 2
  console.log(cariMean([7, 7, 7, 7, 7])); // 7