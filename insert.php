<!DOCTYPE html>
<html>

<head>
    <title>Insert Data</title>
</head>

<body>
    <center>
        <?php

		
		$conn = mysqli_connect("localhost", "root", "", "staff");
		
		if($conn === false){
			die("Could not connect. " . mysqli_connect_error());
		}
		
		$first_name = $_REQUEST['first_name'];
		$last_name = $_REQUEST['last_name'];
		$gender = $_REQUEST['gender'];
		$address = $_REQUEST['address'];
		$email = $_REQUEST['email'];
		
		$sql = "INSERT INTO college VALUES ('$first_name','$last_name','$gender','$address','$email')";
		
		if(mysqli_query($conn, $sql)){

			header("Location: index.html");
			
		} else{
			echo "ERROR: $sql. " . mysqli_error($conn);
		}
		
		mysqli_close($conn);
		?>
    </center>
</body>

</html>