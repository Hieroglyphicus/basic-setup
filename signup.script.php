<?php
    if (isset($_POST["submit"])) {
        include_once "dbconn.script.php";
        $nameValue = $_POST["nameValue"];
        $surnameValue = $_POST["surnameValue"];
        $emailValue = $_POST["emailValue"];
        $passwordValue = $_POST["passwordValue"];
        $passwordConfirmValue = $_POST["passwordConfirmValue"];
        $countryValue = $_POST["countryValue"];
        $userRoleValue = 1;
        
        // ERROR VARIABLES

        $nameCharTypeError = false;
        $nameCharNoError = false;
        $surnameCharTypeError = false;
        $surnameCharNoError = false;
        $emailValidError = false;
        $emailExistError = false;
        $passwordCharNoError = false;
        $passwordConfirmMatchError = false;
        $countryError = false;

        // ERROR HANDLERS

        // Check if input FIRST NAME characters are valid
        if (!preg_match_all("/^[\x{0041}-\x{005A}\x{0061}-\x{007A}\x{00C0}-\x{00D6}\x{00D8}-\x{00F6}\x{00F8}-\x{01BF}\x{01C4}-\x{024F}]+$/u", $nameValue)) {
            $nameCharTypeError = true;
        }
        // Check if number of FIRST NAME characters is valid
        if (strlen($nameValue) < 2) {
            $nameCharNoError = true;
        }
        // Check if input LAST NAME characters are valid
        if (!preg_match_all("/^[\x{0041}-\x{005A}\x{0061}-\x{007A}\x{00C0}-\x{00D6}\x{00D8}-\x{00F6}\x{00F8}-\x{01BF}\x{01C4}-\x{024F}]+$/u", $surnameValue)) {
            $surnameCharTypeError = true;
        }
        // Check if number of LAST NAME characters is valid
        if (strlen($surnameValue) < 2) {
            $surnameCharNoError = true;
        }
        // Check if EMAIL is valid
        if (!filter_var($emailValue, FILTER_VALIDATE_EMAIL)) {
            $emailValidError = true;
        }
        // PREPARED STATEMENT
        // Create template
        $sql = "SELECT e_mail FROM hieroglyphicus_users WHERE e_mail=?;";
        // Create prepared statement
        $stmt = mysqli_stmt_init($conn);
        // Prepare the prepared statement
        if (!mysqli_stmt_prepare($stmt, $sql)) {
            echo "SQL statement failed!";
            exit();
        }
        // Bind parameters to the placeholder
        mysqli_stmt_bind_param($stmt, "s", $emailValue);
        // Run parameters inside database
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);
        $resultCheck = mysqli_num_rows($result);
        if ($resultCheck > 0) {
            $emailExistError = true;
        }
        // Check if password number of characters is valid
        if (strlen($passwordValue) < 8) {
            $passwordCharNoError = true;
        }
        // Check if passwords match
        if ($passwordValue != $passwordConfirmValue) {
            $passwordConfirmMatchError = true;
        }
        if ($countryValue == "") {
            $countryError = true;
        }
        //Hashing passwords
        $hashedPasswordValue = password_hash(base64_encode(hash('sha384', $passwordValue, true)), PASSWORD_BCRYPT, ["cost" => 11]);

        if ($nameCharTypeError == false && $nameCharNoError == false && $surnameCharTypeError == false && $surnameCharNoError == false && $emailValidError == false && $emailExistError == false && $passwordCharNoError == false && $passwordConfirmMatchError == false && $countryError == false) {
            //Insert a user into the database
            // PREPARED STATEMENT
            // Create template
            $sql = "INSERT INTO hieroglyphicus_users (first_name, last_name, e_mail, user_pw, user_role, country) VALUES (?, ?, ?, ?, ?, ?);";
            // Create prepared statement
            $stmt = mysqli_stmt_init($conn);
            // Prepare the prepared statement
            if (!mysqli_stmt_prepare($stmt, $sql)) {
                echo "SQL statement failed!";
                exit();
            } else {
                // Bind parameters to the placeholder
                mysqli_stmt_bind_param($stmt, "ssssis", $nameValue, $surnameValue, $emailValue, $hashedPasswordValue, $userRoleValue, $countryValue);
                //Run parameters inside database
                mysqli_stmt_execute($stmt);
                echo "
                    <div class='registration-success-message'>
                        <p class='text-14'>You've been successfuly registered! You will be redirected to the home page in a few seconds...</p>
                    </div>";
                echo "
                    <script>
                        setTimeout(function(){
                            $('#js-registration-form').fadeOut(750);
                            setTimeout(function(){
                                $('.registration-success-message').fadeIn(750);
                            }, 750);
                        }, 500);
                    </script>
                ";
                echo "
                    <script>
                        setTimeout(function(){
                            window.location.replace('./index.php');
                        }, 3000);
                    </script>
                ";
                // Close statement
                mysqli_stmt_close($stmt);
                // Close connection
                mysqli_close($conn);
                exit();
            }   
        }
        
    } else {
        header("Location: ../registration.php");   
        exit();
    }

?>

<script>
    
    var emailExistError = "<?php echo $emailExistError; ?>";

    if (emailExistError == true) {
        var errorMessage = "<div class='error-message error-pointer'><p>Email address is already in use.</p></div>";
        $("#js-email-error-div").html(errorMessage);
        $(".validation-message-div").css("display", "flex");
        $("#js-registration-email").css("border-color", "rgb(190,115,110)");
        $('#js-registration-form').find('input, select, button').prop('disabled', false);
    } else {
        var errorMessage = "<div class='success-message'><p>Looking good!</p></div>";
        $("#js-email-error-div").html(errorMessage);
        $(".validation-message-div").css("display", "flex");
        $("#js-registration-email").css("border-color", "rgb(95,160,95)");
    }

</script>
