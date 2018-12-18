$(document).ready(function(){
    
    // Password validators

    $("#js-change-password-form").submit(function(e){
        e.preventDefault();

        var oldPasswordValue = $("#js-old-password-input").val();
        var oldPasswordValueLength = oldPasswordValue.length;
        var changePasswordValue = $("#js-change-password-input").val();
        var changePasswordValueLength = changePasswordValue.length;
        var changePasswordConfirmValue = $("#js-change-password-confirm-input").val();

        // Error variables
        var noErrorOldPassword = false;
        var noErrorChangePassword = false;
        var noErrorChangePasswordConfirm = false;

        if (oldPasswordValueLength < 8) {
            var errorMessage = "<div class='error-message error-pointer'><p>Old password should have at least 8 characters.</p></div>";
            $("#js-old-password-message").html(errorMessage);
            $(".validation-message-div").css("display", "flex");
            $("#js-old-password-input").css("border-color", "rgb(190,115,110)");
        } else {
            var errorMessage = "<div class='success-message'><p>Looking good!</p></div>";
            $("#js-old-password-message").html(errorMessage);
            $(".validation-message-div").css("display", "flex");
            $("#js-old-password-input").css("border-color", "rgb(95,160,95)");
            noErrorOldPassword = true;
        }

        if (changePasswordValueLength < 8) {
            var errorMessage = "<div class='error-message error-pointer'><p>Password should have at least 8 characters.</p></div>";
            $("#js-change-password-message").html(errorMessage);
            $(".validation-message-div").css("display", "flex");
            $("#js-change-password-input").css("border-color", "rgb(190,115,110)");
        } else {
            var errorMessage = "<div class='success-message'><p>Looking good!</p></div>";
            $("#js-change-password-message").html(errorMessage);
            $(".validation-message-div").css("display", "flex");
            $("#js-change-password-input").css("border-color", "rgb(95,160,95)");
            noErrorChangePassword = true;
        }

        if (changePasswordValueLength < 8) {
            $("#js-change-password-confirm-message").css("display", "none");
            $("#js-change-password-confirm-message").empty();
            $("#js-change-password-confirm-input").css("border-color", "rgb(225,225,225)");
        } else {
            if (changePasswordConfirmValue != changePasswordValue) {
                var errorMessage = "<div class='error-message error-pointer'><p>Password doesn't match.</p></div>";
                $("#js-change-password-confirm-message").html(errorMessage);
                $(".validation-message-div").css("display", "flex");
                $("#js-change-password-confirm-input").css("border-color", "rgb(190,115,110)");
            } else {
                var errorMessage = "<div class='success-message'><p>Password match.</p></div>";
                $("#js-change-password-confirm-message").html(errorMessage);
                $(".validation-message-div").css("display", "flex");
                $("#js-change-password-confirm-input").css("border-color", "rgb(95,160,95)");
                noErrorChangePasswordConfirm = true;
            }
        }

        if (noErrorChangePassword == true && noErrorChangePasswordConfirm == true && noErrorOldPassword == true) {
            $("#js-change-password-form").find("input, select, button").prop("disabled", true);
            setTimeout(function(){
                $("#js-change-password-form").fadeOut(750);
                setTimeout(function(){
                    $(".change-user-password-message-success").fadeIn(750);
                    setTimeout(function(){
                        window.location.replace('./profile.php');
                    }, 5000);
                }, 750);
            }, 500);
            $.ajax({
                url : "./includes/change_password.script.php",
                method : "POST",
                data : {
                    oldPasswordValue : oldPasswordValue,
                    changePasswordValue : changePasswordValue,
                    changePasswordConfirmValue : changePasswordConfirmValue,
                    userIdentification : userIdentification,
                    submit : 1
                },
                success : function(data) {
                  $(".change-user-password-message-success").html(data);
                }
            });
        }
        
    });

/* ---------------------------------------------------------
    -------------------- PASSWORD DISPLAY ------------------
    ----------------------------------------------------- */

    /* -------- Password Display Hidden -------- */

    $("#js-old-password-display").click(function(){
        var fieldType = $("#js-old-password-input").attr("type");
        if (fieldType == "password") {
            $("#js-old-password-input").attr("type", "text");
            $("#js-old-password-display").removeClass("hide-password").addClass("show-password");
        } else {
            $("#js-old-password-input").attr("type", "password");
            $("#js-old-password-display").removeClass("show-password").addClass("hide-password");
        }
    });

    /* -------- Password Display Hidden -------- */

    $("#js-change-password-display").click(function(){
        var fieldType = $("#js-change-password-input").attr("type");
        if (fieldType == "password") {
            $("#js-change-password-input").attr("type", "text");
            $("#js-change-password-display").removeClass("hide-password").addClass("show-password");
        } else {
            $("#js-change-password-input").attr("type", "password");
            $("#js-change-password-display").removeClass("show-password").addClass("hide-password");
        }
    });

    /* -------- Confirm Password Display Hidden -------- */

    $("#js-change-password-confirm-display").click(function(){
        var fieldType = $("#js-change-password-confirm-input").attr("type");
        if (fieldType == "password") {
            $("#js-change-password-confirm-input").attr("type", "text");
            $("#js-change-password-confirm-display").removeClass("hide-password").addClass("show-password");
        } else {
            $("#js-change-password-confirm-input").attr("type", "password");
            $("#js-change-password-confirm-display").removeClass("show-password").addClass("hide-password");
        }
    });

});