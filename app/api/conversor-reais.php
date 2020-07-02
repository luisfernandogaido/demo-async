<?php
include '../../ini.php';
sleep(1);
$valorDolar = 5.29;
$reais = $_GET['dolares'] * $valorDolar;
$ret = ['reais' => $reais];
printJson($ret);