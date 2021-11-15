<?php

header("Access-Control-Allow-Origin: *");
$numbers = array();

for($i = 0; $i < 99; $i++)
{
    try {
        $number = random_int(0, 99);
    } catch (Exception $e) {
    }
    if(!in_array( $number, $numbers)){
        $numbers[] = $number;
    }
    if(count($numbers) == 20){
        echo json_encode($numbers);
    }
}
?>