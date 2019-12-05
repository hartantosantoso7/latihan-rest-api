function getData() {
    $.ajax({
        url: ' https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=UCkXmLjEr95LVtGuIm3l2dPg &key=AIzaSyDTEaN1RIUIF8Uwty3QkGYXwgWyB9DQ39M',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey' : 'AIzaSyDTEaN1RIUIF8Uwty3QkGYXwgWyB9DQ39M',
            's': $('#home').val()
        },
        success: function(result) {
            console.log(result);
          
               
           
               
            }
                
        }
    );
}