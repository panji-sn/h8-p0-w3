//contoh input
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]
//console.log(input.length)
function dataHandling (){
    for (var i=0;i< input.length;i++){
        for (var j=0;j<1;j++){
            console.log('Nomor ID: '+input[i][j]);
            console.log('Nama Lengkap: '+input[i][j+1] );
            console.log('TTL: '+input[i][j+2]+' '+input[i][j+3]);
            console.log('Hobi: '+input[i][j+4]);
        }
        j = 0;
        console.log('\n');
    }
}

dataHandling();