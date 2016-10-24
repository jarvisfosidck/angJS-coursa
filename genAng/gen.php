<?php

$fileName = "newApp";
$main = json_decode(file_get_contents($fileName.".json"));

$routerAppendString = "";
$indexAppendString = ""; //TODO setup with some library manager string for now

//make main application
//file parse
function fileParse($str, $map) {
    foreach ($map as $k => $v) {
        $search = "__ga{{" . $k . "}}ag__";
        $str = str_replace($search, $v, $str);
    }
    return $str;
}
function appendIndex($file) {
    //hmm lets do this at the end and save list of all files needed
}
$map = array("appName" => $fileName);
$mainApp = fileParse(file_get_contents("gen/main.app.js"), $map);
file_put_contents("src/" . $fileName . ".app.js",$mainApp);






 ?>
