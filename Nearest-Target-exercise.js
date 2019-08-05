function targetTerdekat(arr) {
    var O = arr.indexOf('o');
    var X = arr.indexOf('x');
    var jarak = arr.length;
    var hasil = 0;
  
    if(X === -1){
      return 0;
    }
  
    for(var i=0; i<arr.length; i++){
      if(arr[i] === 'x'){
        hasil = Math.abs(i - O);
        if(hasil < jarak){
          jarak = hasil;
        }
      }
    }
    return jarak;
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2