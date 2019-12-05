
// OBJECT TO JSON
// let mahasiswa = {
//     nama    :   "hartanto",
//     nim     :   "2015",
//     email   :   "hartantosantoso7@gmail.com"
// }

// console.log(JSON.stringify(mahasiswa));


// JSON TO OBJECT
// use AJAX
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        let mahasiswa =JSON.parse(this.responseText);
        console.log(mahasiswa);
    }
}

xhr.open('GET', 'coba.json', true);
xhr.send();
