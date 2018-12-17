<?php
    include_once "dbconn.script.php";

    if (isset($_POST["logout-button"])) {
        session_start();
        // Delete remembered login from db
        list($selector, $validator, $userRole) = explode(':', $_COOKIE['rememberMe']);
        $sql = "DELETE FROM hieroglyphicus_remember WHERE remember_selector=?";
        $stmt = mysqli_stmt_init($conn);
        if (!mysqli_stmt_prepare($stmt, $sql)) {
            echo "SQL statment failed";
        } else {
            mysqli_stmt_bind_param($stmt, "s", $selector);
            mysqli_stmt_execute($stmt);
            mysqli_close($conn);
        }
        setcookie("rememberMe", "", time()-1, "/");
        session_unset();
        session_destroy();
        header("Location: ../index.php");
        exit();
    }
?>
