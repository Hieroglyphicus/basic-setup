<?php
    session_start();

    if (isset($_POST["submit"])) {
        include_once "dbconn.script.php";

        $email = mysqli_real_escape_string($conn, $_POST["emailValue"]);
        $password = mysqli_real_escape_string($conn, $_POST["passwordValue"]);
        $rememberMe = $_POST["rememberMe"];

        function showErrorMessage(){
            echo "
                <div id=\"js-login-modal-message\" class=\"login-modal-message login-error-message\">
                    <p class=\"text-14\">Wrong email or password.</p>
                </div>";
            echo "
                <script>
                    $(\"#js-login-modal-message\").slideDown(350);
                </script>
                ";
        }
        function showSuccessMessage(){
            echo "
                <div id=\"js-login-modal-message\" class=\"login-modal-message login-success-message\">
                    <p class=\"text-14\">Login successful.</p>
                </div>";
            echo "
                <script>
                    $(\"#js-login-modal-message\").slideDown(350);
                    $(\".login-form-input\").css(\"border-color\", \"rgb(95,160,95)\");
                    $(\"#js-login-modal-form\").find(\"input, button\").prop(\"disabled\", true);
                    setTimeout(function(){
                        window.location.replace(\"./index.php\");
                    }, 1000);
                </script>
                ";
        }

        // ERROR VARIABLES
        $emailError = false;
        $passwordError = false;

        // Checking for empty email or password field
        if (empty($email) || empty($password)) {
            $emailError = true;
            $passwordError = true;
            showErrorMessage();
        } else {
            // Checking for user existence
            $sql = "SELECT * FROM hieroglyphicus_users WHERE e_mail=?";
            $stmt = mysqli_stmt_init($conn);
            if (!mysqli_stmt_prepare($stmt, $sql)) {
                echo "SQL statment 1 failed";
            } else {
                mysqli_stmt_bind_param($stmt, "s", $email);
                mysqli_stmt_execute($stmt);
                $result = mysqli_stmt_get_result($stmt);
                $resultCheck = mysqli_num_rows($result);
                if ($resultCheck == 0) {
                    $emailError = true;
                    showErrorMessage();
                } else {
                    // Checking for password match
                    if ($row = mysqli_fetch_assoc($result)) {
                        $passwordEncrypt = base64_encode(hash("sha384", $password, true));
                        $hashedPwCheck = password_verify($passwordEncrypt, $row["user_pw"]);
                        if ($hashedPwCheck == false) {
                            $passwordError = true;
                            showErrorMessage();
                        } elseif ($hashedPwCheck == true) {
                            // Creating cookie if remember me is checked
                            if ($rememberMe == "on") {
                                $selector = base64_encode(random_bytes(9));
                                $validator = base64_encode(bin2hex(random_bytes(20)));
                                $hashedValidator = hash("sha256", $validator);
                                $dateTime = date("Y-m-d\TH:i:s", time() + 60);
                                $userid = $row["user_id"];
                                $userRole = $row["user_role"];
                                // Cookie setup
                                $cookie_name = "rememberMe";
                                $cookie_value =  $selector.":".$validator.":".$userRole;
                                $cookie_expire = time() + 60; // 5 minutes from now
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
                                $sql = "INSERT INTO hieroglyphicus_remember (remember_selector, remember_hashedValidator, remember_userid, remember_role, remember_expires) VALUES (?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE remember_selector=?, remember_hashedValidator=?, remember_role=?, remember_expires=?;";
                                // Create prepared statement
                                $stmt = mysqli_stmt_init($conn);
                                // Prepare the prepared statement
                                if (!mysqli_stmt_prepare($stmt, $sql)) {
                                    echo "SQL statement 2 failed!";
                                    exit();
                                } else {
                                    // Bind parameters to the placeholder
                                    mysqli_stmt_bind_param($stmt, "sssssssss", $selector, $hashedValidator, $userid, $userRole, $dateTime,  $selector, $hashedValidator, $userRole, $dateTime);
                                    //Run parameters inside database
                                    mysqli_stmt_execute($stmt);
                                    // Close statement
                                    mysqli_stmt_close($stmt);
                                    // Close connection
                                    mysqli_close($conn);
                                }
                            } else {
                                if(isset($_COOKIE["rememberMe"])) {
                                    setcookie("rememberMe", "");
                                }
                            }
                            $_SESSION["userid"] = $row["user_id"];
                            $_SESSION["userrole"] = $row["user_role"];
                            showSuccessMessage();
                            exit();
                        }
                    }
                }
            }
        }
    } else {
        header("Location: ../index.php");
        exit();
    }
    
?>
