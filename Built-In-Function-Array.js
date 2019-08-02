function dataHandling2(input){
    input.splice(1,4,'Roman Alamsyah Elsharawy','Provinsi Bandar Lampung','21/12/1989','Pria','SMA Internasional Metro');
    // var irisan = input.slice(3,4);
    var strIrisan = input.slice(3,4).toString().split('/');
    console.log(input);
    switch (strIrisan[1]){
        case '01':
            console.log('Januari');
            break;
        case '02':
            console.log('Februari');
            break;
        case '03':
            console.log('Maret');
            break;
        case '04':
            console.log('April');
            break;     
        case '05':
            console.log('Mei');
            break;
        case '06':
            console.log('Juni');
            break;        
        case '07':
            console.log('Juli');
            break;
        case '08':
            console.log('Agustus');
            break;        
        case '09':
            console.log('September');
            break;
        case '10':
            console.log('Oktober');
            break;        
        case '11':
            console.log('November');
            break;
        case '12':
            console.log('Desember');
            break;
    }
    //var bulan = strIrisan.split('/');
    // console.log(strIrisan[3],strIrisan[4])
    //console.log(strIrisan.split('/'));
    console.log(strIrisan.sort(function(a, b){return b-a}));
    console.log(strIrisan.join('-'));
    //var strNama = input.slice(1,2).toString();
    //var nama = strNama.substr(0,15);
    console.log(input.slice(1,2).toString().substr(0,15)); 
}

var input = ['0001', 'Roman Alamsyah ', 'Bandar Lampung', '21/05/1989', 'Membaca'];
dataHandling2(input);
/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */