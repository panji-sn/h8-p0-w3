function dataHandling2(input){
    input.splice(1,4,'Roman Alamsyah Elsharawy','Provinsi Bandar Lampung','21/05/1989','Pria','SMA Internasional Metro');
    // var irisan = input.slice(3,4);
    var strIrisan = input.slice(3,4).toString();
    console.log(input);
    switch (strIrisan[3] && strIrisan[4]){
        case '0'&&'1':
            console.log('Januari');
            break;
        case '0'&&'2':
            console.log('Februaru');
            break;
        case '0'&&'3':
            console.log('Maret');
            break;
        case '0'&&'4':
            console.log('April');
            break;     
        case '0'&&'5':
            console.log('Mei');
            break;
        case '0'&&'6':
            console.log('Juni');
            break;        
        case '0'&&'7':
            console.log('Juli');
            break;
        case '0'&&'8':
            console.log('Agustus');
            break;        
        case '0'&&'9':
            console.log('September');
            break;
        case '1'&&'0':
            console.log('Oktober');
            break;        
        case '1'&&'1':
            console.log('November');
            break;
        case '1'&&'2':
            console.log('Desember');
            break;
    }
    //var bulan = strIrisan.split('/');
    // console.log(strIrisan[3],strIrisan[4])
    console.log(strIrisan.split('/').sort(function(a, b){return b-a}));
    console.log(strIrisan.split('/').join('-'));
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