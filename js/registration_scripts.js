$(document).ready(function(){

    /* -----------------------------------------------------
    -------------------- PASSWORD DISPLAY ------------------
    ----------------------------------------------------- */

    /* -------- Password Display Hidden -------- */

    $("#js-registration-password-display").click(function(){
        var fieldType = $("#js-registration-password").attr("type");
        if (fieldType == "password") {
            $("#js-registration-password").attr("type", "text");
            $("#js-registration-password-display").removeClass("hide-password").addClass("show-password");
        } else {
            $("#js-registration-password").attr("type", "password");
            $("#js-registration-password-display").removeClass("show-password").addClass("hide-password");
        }
    });

    /* -------- Confirm Password Display Hidden -------- */

    $("#js-registration-password-confirm-display").click(function(){
        var fieldType = $("#js-registration-password-confirm").attr("type");
        if (fieldType == "password") {
            $("#js-registration-password-confirm").attr("type", "text");
            $("#js-registration-password-confirm-display").removeClass("hide-password").addClass("show-password");
        } else {
            $("#js-registration-password-confirm").attr("type", "password");
            $("#js-registration-password-confirm-display").removeClass("show-password").addClass("hide-password");
        }
    });

    /* -----------------------------------------------------
    ----------- REGISTRATION FORM ERROR HANDLERS -----------
    ----------------------------------------------------- */

$("#js-registration-form").submit(function(e) {

    e.preventDefault();
    $('#js-registration-form').find('input, select, button').prop('disabled', true);
    var noError = false;
    var allAlphaRegex = /^[\u0041-\u005A\u0061-\u007A\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u01BF\u01C4-\u024F]+$/g;
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g;

    // Name checker

        var noErrorName = false;
        var nameValue = $("#js-registration-name").val().trim();
        var nameValueLength = nameValue.length;
        if (nameValueLength > 1) {
            var nameCharNo = true;
        } else {
            var nameCharNo = false;
        }
        if (nameValue.match(allAlphaRegex)) {
            var nameCharType = true;
        } else {
            var nameCharType = false;
        }
        if (nameCharNo == false || nameCharType == false) {
            $(".validation-message-div").css("display", "flex");
            $("#js-registration-name").css("border-color", "rgb(190,115,110)");
            if (nameCharNo == false && nameCharType == true) {
                var errorMessage = "<div class='error-message error-pointer'><p>Name should have at least 2 characters.</p></div>";
                $("#js-name-error-div").html(errorMessage);
            } else if (nameCharNo == true && nameCharType == false) {
                var errorMessage = "<div class='error-message error-pointer'><p>Name must contain only letters.</p></div>";
                $("#js-name-error-div").html(errorMessage);
            } else {
                var errorMessage = "<div class='error-message error-pointer'><p>Name must have at least 2 characters, and it can contain letters only.</p></div>";
                $("#js-name-error-div").html(errorMessage);
            }
        } else {
            var errorMessage = "<div class='success-message'><p>Looking good!</p></div>";
            $("#js-name-error-div").html(errorMessage);
            $(".validation-message-div").css("display", "flex");
            $("#js-registration-name").css("border-color", "rgb(95,160,95)");
            noErrorName = true;
        }

    // Surname checker

        var noErrorSurname = false;
        var surnameValue = $("#js-registration-surname").val().trim();
        var surnameValueLength = surnameValue.length;
        if (surnameValueLength > 1) {
            var surnameCharNo = true;
        } else {
            var surnameCharNo = false;
        }
        if (surnameValue.match(allAlphaRegex)) {
            var surnameCharType = true;
        } else {
            var surnameCharType = false;
        }
        if (surnameCharNo == false || surnameCharType == false) {
            if (surnameCharNo == false && surnameCharType == true) {
                var errorMessage = "<div class='error-message error-pointer'><p>Name should have at least 2 characters.</p></div>";
                $(".validation-message-div").css("display", "flex");
                $("#js-registration-surname").css("border-color", "rgb(190,115,110)");
                $("#js-surname-error-div").html(errorMessage);
            } else if (surnameCharNo == true && surnameCharType == false) {
                var errorMessage = "<div class='error-message error-pointer'><p>The name can only contain letters.</p></div>";
                $(".validation-message-div").css("display", "flex");
                $("#js-registration-surname").css("border-color", "rgb(190,115,110)");
                $("#js-surname-error-div").html(errorMessage);
            } else {
                var errorMessage = "<div class='error-message error-pointer'><p>Name must have at least 2 characters, and it can contain only letters.</p></div>";
                $(".validation-message-div").css("display", "flex");
                $("#js-registration-surname").css("border-color", "rgb(190,115,110)");
                $("#js-surname-error-div").html(errorMessage);
            } 
        } else {
            var errorMessage = "<div class='success-message'><p>Looking good!</p></div>";
            $("#js-surname-error-div").html(errorMessage);
            $(".validation-message-div").css("display", "flex");
            $("#js-registration-surname").css("border-color", "rgb(95,160,95)");
            noErrorSurname = true;
        }

    // Email checker

        var noErrorEmail = false;
        var emailValue = $("#js-registration-email").val().trim();
        if (emailValue.match(emailRegex)) {
            var emailValid = true;
        } else {
            var emailValid = false;
        }
        if (emailValid == false) {
            var errorMessage = "<div class='error-message error-pointer'><p>E-mail address is in invalid format.</p></div>";
            $("#js-email-error-div").html(errorMessage);
            $(".validation-message-div").css("display", "flex");
            $("#js-registration-email").css("border-color", "rgb(190,115,110)");
        } else {
            var errorMessage = "<div class='success-message'><p>Looking good!</p></div>";
            $("#js-email-error-div").html(errorMessage);
            $(".validation-message-div").css("display", "flex");
            $("#js-registration-email").css("border-color", "rgb(95,160,95)");
            noErrorEmail = true;
        }

    // Password checker

        var noErrorPassword = false;
        var passwordValue = $("#js-registration-password").val();
        var passwordValueLength = passwordValue.length;
        if (passwordValueLength < 8) {
            var errorMessage = "<div class='error-message error-pointer'><p>Password should have at least 8 characters.</p></div>";
            $("#js-password-error-div").html(errorMessage);
            $(".validation-message-div").css("display", "flex");
            $("#js-registration-password").css("border-color", "rgb(190,115,110)");
        } else {
            var errorMessage = "<div class='success-message'><p>Looking good!</p></div>";
            $("#js-password-error-div").html(errorMessage);
            $(".validation-message-div").css("display", "flex");
            $("#js-registration-password").css("border-color", "rgb(95,160,95)");
            noErrorPassword = true;
        }

    // Confirm password checker

        var noErrorPasswordConfirm = false;
        var passwordConfirmValue = $("#js-registration-password-confirm").val();
        if (passwordValueLength < 8) {
            $("#js-password-confirm-error-div").css("display", "none");
            $("#js-password-confirm-error-div").empty();
            $("#js-registration-password-confirm").css("border-color", "rgb(225,225,225)");
        } else {
            if (passwordValue != passwordConfirmValue) {
                var errorMessage = "<div class='error-message error-pointer'><p>Password doesn't match.</p></div>";
                $("#js-password-confirm-error-div").html(errorMessage);
                $(".validation-message-div").css("display", "flex");
                $("#js-registration-password-confirm").css("border-color", "rgb(190,115,110)");
            } else {
                var errorMessage = "<div class='success-message'><p>Password match.</p></div>";
                $("#js-password-confirm-error-div").html(errorMessage);
                $(".validation-message-div").css("display", "flex");
                $("#js-registration-password-confirm").css("border-color", "rgb(95,160,95)");
                noErrorPasswordConfirm = true;
            }
        }

    // Country checker

        var noErrorCountry = false;
        var countryValue = $("#js-registration-country option:selected").val();
        if (countryValue == "") {
            var errorMessage = "<div class='error-message error-pointer'><p>Please, choose your country.</p></div>";
            $("#js-country-error-div").html(errorMessage);
            $(".validation-message-div").css("display", "flex");
            $("#js-registration-country").css("border-color", "rgb(190,115,110)");
        } else {
            var errorMessage = "<div class='success-message'><p>Looking good!</p></div>";
            $("#js-country-error-div").html(errorMessage);
            $(".validation-message-div").css("display", "flex");
            $("#js-registration-country").css("border-color", "rgb(95,160,95)");
            noErrorCountry = true;
        }

        if (noErrorName == false || noErrorSurname == false || noErrorEmail == false || noErrorPassword == false || noErrorPasswordConfirm == false || noErrorCountry == false) {
            $('#js-registration-form').find('input, select, button').prop('disabled', false);
            noError = false;
        } else {
            noError = true;
        }

        if (noError == true) {
            $.ajax({
                url : "./includes/signup.script.php",
                method : "POST",
                data : {
                    nameValue : nameValue,
                    surnameValue : surnameValue,
                    emailValue : emailValue,
                    passwordValue : passwordValue,
                    passwordConfirmValue : passwordConfirmValue,
                    countryValue : countryValue,
                    submit : 1
                },
                success : function(data) {
                  $(".registration-message").html(data);
                }
            });
        } else {
            // Error pointer
            $("html, body").animate({
                scrollTop: $('.error-pointer:first').parents(".registration-form-elements").offset().top
            }, 1000);
        }

    });
    
});