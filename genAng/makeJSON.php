<?php


class cat extends stdClass {
    var $color = "";
    var $legs = 4;//if not then poor kitten
}

$json = new stdClass();

$json->catCollection = array("cat1" => new cat(), "cat2" => new cat());

file_put_contents("newApp.json",json_encode($json));


 ?>
