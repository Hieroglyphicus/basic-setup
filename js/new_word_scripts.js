$(document).ready(function() {

    /* CHECK IF USER CLOSED NOTIFICATION MESSAGE */

    $("js-close-new-word-notification").click(function(){
        /* var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"; */
    });

    /* HIEROGLYPHS PREVIEWER */

    $("#js-gardiners-input").keyup(function(e) {
        var userInput = $("#js-gardiners-input").val();
        var userInputSplit = userInput.trim().split("-");
        $("#js-hieroglyphs-preview").empty();
        for (i = 0; i < userInputSplit.length; i++) {
            if (userInputSplit[i].length > 1 && userInputSplit[i].match(/((([a-zA-IK-Z][a]?)[\d]{1,3}[a-zA-Z]?)( - )?){1,}/g)) {
                var imageHiero = document.createElement("img");
                imageHiero.id = "hieroglyph" + [i];
                imageHiero.src = "";
                imageHiero.onerror = "";
                $("#js-hieroglyphs-preview").append(imageHiero);
                $("#hieroglyph" + [i]).attr("src", "./images/hieroglyphs/" + userInputSplit[i] + ".svg");
                $("#hieroglyph" + [i]).attr("onerror", 'this.src="./images/hieroglyphs/Unknown.svg"').attr("style", "height:36px");
            } else {
                var imageHiero = document.createElement("img");
                imageHiero.id = "hieroglyph" + [i];
                imageHiero.src = "";
                $("#js-hieroglyphs-preview").append(imageHiero);
                $("#hieroglyph" + [i]).attr("src", "./images/hieroglyphs/Unknown.svg");
                $("#hieroglyph" + [i]).attr("style", "height:36px");
            }
        }
        if ($("#js-gardiners-input").val() < 1) {
            $("#js-hieroglyphs-preview").empty();
        }
    });

    /* SHOW / HIDE EXPLANATION FIELD */

    $(".form-input-info-icon").click(function(){
        $(this).parents(".new-word-form-elements").find(".new-word-input-explanation").slideToggle();
    });
    
    /* SHOW / HIDE WORD CATEGORY BY CHOOSING DROP-DOWN */

    $("#js-word-category-selector").change(function() {
        // Remove error styling and message from word category select field
        $(this).css("border-color", "rgb(95,160,95)");
        $("#js-word-category-selector-error-div").empty();
        // Display / hide appropriate options for word category
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).prop("value");
            if (optionValue) {
                $(".noun-options, .pronoun-options, .adjective-options, .preposition-options, .adverb-options, .number-options, .particle-options, .verb-options").not("." + optionValue + "-options").hide();
                $("." + optionValue + "-options").css("display", "block");
            } else {
                $(".noun-options, .pronoun-options, .adjective-options, .preposition-options, .adverb-options, .number-options, .particle-options, .verb-options").hide();
            }
        });
    });

    // SHOW / HIDE PRONOUN CATEGORY BY CHOOSING DROP-DOWN

    $("#js-pronoun-category-selector").change(function() {
        // Remove error styling and message from pronoun category select field
        $(this).css("border-color", "rgb(95,160,95)");
        $("#js-pronoun-category-selector-error-div").empty();
        // Display / hide appropriate options for pronoun category
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).prop("value");
            if (optionValue) {
                $(".personal-pronoun-options, .demonstrative-pronoun-options, .possessive-pronoun-options").not("." + optionValue + "-pronoun-options").hide();
                $("." + optionValue + "-pronoun-options").show();
            } else {
                $(".personal-pronoun-options, .demonstrative-pronoun-options, .possessive-pronoun-options").hide();
            }
        });
    });

    // SHOW REFERENCE FOR COPTIC FIELD IF COPTIC VARIANT IS ENTERED

    $("#js-coptic-variant-input").on("keyup", function(){
        var inputField = $(this);
        var copticVariantValue = inputField.val().trim();
        var referenceCopticValue = $("#js-coptic-reference-input").val().trim();
        if (copticVariantValue.length > 0 && copticVariantValue != "-") {
            $("#js-coptic-reference-input").prop("disabled", false);
            if (referenceCopticValue == "N/A") {
                $("#js-coptic-reference-input").val("");
            }
        } else {
            $("#js-coptic-reference-input").prop("disabled", true);
            $("#js-coptic-reference-input").css("border-color", "rgb(225,225,225)");
            $("#js-coptic-reference-input").val("N/A");
            $("#js-coptic-reference-input-error-div").empty();
        }
    });

    /* NEW WORD FORM VALIDATION */

    $("#js-new-word-form").submit(function(e){
        e.preventDefault();

        var noError = false;

        // Regex checkers

        var gardinersCodeRegex = /^(?:[a-zA-IK-Z]|Aa)[1-9][0-9]{0,2}[a-zA-Z]?(?:-(?:[a-zA-IK-Z]|Aa)[1-9][0-9]{0,2}[a-zA-Z]?)*$/g;
        var invalidCharsTranslationRegex = /^[A-Za-z\-\d\s]*$/g;

        // Gardiner's code checker

        var noGardinersInputError = false;
        var noGardinersCharNoError = false;
        var noGardinersTypeError = false;
        var inputGardinersValue = $("#js-gardiners-input").val().trim();
        var inputGardinersLength = inputGardinersValue.length;
        if (inputGardinersLength < 2) {
            noGardinersCharNoError = false;
        } else {
            noGardinersCharNoError = true;
        }
        if (gardinersCodeRegex.test(inputGardinersValue)) {
            noGardinersTypeError = true;
        } else {
            noGardinersTypeError = false;
        }

        if (noGardinersCharNoError == false) {
            $(".validation-message-div").css("display", "flex");
            $("#js-gardiners-input").css("border-color", "rgb(190,115,110)");
            var errorMessage = "<div class='error-message error-pointer'><p>Code must have at least 2 characters.</p></div>";
            $("#js-gardiners-input-error-div").html(errorMessage);
        } else {
            if (noGardinersTypeError == false) {
                $(".validation-message-div").css("display", "flex");
                $("#js-gardiners-input").css("border-color", "rgb(190,115,110)");
                var errorMessage = "<div class='error-message error-pointer'><p>Code has invalid formatting or characters.</p></div>";
                $("#js-gardiners-input-error-div").html(errorMessage);
            } else {
                var errorMessage = "<div class='success-message'><p>Looking good!</p></div>";
                $("#js-gardiners-input-error-div").html(errorMessage);
                $(".validation-message-div").css("display", "none");
                $("#js-gardiners-input").css("border-color", "rgb(95,160,95)");
                noGardinersInputError = true;
            }
        }

        // Transliteration checker

        var noTransliterationInputError = false;
        var noTransliterationCharNoError = false;
        var inputTransliterationValue = $("#js-transliteration-input").val().trim();
        var inputTransliterationLength = inputTransliterationValue.length;
        if (inputTransliterationLength < 1) {
            noTransliterationCharNoError = false;
        } else {
            noTransliterationCharNoError = true;
        }

        if (noTransliterationCharNoError == false) {
            $(".validation-message-div").css("display", "flex");
            $("#js-transliteration-input").css("border-color", "rgb(190,115,110)");
            var errorMessage = "<div class='error-message error-pointer'><p>Transliteration field must must not be empty.</p></div>";
            $("#js-transliteration-input-error-div").html(errorMessage);
        } else {
            var errorMessage = "<div class='success-message'><p>Looking good!</p></div>";
            $("#js-transliteration-input-error-div").html(errorMessage);
            $(".validation-message-div").css("display", "flex");
            $("#js-transliteration-input").css("border-color", "rgb(95,160,95)");
            noTransliterationInputError = true;
        }

        // Translation checker

        var noTranslationInputError = false;
        var noTranslationCharNoError = false;
        var noTranslationInvalidCharsError = false;
        var inputTranslationValue = $("#js-translation-input").val().trim();
        var inputTranslationLength = inputTranslationValue.length;
        if (inputTranslationLength < 1) {
            noTranslationCharNoError = false;
        } else {
            noTranslationCharNoError = true;
        }

        if (inputTranslationValue.match(invalidCharsTranslationRegex)) {
            noTranslationInvalidCharsError = true;
        } else {
            noTranslationInvalidCharsError = false;
        }

        if (noTranslationCharNoError == false) {
            $(".validation-message-div").css("display", "flex");
            $("#js-translation-input").css("border-color", "rgb(190,115,110)");
            var errorMessage = "<div class='error-message error-pointer'><p>Translation field must must not be empty.</p></div>";
            $("#js-translation-input-error-div").html(errorMessage);
        } else {
            if (noTranslationInvalidCharsError == false) {
                $(".validation-message-div").css("display", "flex");
                $("#js-translation-input").css("border-color", "rgb(190,115,110)");
                var errorMessage = "<div class='error-message error-pointer'><p>Only letters, numbers, space and - sign are allowed.</p></div>";
                $("#js-translation-input-error-div").html(errorMessage);
            } else {
                var errorMessage = "<div class='success-message'><p>Looking good!</p></div>";
                $("#js-translation-input-error-div").html(errorMessage);
                $(".validation-message-div").css("display", "flex");
                $("#js-translation-input").css("border-color", "rgb(95,160,95)");
                noTranslationInputError = true;   
            }
        }

        // Reference checker

        var noReferenceInputError = false;
        var noReferenceCharNoError = false;
        var inputReferenceValue = $("#js-reference-input").val().trim();
        var inputReferenceLength = inputReferenceValue.length;
        if (inputReferenceLength < 5) {
            noReferenceCharNoError = false;
        } else {
            noReferenceCharNoError = true;
        }

        if (noReferenceCharNoError == false) {
            $(".validation-message-div").css("display", "flex");
            $("#js-reference-input").css("border-color", "rgb(190,115,110)");
            var errorMessage = "<div class='error-message error-pointer'><p>Reference must have at least 5 characters.</p></div>";
            $("#js-reference-input-error-div").html(errorMessage);
        } else {
            var errorMessage = "<div class='success-message'><p>Looking good!</p></div>";
            $("#js-reference-input-error-div").html(errorMessage);
            $(".validation-message-div").css("display", "flex");
            $("#js-reference-input").css("border-color", "rgb(95,160,95)");
            noReferenceInputError = true;
        }

        // Word category checker

        var noWordCategoryInputError = false;
        var noWordCategoryChooseError = false;
        var inputWordCategoryValue = $("#js-word-category-selector").find("option:selected").prop("value");
        if (inputWordCategoryValue == "") {
            $(".validation-message-div").css("display", "flex");
            $("#js-word-category-selector").css("border-color", "rgb(190,115,110)");
            var errorMessage = "<div class='error-message error-pointer'><p>The word category is not selected.</p></div>";
            $("#js-word-category-selector-error-div").html(errorMessage);
            noWordCategoryChooseError = false;
        } else {
            $("#js-word-category-selector-error-div").empty();
            $("#js-word-category-selector").css("border-color", "rgb(95,160,95)");
            noWordCategoryChooseError = true;
        }
        
        // Noun error variables
        var noNounInputError = false;
        var noNounGenderError = false;
        var noNounNumberError = false;
        // Noun variables
        var nounGenderValue = $("input[name='noun-gender']:checked").val();
        var nounNumberValue = $("input[name='noun-number']:checked").val();
        var nounSubclass1Value = $("#js-subclass-primary-selector").find("option:selected").prop("value");
        var nounSubclass2Value = $("#js-subclass-secondary-selector").find("option:selected").prop("value");

        // Pronoun error variables
        var noPronounChooseError = false;
        var noPersonalPronounTypeError = false;
        var noPersonalPronounFormError = false;
        var noDemonstrativePronounFormError = false;
        var noPossessivePronounFormError = false;
        // Pronoun variables
        var pronounCategoryValue = $("#js-pronoun-category-selector").find("option:selected").prop("value");
        var personalPronounTypeValue = $("input[name='personal-pronoun-type']:checked").val();
        var personalPronounFormValue = $("#js-personal-pronoun-form-selector").find("option:selected").prop("value");
        var demonstrativePronounFormValue = $("input[name='demonstrative-pronoun-form']:checked").val();
        var possessivePronounFormValue = $("input[name='possessive-pronoun-form']:checked").val();

        // Adjective error variables
        var noAdjectiveInputError = false;
        var noAdjectiveTypeError = false;
        var noAdjectiveGenderError = false;
        var noAdjectiveNumberError = false;
        // Adjective variables
        var adjectiveTypeValue = $("input[name='adjective-type']:checked").val();
        var adjectiveGenderValue = $("input[name='adjective-gender']:checked").val();
        var adjectiveNumberValue = $("input[name='adjective-number']:checked").val();

        // Preposition variables
        var prepositionTypeValue = $("input[name='preposition-type']:checked").val();

        // Adverb error variables
        var noAdverbInputError = false;
        var noAdverbTypeError = false;
        // Adverb variables
        var adverbTypeValue = $("input[name='adverb-type']:checked").val();

        // Number error variables
        var noNumberInputError = false;
        var noNumberTypeError = false;
        // Number variables
        var numberTypeValue = $("input[name='number-type']:checked").val();

        // Particle error variables
        var noParticleInputError = false;
        var noParticleTypeError = false;
        // Particle variables
        var particleTypeValue = $("input[name='particle-type']:checked").val();

        // Verb error variables
        var noVerbInputError = false;
        var noVerbRootClassError = false;
        var noVerbTypeError = false;
        // Verb variables
        var inputVerbRootValue = $("#js-verb-root-selector").find("option:selected").prop("value");
        var inputVerbTypeValue = $("#js-verb-type-selector").find("option:selected").prop("value");

        // NOUN CHECKERS
        if (inputWordCategoryValue == "noun") {
            // Check if noun gender is checked
            if (!nounGenderValue) {
                $(".radio-validation-message-div").css("display", "flex");
                $(".noun-gender-label").css("color","rgb(170,70,65)");
                var errorMessage = "<div class='radio-error-message error-pointer'><p>Please, select noun gender.</p></div>";
                $("#js-noun-gender-error-div").html(errorMessage);
                noNounGenderError = false;
            } else {
               $("#js-noun-gender-error-div").empty();
               $(".noun-gender-label").css("color","rgb(77,77,77)");
               noNounGenderError = true;
            }
            // Check if noun number is checked
            if (!nounNumberValue) {
                $(".radio-validation-message-div").css("display", "flex");
                $(".noun-number-label").css("color","rgb(170,70,65)");
                var errorMessage = "<div class='radio-error-message error-pointer'><p>Please, select noun number.</p></div>";
                $("#js-noun-number-error-div").html(errorMessage);
                noNounNumberError = false;
            } else {
               $("#js-noun-number-error-div").empty();
               $(".noun-number-label").css("color","rgb(77,77,77)");
               noNounNumberError = true;
            }
            // Remove errors when noun gender is checked
            $("input[name='noun-gender']").change(function(){
                $("#js-noun-gender-error-div").empty();
                $(".noun-gender-label").css("color","rgb(77,77,77)");
            });
            // Remove errors when noun number is checked
            $("input[name='noun-number']").change(function(){
                $("#js-noun-number-error-div").empty();
                $(".noun-number-label").css("color","rgb(77,77,77)");
            });
            // Check if subclass(es) are selected
            if (nounSubclass1Value == "") {
                $("#js-subclass-primary-selector option[value=\"N/A\"]").prop("selected", true);
            }
            if (nounSubclass2Value == "") {
                $("#js-subclass-secondary-selector option[value=\"N/A\"]").prop("selected", true);
            }

            if (noNounGenderError == true && noNounNumberError == true) {
                noNounInputError = true;
            } else {
                noNounInputError = false;
            }
        /* END OF NOUN CHECKERS */

        // PRONOUN CHECKERS
        } else if (inputWordCategoryValue == "pronoun") {
            // Check if pronoun category is selected
            if (pronounCategoryValue == "") {
                $(".validation-message-div").css("display", "flex");
                $("#js-pronoun-category-selector").css("border-color", "rgb(190,115,110)");
                var errorMessage = "<div class='error-message error-pointer'><p>Please, select pronoun category.</p></div>";
                $("#js-pronoun-category-selector-error-div").html(errorMessage);
                noPronounChooseError = false;
            } else {
                $("#js-pronoun-category-selector-error-div").empty();
                $("#js-pronoun-category-selector").css("border-color", "rgb(95,160,95)");
                noPronounChooseError = true;
            }
            if (pronounCategoryValue == "personal") {
                // Check if personal pronoun type is checked
                if (!personalPronounTypeValue) {
                    $(".radio-validation-message-div").css("display", "flex");
                    $(".personal-pronoun-type-label").css("color","rgb(170,70,65)");
                    var errorMessage = "<div class='radio-error-message error-pointer'><p>Please, select personal pronoun type.</p></div>";
                    $("#js-personal-pronoun-error-div").html(errorMessage);
                    noPersonalPronounTypeError = false;
                } else {
                    $("#js-personal-pronoun-error-div").empty();
                    $(".personal-pronoun-type-label").css("color","rgb(77,77,77)");
                    noPersonalPronounTypeError = true;
                }
                // Check if personal pronoun PGN is selected
                if (personalPronounFormValue == "") {
                    $(".validation-message-div").css("display", "flex");
                    $("#js-personal-pronoun-form-selector").css("border-color", "rgb(190,115,110)");
                    var errorMessage = "<div class='error-message error-pointer'><p>The pronoun form is not selected.</p></div>";
                    $("#js-personal-pronoun-form-selector-error-div").html(errorMessage);
                    noPersonalPronounFormError = false;
                } else {
                    $("#js-personal-pronoun-form-selector-error-div").empty();
                    $("#js-personal-pronoun-form-selector").css("border-color", "rgb(95,160,95)");
                    noPersonalPronounFormError = true;
                }
                // Remove errors when personal pronoun type is checked
                $("input[name='personal-pronoun-type']").change(function(){
                    $("#js-personal-pronoun-error-div").empty();
                    $(".personal-pronoun-type-label").css("color","rgb(77,77,77)");
                });
                // Remove errors when personal pronoun form is choosen
                $("#js-personal-pronoun-form-selector").change(function(){
                    $("#js-personal-pronoun-form-selector-error-div").empty();
                    $("#js-personal-pronoun-form-selector").css("border-color", "rgb(95,160,95)");
                });
            }
            else if (pronounCategoryValue == "demonstrative") {
                // Check if demonstrative pronoun PGN is checked
                if (!demonstrativePronounFormValue) {
                    $(".radio-validation-message-div").css("display", "flex");
                    $(".demonstrative-pronoun-form-label").css("color","rgb(170,70,65)");
                    var errorMessage = "<div class='radio-error-message error-pointer'><p>Please, select demonstrative pronoun form.</p></div>";
                    $("#js-demonstrative-pronoun-error-div").html(errorMessage);
                    noDemonstrativePronounFormError = false;
                } else {
                    $("#js-demonstrative-pronoun-error-div").empty();
                    $(".demonstrative-pronoun-form-label").css("color","rgb(77,77,77)");
                    noDemonstrativePronounFormError = true;
                }
                // Remove errors when demonstrative pronoun form is checked
                $("input[name='demonstrative-pronoun-form']").change(function(){
                    $("#js-demonstrative-pronoun-error-div").empty();
                    $(".demonstrative-pronoun-form-label").css("color","rgb(77,77,77)");
                });
            }
            else if (pronounCategoryValue == "possessive") {
                // Check if possessive pronoun PGN is checked
                if (!possessivePronounFormValue) {
                    $(".radio-validation-message-div").css("display", "flex");
                    $(".possessive-pronoun-form-label").css("color","rgb(170,70,65)");
                    var errorMessage = "<div class='radio-error-message error-pointer'><p>Please, select possessive pronoun form.</p></div>";
                    $("#js-possessive-pronoun-error-div").html(errorMessage);
                    noPossessivePronounFormError = false;
                } else {
                    $("#js-possessive-pronoun-error-div").empty();
                    $(".possessive-pronoun-form-label").css("color","rgb(77,77,77)");
                    noPossessivePronounFormError = true;
                }
                // Remove errors when possessive pronoun form is checked
                $("input[name='possessive-pronoun-form']").change(function(){
                    $("#js-possessive-pronoun-error-div").empty();
                    $(".possessive-pronoun-form-label").css("color","rgb(77,77,77)");
                });
            }
        /* END OF PRONOUN CHECKERS */

        // ADJECTIVE CHECKERS
        } else if (inputWordCategoryValue == "adjective") {
            // Check if adjective type is checked
            if (!adjectiveTypeValue) {
                $(".radio-validation-message-div").css("display", "flex");
                $(".adjective-type-label").css("color","rgb(170,70,65)");
                var errorMessage = "<div class='radio-error-message error-pointer'><p>Please, select adjective type.</p></div>";
                $("#js-adjective-type-error-div").html(errorMessage);
                noAdjectiveTypeError = false;
            } else {
                $("#js-adjective-type-error-div").empty();
                $(".adjective-type-label").css("color","rgb(77,77,77)");
                noAdjectiveTypeError = true;
            }
            // Check if adjective gender is checked
            if (!adjectiveGenderValue) {
                $(".radio-validation-message-div").css("display", "flex");
                $(".adjective-gender-label").css("color","rgb(170,70,65)");
                var errorMessage = "<div class='radio-error-message error-pointer'><p>Please, select adjective gender.</p></div>";
                $("#js-adjective-gender-error-div").html(errorMessage);
                noAdjectiveGenderError = false;
            } else {
                $("#js-adjective-gender-error-div").empty();
                $(".adjective-gender-label").css("color","rgb(77,77,77)");
                noAdjectiveGenderError = true;
            }
            // Check if adjective number is checked
            if (!adjectiveNumberValue) {
                $(".radio-validation-message-div").css("display", "flex");
                $(".adjective-number-label").css("color","rgb(170,70,65)");
                var errorMessage = "<div class='radio-error-message error-pointer'><p>Please, select adjective number.</p></div>";
                $("#js-adjective-number-error-div").html(errorMessage);
                noAdjectiveNumberError = false;
            } else {
                $("#js-adjective-number-error-div").empty();
                $(".adjective-number-label").css("color","rgb(77,77,77)");
                noAdjectiveNumberError = true;
            }
            // Remove errors when adjective type is checked
            $("input[name='adjective-type']").change(function(){
                $("#js-adjective-type-error-div").empty();
                $(".adjective-type-label").css("color","rgb(77,77,77)");
            });
            // Remove errors when adjective gender is checked
            $("input[name='adjective-gender']").change(function(){
                $("#js-adjective-gender-error-div").empty();
                $(".adjective-gender-label").css("color","rgb(77,77,77)");
            });
            // Remove errors when adjective number is checked
            $("input[name='adjective-number']").change(function(){
                $("#js-adjective-number-error-div").empty();
                $(".adjective-number-label").css("color","rgb(77,77,77)");
            });

            if (noAdjectiveTypeError == false || noAdjectiveGenderError == false || noAdjectiveNumberError == false) {
                noAdjectiveInputError = false;
            } else {
                noAdjectiveInputError = true;
            }
        // 
        } else if (inputWordCategoryValue == "preposition") {            
        } else if (inputWordCategoryValue == "adverb") {
            // Check if adverb type is checked
            if (!adverbTypeValue) {
                $(".radio-validation-message-div").css("display", "flex");
                $(".adverb-type-label").css("color","rgb(170,70,65)");
                var errorMessage = "<div class='radio-error-message error-pointer'><p>Please, select adverb type.</p></div>";
                $("#js-adverb-type-error-div").html(errorMessage);
                noAdverbTypeError = false;
            } else {
                $("#js-adverb-type-error-div").empty();
                $(".adverb-type-label").css("color","rgb(77,77,77)");
                noAdverbTypeError = true;
            }
            // Remove errors when adverb type is checked
            $("input[name='adverb-type']").change(function(){
                $("#js-adverb-type-error-div").empty();
                $(".adverb-type-label").css("color","rgb(77,77,77)");
            });

            if (noAdverbTypeError == true) {
                noAdverbInputError = true;
            } else {
                noAdverbInputError = false;
            }

        } else if (inputWordCategoryValue == "number") {
            // Check if number type is checked
            if (!numberTypeValue) {
                $(".radio-validation-message-div").css("display", "flex");
                $(".number-type-label").css("color","rgb(170,70,65)");
                var errorMessage = "<div class='radio-error-message error-pointer'><p>Please, select number type.</p></div>";
                $("#js-number-type-error-div").html(errorMessage);
                noNumberTypeError = false;
            } else {
                $("#js-number-type-error-div").empty();
                $(".number-type-label").css("color","rgb(77,77,77)");
                noNumberTypeError = true;
            }
            // Remove errors when number type is checked
            $("input[name='number-type']").change(function(){
                $("#js-number-type-error-div").empty();
                $(".number-type-label").css("color","rgb(77,77,77)");
            });

            if (noNumberTypeError == true) {
                noNumberInputError = true;
            } else {
                noNumberInputError = false;
            }

        } else if (inputWordCategoryValue == "particle") {
            // Check if number type is checked
            if (!particleTypeValue) {
                $(".radio-validation-message-div").css("display", "flex");
                $(".particle-type-label").css("color","rgb(170,70,65)");
                var errorMessage = "<div class='radio-error-message error-pointer'><p>Please, select particle type.</p></div>";
                $("#js-particle-type-error-div").html(errorMessage);
                noParticleTypeError = false;
            } else {
                $("#js-particle-type-error-div").empty();
                $(".particle-type-label").css("color","rgb(77,77,77)");
                noParticleTypeError = true;
            }
            // Remove errors when particle type is checked
            $("input[name='particle-type']").change(function(){
                $("#js-particle-type-error-div").empty();
                $(".particle-type-label").css("color","rgb(77,77,77)");
            });

            if (noParticleTypeError == true) {
                noParticleInputError = true;
            } else {
                noParticleInputError = false;
            }
        /* END OF PARTICLE CHECKERS */

        // VERB CHECKERS  
        } else if (inputWordCategoryValue == "verb") {
            // Check if verb root is selected
            if (inputVerbRootValue == "") {
                $(".validation-message-div").css("display", "flex");
                $("#js-verb-root-selector").css("border-color", "rgb(190,115,110)");
                var errorMessage = "<div class='error-message error-pointer'><p>The verb root is not selected.</p></div>";
                $("#js-verb-root-selector-error-div").html(errorMessage);
                noVerbRootClassError = false;
            } else {
                $("#js-verb-root-selector-error-div").empty();
                $("#js-verb-root-selector").css("border-color", "rgb(95,160,95)");
                noVerbRootClassError = true;
            }
            // Check if verb type is selected
            if (inputVerbTypeValue == "") {
                $(".validation-message-div").css("display", "flex");
                $("#js-verb-type-selector").css("border-color", "rgb(190,115,110)");
                var errorMessage = "<div class='error-message error-pointer'><p>The verb type is not selected.</p></div>";
                $("#js-verb-type-selector-error-div").html(errorMessage);
                noVerbTypeError = false;
            } else {
                $("#js-verb-type-selector-error-div").empty();
                $("#js-verb-type-selector").css("border-color", "rgb(95,160,95)");
                noVerbTypeError = true;
            }
            // Remove errors when verb root is choosen
            $("#js-verb-root-selector").change(function(){
                $("#js-verb-root-selector-error-div").empty();
                $("#js-verb-root-selector").css("border-color", "rgb(95,160,95)");
            });
            // Remove errors when verb type is choosen
            $("#js-verb-type-selector").change(function(){
                $("#js-verb-type-selector-error-div").empty();
                $("#js-verb-type-selector").css("border-color", "rgb(95,160,95)");
            });
        }

        if (noVerbRootClassError == true && noVerbTypeError == true) {
            noVerbInputError = true;
        } else {
            noVerbInputError = false;
        }

        // LANGUAGE STAGE checker
        var languageStageValue = $("#js-language-stage-selector").find("option:selected").prop("value");
        if (languageStageValue == "") {
            $("#js-language-stage-selector option[value=\"N/A\"]").prop("selected", true);
            languageStageValue = $("#js-language-stage-selector").find("option:selected").prop("value");
        }

        // PERIOD OF USE checker
        var periodOfUseValue = $("#js-period-of-use-input").val().trim();
        if (periodOfUseValue == "") {
            $("#js-period-of-use-input").val("N/A");
            periodOfUseValue = $("#js-period-of-use-input").val();
        }

        // FUNCTION OR OTHER ATTRIBUTE checker
        var functionAttributeValue = $("#js-function-input").val().trim();
        if (functionAttributeValue == "") {
            $("#js-function-input").val("N/A");
            functionAttributeValue = $("#js-function-input").val();
        }

        // COPTIC VARIANT CHECKER
        var copticVariantValue = $("#js-coptic-variant-input").val().trim();
        if (copticVariantValue == "") {
            $("#js-coptic-variant-input").val("-");
            copticVariantValue = $("#js-coptic-variant-input").val();
        }

        // REFERENCE FOR COPTIC VARIANT CHECKER
        var referenceCopticValue = $("#js-coptic-reference-input").val().trim();
        var noCopticReferenceInputError = true;
        if (copticVariantValue.length > 0 && copticVariantValue != "-") {
            var noCopticReferenceInputError = false;
            var noCopticReferenceCharNoError = false;
            if (referenceCopticValue.length < 5) {
                noCopticReferenceCharNoError = false;
            } else {
                noCopticReferenceCharNoError = true;
            }

            if (noCopticReferenceCharNoError == false) {
                $(".validation-message-div").css("display", "flex");
                $("#js-coptic-reference-input").css("border-color", "rgb(190,115,110)");
                var errorMessage = "<div class='error-message error-pointer'><p>Reference must have at least 5 characters.</p></div>";
                $("#js-coptic-reference-input-error-div").html(errorMessage);
            } else {
                var errorMessage = "<div class='success-message'><p>Looking good!</p></div>";
                $("#js-coptic-reference-input-error-div").html(errorMessage);
                $(".validation-message-div").css("display", "flex");
                $("#js-coptic-reference-input").css("border-color", "rgb(95,160,95)");
                noCopticReferenceInputError = true;
            }
        } else {
            $("#js-coptic-reference-input-error-div").empty();
            $("#js-coptic-reference-input").css("border-color", "rgb(225,225,225)");
        }

        // Error pointer

        if (noGardinersInputError == false || noTransliterationInputError == false || noTranslationInputError == false || noReferenceInputError == false || noWordCategoryChooseError == false || noCopticReferenceInputError == false) {
            noError = false;
            $("html, body").animate({
                scrollTop: $(".error-pointer:first").parents(".form-section").offset().top
            }, 1000);
        } else {
            noError = true;
        }

        // INSERT NEW NOUN
        if (inputWordCategoryValue == "noun") {
            if (noError == true && inputWordCategoryValue == "noun" && noNounInputError == true) {
                $.ajax({
                    url : "./includes/temp_new_word_scripts/temp_new_noun.script.php",
                    method : "POST",
                    data : {
                        inputGardinersValue : inputGardinersValue,
                        inputTransliterationValue : inputTransliterationValue,
                        inputTranslationValue : inputTranslationValue,
                        inputReferenceValue : inputReferenceValue,
                        inputWordCategoryValue : inputWordCategoryValue,
                        nounGenderValue : nounGenderValue,
                        nounNumberValue : nounNumberValue,
                        nounSubclass1Value : nounSubclass1Value,
                        nounSubclass2Value : nounSubclass2Value,
                        languageStageValue : languageStageValue,
                        periodOfUseValue : periodOfUseValue,
                        functionAttributeValue : functionAttributeValue,
                        copticVariantValue : copticVariantValue,
                        referenceCopticValue : referenceCopticValue,
                        userIdentification : userIdentification,
                        submit : 1
                    },
                    success : function(data) {
                        $(".new-word-success-message-wrapper").html(data);
                    }
                });
            }
        // INSERT NEW PRONOUN    
        } else if (inputWordCategoryValue == "pronoun") {
            if (noError == true && inputWordCategoryValue == "pronoun" && noPronounChooseError == true) {
                if (pronounCategoryValue == "personal" && noPersonalPronounTypeError == true && noPersonalPronounFormError == true) {
                    $.ajax({
                        url : "./includes/temp_new_word_scripts/temp_new_pronoun_personal.script.php",
                        method : "POST",
                        data : {
                            inputGardinersValue : inputGardinersValue,
                            inputTransliterationValue : inputTransliterationValue,
                            inputTranslationValue : inputTranslationValue,
                            inputReferenceValue : inputReferenceValue,
                            inputWordCategoryValue : inputWordCategoryValue,
                            pronounCategoryValue : pronounCategoryValue,
                            personalPronounTypeValue : personalPronounTypeValue,
                            personalPronounFormValue : personalPronounFormValue,
                            languageStageValue : languageStageValue,
                            periodOfUseValue : periodOfUseValue,
                            functionAttributeValue : functionAttributeValue,
                            copticVariantValue : copticVariantValue,
                            referenceCopticValue : referenceCopticValue,
                            userIdentification : userIdentification,
                            submit : 1
                        },
                        success : function(data) {
                            $(".new-word-success-message-wrapper").html(data);
                        }
                    });
                } else if (pronounCategoryValue == "demonstrative" && noDemonstrativePronounFormError == true) {
                    $.ajax({
                        url : "./includes/temp_new_word_scripts/temp_new_pronoun_demonstrative.script.php",
                        method : "POST",
                        data : {
                            inputGardinersValue : inputGardinersValue,
                            inputTransliterationValue : inputTransliterationValue,
                            inputTranslationValue : inputTranslationValue,
                            inputReferenceValue : inputReferenceValue,
                            inputWordCategoryValue : inputWordCategoryValue,
                            pronounCategoryValue : pronounCategoryValue,
                            demonstrativePronounFormValue : demonstrativePronounFormValue,
                            languageStageValue : languageStageValue,
                            periodOfUseValue : periodOfUseValue,
                            functionAttributeValue : functionAttributeValue,
                            copticVariantValue : copticVariantValue,
                            referenceCopticValue : referenceCopticValue,
                            userIdentification : userIdentification,
                            submit : 1
                        },
                        success : function(data) {
                            $(".new-word-success-message-wrapper").html(data);
                        }
                    });
                } else if (pronounCategoryValue == "possessive" && noPossessivePronounFormError == true) {
                    $.ajax({
                        url : "./includes/temp_new_word_scripts/temp_new_pronoun_possessive.script.php",
                        method : "POST",
                        data : {
                            inputGardinersValue : inputGardinersValue,
                            inputTransliterationValue : inputTransliterationValue,
                            inputTranslationValue : inputTranslationValue,
                            inputReferenceValue : inputReferenceValue,
                            inputWordCategoryValue : inputWordCategoryValue,
                            pronounCategoryValue : pronounCategoryValue,
                            possessivePronounFormValue : possessivePronounFormValue,
                            languageStageValue : languageStageValue,
                            periodOfUseValue : periodOfUseValue,
                            functionAttributeValue : functionAttributeValue,
                            copticVariantValue : copticVariantValue,
                            referenceCopticValue : referenceCopticValue,
                            userIdentification : userIdentification,
                            submit : 1
                        },
                        success : function(data) {
                            $(".new-word-success-message-wrapper").html(data);
                        }
                    });
                } else if (pronounCategoryValue == "interrogative") {
                    $.ajax({
                        url : "./includes/temp_new_word_scripts/temp_new_pronoun_interrogative.script.php", 
                        method : "POST",
                        data : {
                            inputGardinersValue : inputGardinersValue,
                            inputTransliterationValue : inputTransliterationValue,
                            inputTranslationValue : inputTranslationValue,
                            inputReferenceValue : inputReferenceValue,
                            inputWordCategoryValue : inputWordCategoryValue,
                            pronounCategoryValue : pronounCategoryValue,
                            languageStageValue : languageStageValue,
                            periodOfUseValue : periodOfUseValue,
                            functionAttributeValue : functionAttributeValue,
                            copticVariantValue : copticVariantValue,
                            referenceCopticValue : referenceCopticValue,
                            userIdentification : userIdentification,
                            submit : 1
                        },
                        success : function(data) {
                            $(".new-word-success-message-wrapper").html(data);
                        }
                    });
                }
                else if (pronounCategoryValue == "impersonal") {
                    $.ajax({
                        url : "./includes/temp_new_word_scripts/temp_new_pronoun_impersonal.script.php", 
                        method : "POST",
                        data : {
                            inputGardinersValue : inputGardinersValue,
                            inputTransliterationValue : inputTransliterationValue,
                            inputTranslationValue : inputTranslationValue,
                            inputReferenceValue : inputReferenceValue,
                            inputWordCategoryValue : inputWordCategoryValue,
                            pronounCategoryValue : pronounCategoryValue,
                            languageStageValue : languageStageValue,
                            periodOfUseValue : periodOfUseValue,
                            functionAttributeValue : functionAttributeValue,
                            copticVariantValue : copticVariantValue,
                            referenceCopticValue : referenceCopticValue,
                            userIdentification : userIdentification,
                            submit : 1
                        },
                        success : function(data) {
                            $(".new-word-success-message-wrapper").html(data);
                        }
                    });
                }
            } else {
                /* alert("Pronoun is not ok!"); */
            }
        // INSERT NEW ADJECTIVE
        } else if (inputWordCategoryValue == "adjective") {
            if (noError == true && inputWordCategoryValue == "adjective" && noAdjectiveInputError == true) {
                $.ajax({
                    url : "./includes/temp_new_word_scripts/temp_new_adjective.script.php",
                    method : "POST",
                    data : {
                        inputGardinersValue : inputGardinersValue,
                        inputTransliterationValue : inputTransliterationValue,
                        inputTranslationValue : inputTranslationValue,
                        inputReferenceValue : inputReferenceValue,
                        inputWordCategoryValue : inputWordCategoryValue,
                        adjectiveTypeValue : adjectiveTypeValue,
                        adjectiveGenderValue : adjectiveGenderValue,
                        adjectiveNumberValue : adjectiveNumberValue,
                        languageStageValue : languageStageValue,
                        periodOfUseValue : periodOfUseValue,
                        functionAttributeValue : functionAttributeValue,
                        copticVariantValue : copticVariantValue,
                        referenceCopticValue : referenceCopticValue,
                        userIdentification : userIdentification,
                        submit : 1
                    },
                    success : function(data) {
                        $(".new-word-success-message-wrapper").html(data);
                    }
                });
            } else {
               /*  alert("Adjective is not ok!"); */
            }
        // INSERT NEW PREPOSITION
        } else if (inputWordCategoryValue == "preposition") {
            if (noError == true && inputWordCategoryValue == "preposition") {
                $.ajax({
                    url : "./includes/temp_new_word_scripts/temp_new_preposition.script.php",
                    method : "POST",
                    data : {
                        inputGardinersValue : inputGardinersValue,
                        inputTransliterationValue : inputTransliterationValue,
                        inputTranslationValue : inputTranslationValue,
                        inputReferenceValue : inputReferenceValue,
                        inputWordCategoryValue : inputWordCategoryValue,
                        prepositionTypeValue : prepositionTypeValue,
                        languageStageValue : languageStageValue,
                        periodOfUseValue : periodOfUseValue,
                        functionAttributeValue : functionAttributeValue,
                        copticVariantValue : copticVariantValue,
                        referenceCopticValue : referenceCopticValue,
                        userIdentification : userIdentification,
                        submit : 1
                    },
                    success : function(data) {
                        $(".new-word-success-message-wrapper").html(data);
                    }
                });
            } else {
                /* alert("Preposition is not ok!"); */
            }
        // INSERT NEW ADVERB
        } else if (inputWordCategoryValue == "adverb") {
            if (noError == true && inputWordCategoryValue == "adverb" && noAdverbInputError == true) {
                $.ajax({
                    url : "./includes/temp_new_word_scripts/temp_new_adverb.script.php",
                    method : "POST",
                    data : {
                        inputGardinersValue : inputGardinersValue,
                        inputTransliterationValue : inputTransliterationValue,
                        inputTranslationValue : inputTranslationValue,
                        inputReferenceValue : inputReferenceValue,
                        inputWordCategoryValue : inputWordCategoryValue,
                        adverbTypeValue : adverbTypeValue,
                        languageStageValue : languageStageValue,
                        periodOfUseValue : periodOfUseValue,
                        functionAttributeValue : functionAttributeValue,
                        copticVariantValue : copticVariantValue,
                        referenceCopticValue : referenceCopticValue,
                        userIdentification : userIdentification,
                        submit : 1
                    },
                    success : function(data) {
                        $(".new-word-success-message-wrapper").html(data);
                    }
                });
            } else {
                /* alert("Adverb is not ok!"); */
            }
        // INSERT NEW NUMBER
        } else if (inputWordCategoryValue == "number") {
            if (noError == true && inputWordCategoryValue == "number" && noNumberInputError == true) {
                $.ajax({
                    url : "./includes/temp_new_word_scripts/temp_new_number.script.php",
                    method : "POST",
                    data : {
                        inputGardinersValue : inputGardinersValue,
                        inputTransliterationValue : inputTransliterationValue,
                        inputTranslationValue : inputTranslationValue,
                        inputReferenceValue : inputReferenceValue,
                        inputWordCategoryValue : inputWordCategoryValue,
                        numberTypeValue : numberTypeValue,
                        languageStageValue : languageStageValue,
                        periodOfUseValue : periodOfUseValue,
                        functionAttributeValue : functionAttributeValue,
                        copticVariantValue : copticVariantValue,
                        referenceCopticValue : referenceCopticValue,
                        userIdentification : userIdentification,
                        submit : 1
                    },
                    success : function(data) {
                        $(".new-word-success-message-wrapper").html(data);
                    }
                });
            } else {
                /* alert("Number is not ok!"); */
            }
        // INSERT NEW PARTICLE
        } else if (inputWordCategoryValue == "particle") {
            if (noError == true && inputWordCategoryValue == "particle" && noParticleInputError == true) {
                $.ajax({
                    url : "./includes/temp_new_word_scripts/temp_new_particle.script.php",
                    method : "POST",
                    data : {
                        inputGardinersValue : inputGardinersValue,
                        inputTransliterationValue : inputTransliterationValue,
                        inputTranslationValue : inputTranslationValue,
                        inputReferenceValue : inputReferenceValue,
                        inputWordCategoryValue : inputWordCategoryValue,
                        particleTypeValue : particleTypeValue,
                        languageStageValue : languageStageValue,
                        periodOfUseValue : periodOfUseValue,
                        functionAttributeValue : functionAttributeValue,
                        copticVariantValue : copticVariantValue,
                        referenceCopticValue : referenceCopticValue,
                        userIdentification : userIdentification,
                        submit : 1
                    },
                    success : function(data) {
                        $(".new-word-success-message-wrapper").html(data);
                    }
                });
            } else {
                /* alert("Particle is not ok!"); */
            }
        // INSERT NEW VERB
        } else if (inputWordCategoryValue == "verb") {
            if (noError == true && inputWordCategoryValue == "verb" && noVerbInputError == true) {
                $.ajax({
                    url : "./includes/temp_new_word_scripts/temp_new_verb.script.php",
                    method : "POST",
                    data : {
                        inputGardinersValue : inputGardinersValue,
                        inputTransliterationValue : inputTransliterationValue,
                        inputTranslationValue : inputTranslationValue,
                        inputReferenceValue : inputReferenceValue,
                        inputWordCategoryValue : inputWordCategoryValue,
                        inputVerbRootValue : inputVerbRootValue,
                        inputVerbTypeValue : inputVerbTypeValue,
                        languageStageValue : languageStageValue,
                        periodOfUseValue : periodOfUseValue,
                        functionAttributeValue : functionAttributeValue,
                        copticVariantValue : copticVariantValue,
                        referenceCopticValue : referenceCopticValue,
                        userIdentification : userIdentification,
                        submit : 1
                    },
                    success : function(data) {
                        $(".new-word-success-message-wrapper").html(data);
                    }
                });
            } else {
                /* alert("Verb is not ok!"); */
            }
        }

    });

});     