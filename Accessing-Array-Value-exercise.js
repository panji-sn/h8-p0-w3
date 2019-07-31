function balikString(kata){
    var arr = [];
    for (var i = kata.length -1; i>=0;i--){
      arr = arr + kata[i];
    }
    return arr;
  }
  
var kata = 'Hello World!';
console.log(balikString(kata));
  
  