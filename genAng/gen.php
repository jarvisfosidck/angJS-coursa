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

class makeFiles {

    function __construct($appName) {
        $this->appName = $appName;
        $this->rState = file_get_contents("gen/routerNamedView.base.js");
        $this->router = file_get_contents("gen/router.base.js");
    }
    var $scrList = [];
    var $rStateStr = "";
    var $lastComponentHTMLPath = "";
    var $stateURLs = [];

    function addScr($s) {
        $this->scrList[] = $s;
    }
    function addrState($s) {
        $this->rStateStr .= $s;
    }
    function makeHTML($name, $data) {
        $ctrlStr = file_get_contents("gen/html.base.html");
        $map = array("appName" => $this->appName, "namedView" => $name,"JSON" => json_encode($data)
            , "ctrlComponent" => "<".strtolower($name)."-Component> </".strtolower($name)."-Component>"
        );
        $ctrlStr = fileParse($ctrlStr,$map);
        $path = "src/public/".$name.".html";
        file_put_contents($path,$ctrlStr);

    }
    function makeControler($name, $data) {
        $ctrlStr = file_get_contents("gen/controller.base.js");
        $map = array("appName" => $this->appName, "namedView" => $name);
        $ctrlStr = fileParse($ctrlStr,$map);
        $path = "src/public/$name.controller.js";
        file_put_contents($path,$ctrlStr);
        $sPath = '<script src="'.$path.'"></script>';
        $this->addScr($sPath);
        $this->stateURLs[$name] = 'public.'.$name;
        //add to Router String
        $this->addrState(fileParse($this->rState,$map));

    }
    function makeComponentHTML($name, $data) {
        $ctrlStr = file_get_contents("gen/componentHTML.base.html");
        $map = array("appName" => $this->appName, "namedView" => $name, "compname" => strtolower($name));
        $ctrlStr = fileParse($ctrlStr,$map);
        $path = "src/public/$name.component.html";
        file_put_contents($path,$ctrlStr);
        $this->lastComponentHTMLPath = $path;

    }
    function makeComponent($name, $data) {
        $ctrlStr = file_get_contents("gen/component.base.js");
        $map = array("appName" => $this->appName, "namedView" => $name, "compname" => strtolower($name), "compPath" => $this->lastComponentHTMLPath);
        $ctrlStr = fileParse($ctrlStr,$map);
        $path = "src/public/$name.component.js";
        file_put_contents($path,$ctrlStr);
        $sPath = '<script src="'.$path.'"></script>';
        $this->addScr($sPath);
    }
    function saveRouter() {

        $map = array("appName" => $this->appName, "namedView" => $name, "createdRoutesString" => $this->rStateStr);
        $r = fileParse($this->router,$map);
        $path = "src/public/public.routes.js";
        file_put_contents($path,$r);

    }
    function saveIndexHTML() {
        $sf = implode($this->scrList,"\r\n");
        foreach ($this->stateURLs as $n => $url) {

            $sitemap .= "<a ui-sref=\"$url\">$n</a><br/>";

        }

        $map = array("appName" => $this->appName, "namedView" => $name, "insertJSFiles" => $sf, "siteMapPages" => $sitemap);
        $ix = file_get_contents("gen/index.html");
        $ix = fileParse($ix,$map);
        file_put_contents("index.html",$ix);

    }
    function saveAppSetUp() {
        $map = array("appName" => $this->appName, "namedView" => $name);
        $pm = file_get_contents("gen/public.module.base.js");
        $pm = fileParse($pm, $map);
        file_put_contents("src/public/public.module.js", $pm);
    }


}
$mkf = new makeFiles($fileName);

foreach ($jsonSource as $k => $v) {
    //var_dump($k, $v);

    $mkf->makeControler($k,$v);
    $mkf->makeHTML($k,$v);
    $mkf->makeComponent($k,$v);
    $mkf->makeComponentHTML($k,$v);
    //if type object then
    //create a controller, save path
    //create a component save path
    //create html file with comments to file paths
    //make sure to use angular in creation of template code

}
$mkf->saveRouter();
$mkf->saveIndexHTML();
$mkf->saveAppSetUp();






 ?>
