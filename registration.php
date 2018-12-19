<?php 
    include_once "./includes/header.php";
?>

    <!-- MAIN PAGE CONTENT -->

    <main>
        <div class="main-content">
            <div class="page-title">
                <h1>Registration</h1>
            </div>
            <div class="page-content reg-form">
                <form id="js-registration-form" class="registration-form" action="" method="POST" novalidate autocomplete="off" accept-charset="UTF-8">
                    <div class="registration-form-elements">
                        <label for="js-registration-name">First name:</label>
                        <input id="js-registration-name" type="text">
                        <div id="js-name-error-div" class="validation-message-div"></div>
                    </div>
                    <div class="registration-form-elements">
                        <label for="js-registration-surname">Last name:</label>
                        <input id="js-registration-surname" type="text">
                        <div id="js-surname-error-div" class="validation-message-div"></div>
                    </div>
                    <div class="registration-form-elements">
                        <label for="js-registration-email">Email:</label>
                        <input id="js-registration-email" type="email">
                        <div id="js-email-error-div" class="validation-message-div"></div>
                    </div>
                    <div class="registration-form-elements">
                        <div class="password-wrapper">
                            <label for="">Password:</label>
                            <div id="js-registration-password-display" class="password-display hide-password"></div>
                        </div>
                        <input id="js-registration-password" type="password">
                        <div id="js-password-error-div" class="validation-message-div"></div>
                    </div>
                    <div class="registration-form-elements">
                        <div class="password-wrapper">
                            <label for="">Confirm password:</label>
                            <div id="js-registration-password-confirm-display" class="password-display hide-password"></div>
                        </div>
                        <input id="js-registration-password-confirm" type="password">
                        <div id="js-password-confirm-error-div" class="validation-message-div"></div>
                    </div>
                    <div class="registration-form-elements">
                        <label for="">Country:</label>
                        <select id="js-registration-country" name="" >
                            <option value="" disabled selected>Select country</option>
                            <option value="AFG">Afghanistan</option>
                            <option value="ALA">Åland Islands</option>
                        </select>
                        <div id="js-country-error-div" class="validation-message-div"></div>
                    </div>
                    <div class="registration-form-elements register-button-wrapper">
                        <button id="register-button" class="register-button" type="submit">Register</button>
                    </div>
                </form>
                <div id="js-registration-message" class="registration-message">
                    
                </div>
            </div>
        </div>
        <script src="./js/registration_scripts.js"></script>
    </main>
                    



<?php 
    include_once "./includes/footer.php";
?>