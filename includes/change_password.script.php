<?php 
if (isset($_POST["submit"])) {
    include_once "dbconn.script.php";
    
    $userId = $_POST["userIdentification"];
    $oldPasswordValue = $_POST["oldPasswordValue"];
    $changePasswordValue = $_POST["changePasswordValue"];
    $changePasswordConfirmValue = $_POST["changePasswordConfirmValue"];
    $changePasswordValueLength = strlen($changePasswordValue);
    
    // Checking old password and user match
    $sql = "SELECT user_id, user_pw FROM hieroglyphicus_db.hieroglyphicus_users WHERE user_id = ?";
    $stmt = mysqli_stmt_init($conn);
    if (!mysqli_stmt_prepare($stmt, $sql)) {
        echo "<p>SQL statement failed!</p>";
        exit();
    } else {
        mysqli_stmt_bind_param($stmt, "s", $userId);
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);
        $resultCheck = mysqli_num_rows($result);
        if ($resultCheck == 0) {
            echo "<p>There was some error.</p>";
            exit();
        } else {
            $row = mysqli_fetch_assoc($result);
            $oldPasswordEncrypt = base64_encode(hash("sha384", $oldPasswordValue, true));
            $hashedPwCheck = password_verify($oldPasswordEncrypt, $row["user_pw"]);
            if ($hashedPwCheck == false) {
                echo "<p>Old password you entered is invalid.</p>";
                exit();
            } elseif ($hashedPwCheck == true) {
                if ($changePasswordValueLength < 8) {
                    echo "<p>Password should have at least 8 characters.<p>";
                    exit();
                } else {
                    if ($changePasswordConfirmValue != $changePasswordValue) {
                        echo "<p>Passwords you entered does not match.</p>";
                        exit();
                    } else {
                        $hashedChangePassword = password_hash(base64_encode(hash('sha384', $changePasswordValue, true)), PASSWORD_BCRYPT, ["cost" => 11]);
                        $sql = "UPDATE hieroglyphicus_users SET user_pw = ? WHERE user_id = ?";
                        $stmt = mysqli_stmt_init($conn);
                        if (!mysqli_stmt_prepare($stmt, $sql)) {
                            echo "<p>SQL statement failed!</p>";
                            exit();
                        } else {
                            mysqli_stmt_bind_param($stmt, "ss", $hashedChangePassword, $userId);
                            mysqli_stmt_execute($stmt);
                            mysqli_stmt_close($stmt);
                            echo "<p>You successfully changed your password!</p>";
                        }
                    }
                }
                mysqli_close($conn);
            }
        }
    }

} else {
    header("Location: ../index.php");
}

?>