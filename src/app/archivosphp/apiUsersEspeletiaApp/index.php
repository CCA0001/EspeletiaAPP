<?php

	require_once("api.php");
	require_once("connection_database.php");
	require_once("cors.php");

	ini_set('display_errors', 1);
	error_reporting(E_ALL);
	header("Content-Type:application/json");

	$url = $_SERVER['REQUEST_URI'];
	$methodHTTP = $_SERVER['REQUEST_METHOD'];

	if($url == '/apiUsersEspeletiaApp/' && $methodHTTP == 'GET'){
		$user = array();
		$api = new Api();
		$user = $api -> getUser();
		echo json_encode($user);
	}

	?>


