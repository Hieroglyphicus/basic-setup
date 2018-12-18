$(document).ready(function(){

    $(".unloggedin-content").css("display", "block");

// Open, close and switch between dropdown menus

    $(document).click(function() {
        $(".submenu").removeClass("flexbox-element");
    });
    $("li.js-mm-dd-link > a").click(function(e){
        e.stopPropagation();
        $(this).parent().find("ul").first().toggleClass("flexbox-element");
        $(this).parent().siblings().find("ul").removeClass("flexbox-element");
        $(".unloggedin-content").css("display", "block");
    });

// Open and close Small Menus

    $(document).click(function() {
        $("#js-small-menu").hide();
        $(".small-submenu").removeClass("flexbox-element");
    });
    $("#js-show-small-menu").click(function(e) {
        e.stopPropagation();
        var displayStatusS = $("#js-small-menu").css("display");
        if (displayStatusS == "none") {
            $("#js-small-menu").slideDown();
            $("#js-small-menu").css("display", "flex");
        } else {
            $("#js-small-menu").slideUp();
        }
        $(".small-submenu").hide();
    });

// Open, close and switch between small dropmenus

    $(document).click(function() {
        $(".small-submenu").removeClass("flexbox-element");
    });
    $("li.js-sm-dd-link > a").click(function(e){
        e.stopPropagation();
        $(this).parent().find("ul").first().toggleClass("flexbox-element", 500);
        $(this).parent().siblings().find("ul").removeClass("flexbox-element");
        $(".unloggedin-content").css("display", "block");
    });

// LOGIN MODAL WINDOW OPEN & CLOSE

    $("#login-button, #small-nav-login, #js-logged-in-from-notice").click(function() {
        $(".lg-modal-display").css("display","flex"); // Open modal
        setTimeout(function(){
            $(".lg-modal-display").find("input:first").fadeIn(500).focus();     // Set first field in focus on model open
        }, 500);
        $("#js-login-password").attr("type", "password");          // Reset password field to type="password"
        $("#js-password-display").removeClass("show-password").addClass("hide-password"); // Reset eye
        $("#login-remember-checkbox").prop("checked", false);   // Uncheck Remember me on modal open
        $(".modal-body input").val("");                         // Erase all fields on modal open
    });
    $("#js-close-lg-modal-x").click(function(){
        $(".lg-modal-display").css("display","none");
        $("#js-login-modal-message").hide();            // Hide login message on modal closing
    });
    var lgmodal = $(".lg-modal-display").get(0);
    $(window).click(function(e) {
        if (e.target == lgmodal) {
            $(lgmodal).css("display","none");
            $("#js-login-modal-message").hide();        // Hide login message on modal closing
        }
    });

/* -----------------------------------------------------
   ------------------ PASSWORD DISPLAY -----------------
   ----------------------------------------------------- */

// -------- Login Modal Password ------- //

    $("#js-login-password-display").click(function(){
        var fieldType = $("#js-login-password").attr("type");
        if (fieldType == "password") {
            $("#js-login-password").attr("type", "text");
            $("#js-login-password-display").removeClass("hide-password").addClass("show-password");
        } else {
            $("#js-login-password").attr("type", "password");
            $("#js-login-password-display").removeClass("show-password").addClass("hide-password");
        }
    });

// UNAVAILABLE MODAL WINDOW OPEN & CLOSE

    $(".unavailable-content").click(function(){
        $(".un-modal-display").css("display","flex");
    });
    $("#js-close-un-modal-x").click(function(){
        $(".un-modal-display").css("display","none");
    });
    var unmodal = $(".un-modal-display").get(0);
    $(window).click(function(event) {
        if (event.target == unmodal) {
            $(unmodal).css("display","none");
        }
    });

// UNLOGGEDIN MODAL WINDOW OPEN & CLOSE

    $(".unloggedin-content").click(function() {
        $(".ul-modal-display").css("display","flex");
    });
    $("#js-close-ul-modal-x").click(function() {
        $(".ul-modal-display").css("display","none");
    });
    var ulmodal = $(".ul-modal-display").get(0);
    $(window).click(function(event) {
        if (event.target == ulmodal) {
            $(ulmodal).css("display","none");
        }
    });
    // On button click go to registration page
    $("#join-hgs-today-button").click(function(){
        $(".unloggedin-content").css("display","none");
        window.location.href = "./registration.php";
    });

    /* CLOSE UNLOGGED IN MODAL on 'logged in' click */

    $("#js-logged-in-from-notice").click(function(){
        $(".ul-modal-display").css("display","none");
    });

// CLOSE MODAL ON ESCAPE CLICK

    $(document).keyup(function(e){
        if (e.keyCode == 27) {
            $(".close-modal-x").trigger("click");
        }
    });


});