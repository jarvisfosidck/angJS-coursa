<?php


class cat extends stdClass {
    var $color = "";
    var $legs = 4;//if not then poor kitten
}

$json = new stdClass();

$json->catCollection = array("cat1" => new cat(), "cat2" => new cat());
$json->dogCollection = array("dog1" => 'rawoof', "dog2" => "hello dog bark");
$json->cowCollection = array("cows1" => 'moo', "bird2" => "give milk");
$json->foxCollection = array("fox1" => 'fast', "fox2" => "what does the fox say noices");

file_put_contents("newApp.json",json_encode($json));


 ?>
