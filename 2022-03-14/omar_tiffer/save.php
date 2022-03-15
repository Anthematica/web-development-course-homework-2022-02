<?php

$encodedData = json_encode($_POST);

$db = fopen('database.txt', 'a');
fwrite($db, "$encodedData\n");
fclose($db);

header('Location: /');