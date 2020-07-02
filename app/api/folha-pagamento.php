<?php
include '../../ini.php';
sleep(1);
$salarioDolares = 2000;
$totalDolares = $_GET['n'] * $salarioDolares;
$ret = ['total_dolares' => $totalDolares];
printJson($ret);