<?php
$uri = $_SERVER['REQUEST_URI'];
$url = "http://" . $_SERVER['HTTP_HOST'] . $uri;

$string = file_get_contents("meta.json");
$meta = json_decode($string, true);

$tags = $meta[$uri] ? $meta[$uri] : $meta['/'];
$tags['url'] = $url;
?>
