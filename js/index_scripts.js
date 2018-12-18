$(document).ready(function() {

    $("#search-options").prop("selectedIndex","gardiners-code"); // Reset search options field value

// Style change of tabs

    $(".tabbed").click(function() {
        $(this).addClass("active-tab");
        $(".tabbed").not(this).removeClass("active-tab");
    })

// Tab page switching (by tabs)

    $("#tab-gr").click(function(){
        $(".search-subpage").not("#tab-Gardiners").fadeOut(250);
        $("#tab-Gardiners").css("display", "flex").hide().delay(250).fadeIn(250);
        $("#search-options").val("gardiners-code");
    });
    $("#tab-tr").click(function(){
        $(".search-subpage").not("#tab-Transliteration").fadeOut(250);
        $("#tab-Transliteration").css("display", "flex").hide().delay(250).fadeIn(250);
        $("#search-options").val("transliteration");
    });
    $("#tab-tl").click(function(){
        $(".search-subpage").not("#tab-Translation").fadeOut(250);
        $("#tab-Translation").css("display", "flex").hide().delay(250).fadeIn(250);
        $("#search-options").val("translation");
    });

// Tab page switching (by dropdown)

    $("#search-options").change(function(){
        var choosenSearchOpt = $(this).val(); 
        if (choosenSearchOpt == "gardiners-code") {
            $(".search-subpage").not("#tab-Gardiners").fadeOut(250);
            $("#tab-Gardiners").css("display", "flex").hide().delay(250).fadeIn(250);
            $("#tab-gr").addClass("active-tab");
            $(".tabbed").not("#tab-gr").removeClass("active-tab");
        } else if (choosenSearchOpt == "transliteration") {
            $(".search-subpage").not("#tab-Transliteration").fadeOut(250);
            $("#tab-Transliteration").css("display", "flex").hide().delay(250).fadeIn(250);
            $("#tab-tr").addClass("active-tab");
            $(".tabbed").not("#tab-tr").removeClass("active-tab");
        } else if (choosenSearchOpt == "translation") {
            $(".search-subpage").not("#tab-Translation").fadeOut(250);
            $("#tab-Translation").css("display", "flex").hide().delay(250).fadeIn(250);
            $("#tab-tl").addClass("active-tab");
            $(".tabbed").not("#tab-tl").removeClass("active-tab");
        }
    });

}); // END of document ready