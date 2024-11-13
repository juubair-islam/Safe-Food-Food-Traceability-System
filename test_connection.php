<?php
$conn = new mysqli("localhost", "root", "", "safe_food_traceability");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
