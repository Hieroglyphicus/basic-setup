<?php

    include "./includes/dbconn.script.php";
    $user_id = $_GET["id"];
    $sql = "SELECT * FROM hieroglyphicus_db.hieroglyphicus_users WHERE user_id=?";
    $stmt = mysqli_stmt_init($conn);
    if (!mysqli_stmt_prepare($stmt, $sql)) {
        echo "SQL statment failed";
    } else {
        mysqli_stmt_bind_param($stmt, "i", $user_id);
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);
        $userData = mysqli_fetch_assoc($result);
        $userName = $userData["first_name"];
        $userSurname = $userData["last_name"];
        $userEmail = $userData["e_mail"];
        $userCountry = $userData["country"];
    }

?>
