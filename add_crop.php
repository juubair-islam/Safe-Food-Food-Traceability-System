<?php
// Database connection settings
$servername = "localhost";
$username = "root";
$password = ""; // Default XAMPP password for MySQL is empty
$dbname = "safe_food_traceability";

// Create a connection to MySQL
$conn = new mysqli($servername, $username, $password, $dbname);

// Check if the connection was successful
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get data from the form fields
    $district = $_POST['district'];
    $farmerName = $_POST['farmerName'];
    $fieldLocation = $_POST['fieldLocation'];
    $crop = $_POST['crop'];
    $harvestDate = $_POST['harvestDate'];
    $quantity = $_POST['quantity'];

    // Generate a unique batch number based on the current timestamp
    $batchNumber = "BATCH-" . time();

    // SQL query to insert the data into the 'crops' table
    $sql = "INSERT INTO crops (district, farmer_name, field_location, crop_type, harvest_date, quantity, batch_number) 
            VALUES ('$district', '$farmerName', '$fieldLocation', '$crop', '$harvestDate', '$quantity', '$batchNumber')";

    // Execute the query and check for success
    if ($conn->query($sql) === TRUE) {
        echo "New crop added successfully with Batch Number: $batchNumber";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close the connection
$conn->close();
?>
