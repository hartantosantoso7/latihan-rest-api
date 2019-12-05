function tampilkanSemuaMenu() {
    $.getJSON("thecocktail.json", function (data) {
        // console.log(data);
    
        let menu = data.drinks;
        // console.log(menu);
        $.each(menu, function(i, data) {
            // console.log(i);
            // memunculkan data di JSON
            $('#daftar-minuman').append('<div class="col md-4"><div class="card mb-3" style="width: 18rem;"><img src='+ data.strDrinkThumb +' class="card-img-top" ><div class="card-body"><h5 class="card-title">'+data.strDrink+'</h5><p class="card-text">Some quick example text to build on the card title and make up the bulk of the card</p><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>')
        });
    });
}

tampilkanSemuaMenu();


$('.nav-link').on('click', function () {
    // berfungsi untuk menghapus kelas active
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let kategori = $(this).html();
    // console.log(kategori);
    $('h1').html(kategori);

    // mencegat agar all drik tidak kosong
    if(kategori == 'All Drink') {
        tampilkanSemuaMenu();
        return;
    }

    $.getJSON('thecocktail.json', function(data) {
        let menu = data.drinks;
        let content = '';

        $.each(menu, function(i, data) {
            if(data.kategori == kategori.toLowerCase()) {
                content += '<div class="col md-4"><div class="card mb-3" style="width: 18rem;"><img src='+ data.strDrinkThumb +' class="card-img-top" ><div class="card-body"><h5 class="card-title">'+data.strDrink+'</h5><p class="card-text">Some quick example text to build on the card title and make up the bulk of the card</p><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>';
            }
        });

        $('#daftar-minuman').html(content);
    });
});