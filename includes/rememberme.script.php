<?php
if (empty($_SESSION['userid']) && !empty($_COOKIE['rememberMe'])) {
    list($selector, $validator, $userRole) = explode(':', $_COOKIE['rememberMe']);
    // Database check for match
    $sql = "SELECT * FROM hieroglyphicus_remember WHERE remember_selector=?";
    $stmt = mysqli_stmt_init($conn);
    if (!mysqli_stmt_prepare($stmt, $sql)) {
        echo "SQL statment failed";
    } else {
        mysqli_stmt_bind_param($stmt, "s", $selector);
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);
        $resultCheck = mysqli_num_rows($result);
        if ($resultCheck == 1) {
            $row = mysqli_fetch_assoc($result);
            if (hash_equals($row['remember_hashedValidator'], hash('sha256', $validator))) {
                $_SESSION['userid'] = $row['remember_userid'];
                $_SESSION['userrole'] = $row['remember_role'];
                $_SESSION["userName"] = $row["first_name"];
                $_SESSION["userSurname"] = $row["last_name"];
                $_SESSION["userCountry"] = $row["country"];
                $_SESSION["userEmail"] = $row["e_mail"];
                // New cookie issuing
                $validator = base64_encode(bin2hex(random_bytes(20)));
                $hashedValidator = hash('sha256', $validator);
                $dateTime = date('Y-m-d\TH:i:s', time() + 60);
                // Cookie setup
                $cookie_name = "rememberMe";
                $cookie_value =  $selector.':'.$validator.':'.$userRole;
                $cookie_expire = time() + 60*5; // 5 minutes from now
                $cookie_path = "/";
                /*
                $cookie_domain = NULL;
                $cookie_secure = FALSE;
                $cookie_httpOnly = TRUE;
                */
                // Set cookie
                setcookie($cookie_name, $cookie_value, $cookie_expire, $cookie_path);
                // Insert cookie data into database
                // PREPARED STATEMENT
                // Create template
                $sql = "UPDATE hieroglyphicus_remember SET remember_hashedValidator=?, remember_expires=? WHERE remember_selector=?;";
                // Create prepared statement
                $stmt = mysqli_stmt_init($conn);
                // Prepare the prepared statement
                if (!mysqli_stmt_prepare($stmt, $sql)) {
                    echo "SQL statement failed!";
                    exit();
                } else {
                    // Bind parameters to the placeholder
                    mysqli_stmt_bind_param($stmt, "sss", $hashedValidator, $dateTime, $selector);
                    //Run parameters inside database
                    mysqli_stmt_execute($stmt);
                    // Close statement
                    mysqli_stmt_close($stmt);
                }
            } else {
              echo "Error 1!";
            }              
        } else {
          echo "Error 2!";
        }
    }
}
// Close connection
mysqli_close($conn);
