function angkaPalindrome(num) {
    //var strnum = num.toString();
    //var boolean;
    var i = num+1;
    while (i>num){
        
        i++;
        if 
    }
    for (var i=num+1;i>num;i++){
        var penampung ;
        var strnum = num.toString();
        for (var j=strnum.length -1;j>-1;j--){
            penampung = penampung + strnum[j];
            //console.log(penampung);
            //penampung
            if(penampung == strnum){
                //boolean = true;
                break;
                
            } else {
                //boolean = false;
                console.log(i); 
                
            }
        }
      
        
    }    
    
    
    //return false;
  }
  
  // TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001