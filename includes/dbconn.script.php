<?php

$dbServername = "localhost";
$dbUsername = "root";
$dbPassword = "";
$dbName = "hieroglyphicus_db";

$conn = mysqli_connect($dbServername, $dbUsername, $dbPassword, $dbName);
mysqli_set_charset($conn, "utf8");

// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }