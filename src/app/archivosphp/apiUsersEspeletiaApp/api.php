<?php
	
	class Api{

		public function getUser(){
			$list = array();
			$connection = new Connection();
			$db = $connection -> getConnection();
			$sql = "SELECT * FROM users";
			$query = $db -> prepare($sql);
			$query -> execute();
			while($row = $query -> fetch()){
				$list[] = array(

					"id" => $row['ID'],
					"username" => $row['username'],
					"email" => $row['email'],
					"password" => $row['password'],
					"serialCode" => $row['serialCode']
				);
			}

			return $list;
		}

		public function getUserByEmailAndPassword($email, $password){
			$connection = new Connection();
			$db = $connection -> getConnection();
			$sql = "SELECT * FROM users WHERE email = :email AND password = :password";
			$query = $db -> prepare($sql);
			$query -> bindParam(':email', $email);
			$query -> bindParam(':password', $password);
			$query -> execute();

			return $query -> fetch();

		}

		public function registerUser($username, $email, $password, $serialCode){
			$connection = new Connection();
			$db = $connection -> getConnection();
			$sql = "INSERT INTO users (username, email, password, serialCode) VALUES (:username, :email, :password, :serialCode)";
			$query = $db -> prepare($sql);
			$query -> bindParam(':username', $username);
			$query -> bindParam(':email', $email);
			$query -> bindParam(':password', $password);
			$query -> bindParam(':serialCode', $serialCode);

			return $query -> execute(); 
		}

		

			
	}

