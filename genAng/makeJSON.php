<?php


class cat extends stdClass {
    var $color = "";
    var $legs = 4;//if not then poor kitten
}

$json = new stdClass();

$json->catCollection = array("cat1" => new cat(), "cat2" => new cat());
$json->dogCollection = array("dog1" => 'rawoof', "dog2" => "hello dog bark");
$json->birdCollection = array("bird1" => 'wings are flappping', "bird2" => "singings in the morning");

file_put_contents("newApp.json",json_encode($json));


 ?>
