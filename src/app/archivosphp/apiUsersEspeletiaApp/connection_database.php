<?php

    class Connection{


        public function getConnection(){

            $host = "localhost";
            $username = "root";
            $password = "";
            $database = "espeletiausers";

            $database  = new PDO("mysql:host=$host; dbname=$database", $username, $password);
            return $database;

        }

    } //Fin de la clase Connection

?>