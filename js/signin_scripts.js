$(document).ready(function(){
    
    $("#js-login-modal-form").submit(function(e){

        function errorMessageShow(loginMessage) {
            $("#js-login-modal-message-wrapper").html(loginMessage);
            $("#js-login-modal-message").slideDown(350);
            $(".login-form-input").css("border-color", "rgb(190,115,110)");
        }

        e.preventDefault();
        
        var emailValue = $("#js-login-email").val();
        var passwordValue = $("#js-login-password").val();
        var rememberMeValue = $("#js-login-remember-checkbox").prop("checked");
        var rememberMe = "";
        if (rememberMeValue == true) {
            rememberMe = "on";
        } else {
            rememberMe = "off";
        }
        var emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g;

        if (emailValue == "" || passwordValue == "") {
            var loginMessage = "<div id=\"js-login-modal-message\" class=\"login-modal-message login-error-message\"><p class=\"text-14\">Wrong e-mail or password.</p></div>";
            errorMessageShow(loginMessage);
        } else {
            if (emailRegex.test(emailValue) == false) {
                var loginMessage = "<div id=\"js-login-modal-message\" class=\"login-modal-message login-error-message\"><p class=\"text-14\">Wrong e-mail or password.</p></div>";
                errorMessageShow(loginMessage);
            } else {
                $.ajax({
                    url : "./includes/signin.script.php",
                    method : "POST",
                    data : {
                        emailValue : emailValue,
                        passwordValue : passwordValue,
                        rememberMe : rememberMe,
                        submit : 1
                    },
                    success : function(data) {
                      $("#js-login-modal-message-wrapper").html(data);
                    }
                });
            }
        }

    });

    

});