<?php 
    include_once "./includes/header.php";
?>

    <!-- MAIN PAGE CONTENT -->

    <main>
        <div class="main-content">
            <div class="page-title">
                <h1>Change password</h1>
            </div>
            <div class="page-content">
                <div class="page-subcontent-wrapper">
                    <div class="page-subcontent-section">
                        <form id="js-change-password-form" class="change-user-password-wrapper" method="POST" action="" autocomplete="off" accept-charset="UTF-8" novalidate>
                            <div class="change-user-password">
                                <div class="change-user-password-element">
                                    <label for="js-old-password-input">Old password:</label>
                                    <div id="js-old-password-display" class="password-display hide-password"></div>
                                </div>
                                <div class="change-password-input-wrapper">
                                    <input id="js-old-password-input" type="password">
                                    <div id="js-old-password-message" class="validation-message-div"></div>
                                </div>
                            </div>
                            <div class="change-user-password">
                                <div class="change-user-password-element">
                                    <label for="js-change-password-input">New password:</label>
                                    <div id="js-change-password-display" class="password-display hide-password"></div>
                                </div>
                                <div class="change-password-input-wrapper">
                                    <input id="js-change-password-input" type="password">
                                    <div id="js-change-password-message" class="validation-message-div"></div>
                                </div>
                            </div>
                            <div class="change-user-password">
                                <div class="change-user-password-element">
                                    <label for="js-change-password-confirm-input">Confirm password:</label>
                                    <div id="js-change-password-confirm-display" class="password-display hide-password"></div>
                                </div>
                                <div class="change-password-input-wrapper">
                                    <input id="js-change-password-confirm-input" type="password">
                                    <div id="js-change-password-confirm-message" class="validation-message-div"></div>
                                </div>
                            </div>
                            <div class="change-user-password-button">
                                <button id="js-change-password-button" class="default-button" type="submit">Submit</button>
                            </div>
                        </form>
                        <div class="change-user-password">
                            <div class="change-user-password-message-success">
                                <p>You successfully changed your password. For security reasons, we advise you to sign out now and sign in again with new password.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script>
            var userIdentification = <?php echo $_SESSION["userid"]; ?>;
        </script>
        <script src="./js/change_password.js">
        </script>
    </main>

<?php 
    include_once "./includes/footer.php";
?>