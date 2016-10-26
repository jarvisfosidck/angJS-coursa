<?php

$fileName = "newApp";
$jsonSource = json_decode(file_get_contents($fileName.".json"));


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

$index = fileParse(file_get_contents("gen/index.html"), $map);
file_put_contents("index.html",$index);


foreach ($jsonSource as $k => $v) {
    var_dump($k, $v);

    //if type object then
    //create a controller, save path
    //create a component save path
    //create html file with comments to file paths
    //make sure to use angular in creation of template code

    break;
}






 ?>
