function angkaPalindrome(num){
    for(var i=0; i<num; i++){
      num++
      
      var strNum = String(num)
      var strLen = strNum.length
      var str = ''
      for(var j=strLen-1; j>=0; j--){
        str += strNum[j]
      }
      if(str === strNum){
        return num
      }
      
    }
  }
  
  // TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001