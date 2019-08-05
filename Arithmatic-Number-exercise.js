function tentukanDeretAritmatika (arr) {
  let deret = 0;
  let check = false;

  deret = arr[1] - arr[0];

  for (let counter = 1; counter < arr.length - 1; counter++) {
    if (arr[counter + 1] - arr[counter] === deret) {
      check = true;
    } else {
      check = false;
      break;
    }
  }
  return check;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])) // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])) // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])) // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])) // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])) // false