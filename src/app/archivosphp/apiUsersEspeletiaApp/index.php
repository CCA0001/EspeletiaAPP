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

	} elseif ($url == '/apiUsersEspeletiaApp/' && $methodHTTP == 'POST'){

		$data = json_decode(file_get_contents('php://input'), true);
		$isLoginPage = $data['isLoginPage'] ?? false;
		$isRegisterPage = $data['isRegisterPage'] ?? false;

		if ($data === null) {
	        echo json_encode(['success' => false, 'message' => 'Invalid JSON input']);
	        exit;
    	}


		if($isLoginPage){
			$email = $data['email'] ?? '';
			$password = $data['password'] ?? '';

			$api = new Api();
			$user = $api -> getUserByEmailAndPassword($email, $password);

			if($user){
				echo json_encode(['success' => true, 'message' => 'Login succesful', 'user' => $user]);
			} else {
				echo json_encode(['success' => false, 'message' => 'Invalid credentials']);
			}

		} elseif($isRegisterPage){

			$username = $data['username'] ?? '';
			$email = $data['email'] ?? '';
			$password = $data['password'] ?? '';
			$serialCode = $data['serialCode'] ?? '';

			$api = new Api();
			$result = $api -> registerUser($username, $email, $password, $serialCode);

			if($result){
				echo json_encode(['success' => true, 'message' => 'Usuario registrado satisfactoriamente.']);
			} else {
				echo json_encode(['success' => false, 'message' => 'Ha ocurrido un error al registrar al usuario. Intentelo más tarde']);
			}	
		
		} else {
			echo json_encode(['success' => false, 'message' => 'Invalid action specified.']);

		}

	} else {
    		echo json_encode(['success' => false, 'message' => 'Invalid endpoint or method.']);

	} 

?>


