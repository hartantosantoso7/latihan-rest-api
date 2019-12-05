<?php

    // $mahasiswa = [
    //     "nama" => "Hartanto Santoso",
    //     "NIM"  => "2015-137",
    //     "email" => "hartantosantoso7@gmail.com"
    // ];
    // handler
    $dbh = new PDO('mysql:host=localhost; dbname=skm','root','');
    // connect
    $db = $dbh->prepare('SELECT * FROM admin');
    $db->execute();
    $admin = $db->fetchAll(PDO::FETCH_ASSOC);

    $data = json_encode($admin);
    echo $data;
    ?>