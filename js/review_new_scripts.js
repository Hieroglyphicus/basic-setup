$(document).ready(function(){
    
    $("#js-entries-type-form").submit(function(e){
        e.preventDefault();
        
        var wordTypeValue = $("#js-entries-type-selector").find("option:selected").prop("value");

        if (wordTypeValue == "noun") {
            $(".entries-wrapper").empty();
            $.ajax({
                url : "./includes/review_entries_retrieve_scripts/retrieve_noun_entries.scripts.php",
                method : "POST",
                data : {
                    wordTypeValue : wordTypeValue,
                    submit : 1
                },
                success : function(data) {
                    $("#js-entries-noun-wrapper").html(data);
                }
            });
        } else if (wordTypeValue == "pronoun") {
            $(".entries-wrapper").empty();
            $.ajax({
                url : "./includes/review_entries_retrieve_scripts/retrieve_pronoun_personal_entries.scripts.php",
                method : "POST",
                data : {
                    wordTypeValue : wordTypeValue,
                    submit : 1
                },
                success : function(data) {
                    $("#js-entries-pronoun-personal-wrapper").html(data);
                }
            });
            $.ajax({
                url : "./includes/review_entries_retrieve_scripts/retrieve_pronoun_demonstrative_entries.scripts.php",
                method : "POST",
                data : {
                    wordTypeValue : wordTypeValue,
                    submit : 1
                },
                success : function(data) {
                    $("#js-entries-pronoun-demonstrative-wrapper").html(data);
                }
            });
            $.ajax({
                url : "./includes/review_entries_retrieve_scripts/retrieve_pronoun_interrogative_entries.scripts.php",
                method : "POST",
                data : {
                    wordTypeValue : wordTypeValue,
                    submit : 1
                },
                success : function(data) {
                    $("#js-entries-pronoun-interrogative-wrapper").html(data);
                }
            });
        } else if (wordTypeValue == "adjective") {
            $(".entries-wrapper").empty();
            $.ajax({
                url : "./includes/review_entries_retrieve_scripts/retrieve_adjective_entries.scripts.php",
                method : "POST",
                data : {
                    wordTypeValue : wordTypeValue,
                    submit : 1
                },
                success : function(data) {
                    $("#js-entries-adjective-wrapper").html(data);
                }
            });
        } else if (wordTypeValue == "preposition") {
            $(".entries-wrapper").empty();
            $.ajax({
                url : "./includes/review_entries_retrieve_scripts/retrieve_preposition_entries.scripts.php",
                method : "POST",
                data : {
                    wordTypeValue : wordTypeValue,
                    submit : 1
                },
                success : function(data) {
                    $("#js-entries-preposition-wrapper").html(data);
                }
            });
        } else if (wordTypeValue == "adverb") {
            $(".entries-wrapper").empty();
            $.ajax({
                url : "./includes/review_entries_retrieve_scripts/retrieve_adverb_entries.scripts.php",
                method : "POST",
                data : {
                    wordTypeValue : wordTypeValue,
                    submit : 1
                },
                success : function(data) {
                    $("#js-entries-adverb-wrapper").html(data);
                }
            });
        } else if (wordTypeValue == "number") {
            $(".entries-wrapper").empty();
            $.ajax({
                url : "./includes/review_entries_retrieve_scripts/retrieve_number_entries.scripts.php",
                method : "POST",
                data : {
                    wordTypeValue : wordTypeValue,
                    submit : 1
                },
                success : function(data) {
                    $("#js-entries-number-wrapper").html(data);
                }
            });
        } else if (wordTypeValue == "particle") {
            $(".entries-wrapper").empty();
            $.ajax({
                url : "./includes/review_entries_retrieve_scripts/retrieve_particle_entries.scripts.php",
                method : "POST",
                data : {
                    wordTypeValue : wordTypeValue,
                    submit : 1
                },
                success : function(data) {
                    $("#js-entries-particle-wrapper").html(data);
                }
            });
        } else if (wordTypeValue == "verb") {
            $(".entries-wrapper").empty();
            $.ajax({
                url : "./includes/review_entries_retrieve_scripts/retrieve_verb_entries.scripts.php",
                method : "POST",
                data : {
                    wordTypeValue : wordTypeValue,
                    submit : 1
                },
                success : function(data) {
                    $("#js-entries-verb-wrapper").html(data);
                }
            });
        }
    });

    // Check/uncheck all checkboxes in entry table

    $(document).on("change", "#js-check-all-entries-noun", function(){
        if (this.checked) {
            $(".check-entry-noun").not(this).prop("checked", this.checked);
        } else {
            $(".check-entry-noun").not(this).prop("checked", false);
        }
    });
    $(document).on("change", "#js-check-all-entries-pronoun-personal", function(){
        if (this.checked) {
            $(".check-entry-pronoun-personal").not(this).prop("checked", this.checked);
        } else {
            $(".check-entry-pronoun-personal").not(this).prop("checked", false);
        }
    });
    $(document).on("change", "#js-check-all-entries-pronoun-demonstrative", function(){
        if (this.checked) {
            $(".check-entry-pronoun-demonstrative").not(this).prop("checked", this.checked);
        } else {
            $(".check-entry-pronoun-demonstrative").not(this).prop("checked", false);
        }
    });
    $(document).on("change", "#js-check-all-entries-pronoun-interrogative", function(){
        if (this.checked) {
            $(".check-entry-pronoun-interrogative").not(this).prop("checked", this.checked);
        } else {
            $(".check-entry-pronoun-interrogative").not(this).prop("checked", false);
        }
    });
    $(document).on("change", "#js-check-all-entries-adjective", function(){
        if (this.checked) {
            $(".check-entry-adjective").not(this).prop("checked", this.checked);
        } else {
            $(".check-entry-adjective").not(this).prop("checked", false);
        }
    });
    $(document).on("change", "#js-check-all-entries-preposition", function(){
        if (this.checked) {
            $(".check-entry-preposition").not(this).prop("checked", this.checked);
        } else {
            $(".check-entry-preposition").not(this).prop("checked", false);
        }
    });
    $(document).on("change", "#js-check-all-entries-adverb", function(){
        if (this.checked) {
            $(".check-entry-adverb").not(this).prop("checked", this.checked);
        } else {
            $(".check-entry-adverb").not(this).prop("checked", false);
        }
    });
    $(document).on("change", "#js-check-all-entries-number", function(){
        if (this.checked) {
            $(".check-entry-number").not(this).prop("checked", this.checked);
        } else {
            $(".check-entry-number").not(this).prop("checked", false);
        }
    });
    $(document).on("change", "#js-check-all-entries-particle", function(){
        if (this.checked) {
            $(".check-entry-particle").not(this).prop("checked", this.checked);
        } else {
            $(".check-entry-particle").not(this).prop("checked", false);
        }
    });
    $(document).on("change", "#js-check-all-entries-verb", function(){
        if (this.checked) {
            $(".check-entry-verb").not(this).prop("checked", this.checked);
        } else {
            $(".check-entry-verb").not(this).prop("checked", false);
        }
    });

    // Row remove from HTML and DB after REJECT button click

    $(document).on("click", ".review-entry-button-reject", function(){
        var buttonClicked = $(this);
        var closestWrapper = buttonClicked.closest(".entries-wrapper");
        var tableSelector = buttonClicked.closest("table");
        var rowId = buttonClicked.prop("id");
        var wordType = closestWrapper.find("h2").text().toLowerCase().slice(0, -1).replace(/ /g, "_");
        buttonClicked.closest("tr").fadeOut(700, function(){
            buttonClicked.closest("tr").remove();
            $.ajax({
                url : "./includes/remove_from_temp_scripts/remove_temp_"+wordType+".script.php",
                method : "POST",
                data : {
                    rowId : rowId,
                    submit : 1
                },
                success : function(data){
                    alert(data);
                }
            });
            var rowCount = tableSelector.find("tbody > tr").length;
            if (rowCount < 1) {
                closestWrapper.empty();
                var message = "<div id=\"js-entries-message-wrapper-"+wordType+"\" class=\"entries-message-wrapper\"><div class=\"entries-query-message\"><p>There are no current entries for "+wordType+"s.</p></div></div>";
                closestWrapper.html(message);
            }
        });
    });

    // Row accept and remove from HTML and DB after ACCEPT button click

    $(document).on("click", ".review-entry-button-accept", function(){
        var buttonClicked = $(this);
        var rowId = buttonClicked.prop("id");
        var closestWrapper = buttonClicked.closest(".entries-wrapper");
        var tableSelector = buttonClicked.closest("table");
        var wordType = closestWrapper.find("h2").text().toLowerCase().slice(0, -1).replace(/ /g, "_");
        $.ajax({
            url : "./includes/new_word_scripts/new_"+wordType+".script.php",
            method : "POST",
            data : {
                rowId : rowId,
                submit : 1
            },
            success : function(data) {
                alert(data);
                buttonClicked.closest("tr").fadeOut(700, function(){
                    buttonClicked.closest("tr").remove();
                    $.ajax({
                        url : "./includes/remove_from_temp_scripts/remove_temp_"+wordType+".script.php",
                        method : "POST",
                        data : {
                            rowId : rowId,
                            submit : 1
                        },
                        success : function(data){
                            alert(data);
                        }
                    });
                    var rowCount = tableSelector.find("tbody > tr").length;
                    if (rowCount < 1) {
                        closestWrapper.empty();
                        var message = "<div id=\"js-entries-message-wrapper-" +wordType+ "\" class=\"entries-message-wrapper\"><div class=\"entries-query-message\"><p>There are no current entries for "+wordType+"s.</p></div></div>";
                        closestWrapper.html(message);
                    }
                });
            }
        });
    });

    // Row(s) removal on REJECT ALL button click

    $(document).on("click", ".review-button-reject", function(){
        var buttonClickedAll = $(this);
        var closestWrapper = buttonClickedAll.closest(".entries-wrapper");
        var tableSelector = closestWrapper.find("table");
        var wordType = closestWrapper.find("h2").text().toLowerCase().slice(0, -1).replace(/ /g, "_");
        var allRowsId = new Array();
        var finalMessage = new Array();
        closestWrapper.find("tbody input:checked").each(function() {
            allRowsId.push($(this).prop("id"));
        });
        $.each(allRowsId, function(key, rowId){
            $.ajax({
                url : "./includes/remove_from_temp_scripts/remove_temp_"+wordType+".script.php",
                method : "POST",
                data : {
                    rowId : rowId,
                    submit : 1
                },
                success : function(data){
                    finalMessage.push(data);
                    closestWrapper.find("tbody input[id="+rowId+"]").closest("tr").fadeOut(700, function(){
                        this.remove();
                        var rowCount = tableSelector.find("tbody > tr").length;
                        if (rowCount < 1) {
                            closestWrapper.empty();
                            var message = "<div id=\"js-entries-message-wrapper-"+wordType+"\" class=\"entries-message-wrapper\"><div class=\"entries-query-message\"><p>There are no current entries for "+wordType+"s.</p></div></div>";
                            closestWrapper.html(message);
                        }
                    });
                }
            });
        });
        console.log(finalMessage);
    });

    // Row(s) removal on ACCEPT ALL button click

    $(document).on("click", ".review-button-accept", function(){
        var buttonClickedAll = $(this);
        var closestWrapper = buttonClickedAll.closest(".entries-wrapper");
        var tableSelector = closestWrapper.find("table");
        var wordType = closestWrapper.find("h2").text().toLowerCase().slice(0, -1).replace(/ /g, "_");
        var allRowsId = new Array();
        var finalMessage = new Array();
        closestWrapper.find("tbody input:checked").each(function() {
            allRowsId.push($(this).prop("id"));
        });
        $.each(allRowsId, function(key, rowId){
            $.ajax({
                url : "./includes/new_word_scripts/new_"+wordType+".script.php",
                method : "POST",
                data : {
                    rowId : rowId,
                    submit : 1
                },
                success : function(data) {
                    finalMessage.push(data);
                    $.ajax({
                        url : "./includes/remove_from_temp_scripts/remove_temp_"+wordType+".script.php",
                        method : "POST",
                        data : {
                            rowId : rowId,
                            submit : 1
                        },
                        success : function(data){
                            finalMessage.push(data);
                            closestWrapper.find("tbody input[id="+rowId+"]").closest("tr").fadeOut(700, function(){
                                this.remove();
                                var rowCount = tableSelector.find("tbody > tr").length;
                                if (rowCount < 1) {
                                    closestWrapper.empty();
                                    var message = "<div id=\"js-entries-message-wrapper-"+wordType+"\" class=\"entries-message-wrapper\"><div class=\"entries-query-message\"><p>There are no current entries for "+wordType+"s.</p></div></div>";
                                    closestWrapper.html(message);
                                }
                            });
                        }
                    });
                }
            });
        });
        console.log(finalMessage);
    });

});