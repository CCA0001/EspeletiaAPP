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
					"serialCode" => $row['serialCode'],
				);
			}

			return $list;
		}

			
	}

