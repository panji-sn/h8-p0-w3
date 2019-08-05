function tentukanDeretGeometri (arr) {
    var kali = arr[1] / arr[0];
    var check = false;
  
    for (var counter = 1; counter < arr.length - 1; counter++) {
      if (arr[counter + 1] / arr[counter] === kali) {
        check = true;
      } else {
        check = false;
        break;
      }
    }
    return check;
  }
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])) // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])) // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])) // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])) // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])) // false