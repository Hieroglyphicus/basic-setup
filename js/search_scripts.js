$(document).ready(function(){
    
    // Variables initializations
    var searchGardinerValue = "";
    var searchTransliterationValue = "";
    var searchTranslationValue = "";

    // Functions
    /* -------- GARDINER'S CODE -------- */
    function searchGardiners(page) {
        $.ajax({
            url : "./includes/search_engine/search_gardiners.script.php",
            method : "POST",
            data : {
                page : page,
                searchGardinerValue : searchGardinerValue
            },
            success : function(data) {
                $("#js-search-result-gardiners").html(data);
            }
        });
    }
    /* -------- TRANSLITERATION -------- */
    function searchTransliteration(page){
        $.ajax({
            url : "./includes/search_engine/search_transliteration.script.php",
            method : "POST",
            data : {
                page : page,
                searchTransliterationValue : searchTransliterationValue
            },
            success : function(data) {
                $("#js-search-result-transliteration").html(data);
            }
        });
    }
    /* -------- TRANSLATION -------- */
    function searchTranslation(page){
        $.ajax({
            url : "./includes/search_engine/search_translation.script.php",
            method : "POST",
            data : {
                page : page,
                searchTranslationValue : searchTranslationValue
            },
            success : function(data){
                $("#js-search-result-translation").html(data);
            }
        });
    }

    /* SEARCH BY GARDINER'S CODE */

    // By pressing ENTER
    $("#js-search-gradiners").keyup(function(e){
        if (e.keyCode == 13) {
            searchGardinerValue = $(this).val().trim();
            searchGardiners();
        }
    });
    // By pressing BUTTON
    $("#js-search-gradiners-button").click(function(){
        searchGardinerValue = $("#js-search-gradiners").val().trim();
        searchGardiners();
    });
    // By clicking on pagination number
    $("#js-search-result-gardiners").on("click", ".pagination-link", function(){
        if(searchGardinerValue) {
        var page = $(this).prop("id");
        searchGardiners(page, searchGardinerValue);
        }
    });

    /* SEARCH BY TRANSLITERATION */

    // By pressing ENTER
    $("#js-search-transliteration").keyup(function(e){
        if (e.keyCode == 13) {
            searchTransliterationValue = $(this).val().trim();
            searchTransliteration();
        }
    });
    // By pressing BUTTON
    $("#js-search-transliteration-button").click(function(){
        searchTransliterationValue = $("#js-search-transliteration").val().trim();
        searchTransliteration();
    });
    // By clicking on pagination number
    $("#js-search-result-transliteration").on("click", ".pagination-link", function(){
        if(searchTransliterationValue) {
        var page = $(this).prop("id");
        searchTransliteration(page, searchTransliterationValue);
        }
    });

    /* SEARCH BY TRANSLATION */

    // By pressing ENTER
    $("#js-search-translation").keyup(function(e){
        if (e.keyCode == 13) {
            searchTranslationValue = $(this).val().trim();
            searchTranslation();
        }
    });
    // By pressing BUTTON
    $("#js-search-translation-button").click(function(){
        searchTranslationValue = $("#js-search-translation-button").val().trim();
        searchTranslation();
    });
    // By clicking on pagination number
    $("#js-search-result-translation").on("click", ".pagination-link", function(){
        if(searchTranslationValue) {
        var page = $(this).prop("id");
        searchTranslation(page, searchTranslationValue);
        }
    });
    

});

    