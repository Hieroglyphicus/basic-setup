<?php 
    include_once "./includes/header.php";
?>

    <!-- MAIN PAGE CONTENT -->

    <main>
        <div class="main-content">
            <div class="page-title">
                <h1>New word</h1>
            </div>
            <div class="notice-wrapper">
                <div class="new-word-notice">
                    <h3>Important notice</h3>
                    <p class="text-14">Before you start adding new word(s), please read our <a class="default-link text-14" href="">Guidelines</a>, so you can become familiar with principles and rules which apply in <span class="italic-text text-14">Hieroglyphicus Open AE Dictionary Project</span>.
                    <div id="js-close-new-word-notification" class="close-div-notification">&times;</div>
                </div>
            </div>
            <div class="page-content new-word-content">
                <form id="js-new-word-form" class="new-word-form" method="POST" action="" autocomplete="off" novalidate accept-charset="UTF-8">
                    <!-- FORM SUBTITLE -->
                    <div clas="form-subtitles">
                        <div class="form-subtitle-wrapper">
                            <h2>Required fields</h2>
                        </div>
                    </div>
                    <!-- GARDINERS CODE INPUT -->
                    <div class="form-section">
                        <div class="new-word-form-elements">
                            <!-- Label for form field -->
                            <label for="js-gardiners-input">Gardiner's code</label>
                            <div class="form-input-info-wrapper">
                                <div class="new-word-input-wrapper">
                                    <!-- Form input field -->
                                    <input id="js-gardiners-input" type="text" name="">
                                    <!-- DIV for error message -->   
                                    <div id="js-gardiners-input-error-div" class="validation-message-div">
                                        <!-- <div class='error-message'><p>There is an error with your input.</p></div> -->
                                    </div>
                                </div>
                                <div class="form-input-info-tooltip">
                                    <button id="js-gardiners-info" class="form-input-info-icon" type="button"></button>
                                </div>
                            </div>
                            <!-- Explanation for input field -->
                            <div id="js-gardiners-explanation" class="new-word-input-explanation">
                                <p class="text-12">Individual codes must be separated from each other by space-dash-space (e.g. S24 - N35 - Aa1).</p>
                            </div>
                        </div>
                    </div>
                    <!-- HIEROGLYPHS PREVIEW -->
                    <div class="form-section hieroglyphs-preview-section">
                        <div class="new-word-form-elements">
                            <label class="label-hieroglyphs-preview" for="">Hieroglyphs Preview</label>
                            <div id="js-hieroglyphs-preview" class="hieroglyphs-preview"></div>
                        </div>
                    </div>
                    <!-- TRANSLITERATION INPUT -->
                    <div class="form-section">
                        <div class="new-word-form-elements">
                            <!-- Label for form field -->
                            <label for="js-transliteration-input">Transliteration</label>
                            <div class="form-input-info-wrapper">
                                <div class="new-word-input-wrapper">
                                    <!-- Form input field -->
                                    <input id="js-transliteration-input" class="transliteration-font1" type="text" name="">
                                    <!-- DIV for error message -->   
                                    <div id="js-transliteration-input-error-div" class="validation-message-div">
                                        <!-- <div class='error-message'><p>There is an error with your input.</p></div> -->
                                    </div>
                                </div>
                                <div class="form-input-info-tooltip">
                                    <button id="js-transliteration-info" class="form-input-info-icon" type="button"></button>
                                </div>
                            </div>
                            <!-- Explanation for input field -->
                            <div id="js-transliteration-explanation" class="new-word-input-explanation">
                                <p class="text-12">The input should follow <span class="italic-text text-12">European Transliteration System</span>. For comparisson with other systems, check <a class="default-link text-12" href="">this table</a>.<br class="text-12">Type only <span class="bold-text text-12">one</span> of possible transliterations per entry.</p></p>
                            </div>
                        </div>
                    </div>
                    <!-- TRANSLATION INPUT -->
                    <div class="form-section">
                        <div class="new-word-form-elements">
                            <!-- Label for form field -->
                            <label for="js-translation-input">Translation</label>
                            <div class="form-input-info-wrapper">
                                <div class="new-word-input-wrapper">
                                    <!-- Form input field -->
                                    <input id="js-translation-input" type="text" name="">
                                    <!-- DIV for error message -->   
                                    <div id="js-translation-input-error-div" class="validation-message-div">
                                        <!-- <div class='error-message'><p>There is an error with your input.</p></div> -->
                                    </div>
                                </div>
                                <div class="form-input-info-tooltip">
                                    <button id="js-translation-info" class="form-input-info-icon" type="button"></button>
                                </div>
                            </div>
                            <!-- Explanation for input field -->
                            <div id="js-translation-explanation" class="new-word-input-explanation">
                                <p class="text-12">Type only <span class="bold-text text-12">one</span> of possible translations per entry. You can use only letters, numbers, and minus sign (-) for compound words.</p></p>
                            </div>
                        </div>
                    </div>
                    <!-- WORD TYPE -->
                    <div class="form-section">
                            <div class="new-word-form-elements">
                                <!-- WORD CATEGORIES SELECTOR -->
                                <!-- Label for form field -->
                                <label for="js-word-category-selector">Word category</label>
                                <div class="form-input-info-wrapper">
                                    <div class="new-word-input-wrapper">
                                        <!-- Form select field -->
                                        <select id="js-word-category-selector" name="">
                                            <option value="" disabled selected>Select word category</option>
                                            <option value="noun">noun</option>
                                            <option value="pronoun">pronoun</option>
                                            <option value="adjective">adjective</option>
                                            <option value="preposition">preposition</option>
                                            <option value="adverb">adverb</option>
                                            <option value="number">number</option>
                                            <option value="particle">particle</option>
                                            <option value="verb">verb</option>
                                        </select>
                                        <!-- DIV for error message -->   
                                        <div id="js-word-category-selector-error-div" class="validation-message-div">
                                        </div>
                                    </div>
                                    <!-- Info button -->
                                    <div class="form-input-info-tooltip">
                                        <button id="js-word-category-info" class="form-input-info-icon" type="button"></button>
                                    </div>
                                </div>
                                <!-- Explanation for input field -->
                                <div id="js-word-category-explanation" class="new-word-input-explanation">
                                    <p class="text-12">By selecting one of categories you will get options for given word category.</p></p>
                                </div>
                                <!-- WORD CATEGORIES OPTIONS -->
                                <div class="word-categories">
                                    <!-- NOUNS -->
                                    <div class="word-category noun-options">
                                        <legend>Gender</legend>
                                        <div class="hgs-radio-wrapper">
                                            <input type="radio" name="noun-gender" id="noun-gender-masculine" value="masculine">
                                            <label class="noun-gender-label" for="noun-gender-masculine"> masculine</label>
                                        </div>
                                        <div class="hgs-radio-wrapper">
                                            <input type="radio" name="noun-gender" id="noun-gender-feminine" value="feminine">
                                            <label class="noun-gender-label" for="noun-gender-feminine"> feminine</label>
                                        </div>
                                        <div id="js-noun-gender-error-div" class="radio-validation-message-div"></div>
                                        <legend>Number</legend>
                                        <div class="hgs-radio-wrapper">
                                            <input type="radio" name="noun-number" id="noun-number-singular" value="singular">
                                            <label class="noun-number-label" for="noun-number-singular"> singular</label>
                                        </div>
                                        <div class="hgs-radio-wrapper">
                                            <input type="radio" name="noun-number" id="noun-number-singular-fd" value="singular (false dual)">
                                            <label class="noun-number-label" for="noun-number-singular-fd"> singular (false dual)</label>
                                        </div>
                                        <div class="hgs-radio-wrapper">
                                            <input type="radio" name="noun-number" id="noun-number-singular-fp" value="singular (false plural)">
                                            <label class="noun-number-label" for="noun-number-singular-fp"> singular (false plural)</label>
                                        </div>
                                        <div class="hgs-radio-wrapper">
                                            <input type="radio" name="noun-number" id="noun-number-dual" value="dual">
                                            <label class="noun-number-label" for="noun-number-dual"> dual</label>
                                        </div>
                                        <div class="hgs-radio-wrapper">
                                            <input type="radio" name="noun-number" id="noun-number-plural" value="plural">
                                            <label class="noun-number-label" for="noun-number-plural"> plural</label>
                                        </div>
                                        <div class="hgs-radio-wrapper">
                                            <input type="radio" name="noun-number" id="noun-number-collective" value="collective">
                                            <label class="noun-number-label" for="noun-number-collective"> collective</label>
                                        </div>
                                        <div id="js-noun-number-error-div" class="radio-validation-message-div"></div>
                                        <legend>Subclass(es)</legend>
                                        <div class="word-categories-nouns-subclass">
                                        <select id="js-subclass-primary-selector" name="subclass-primary-selector">
                                            <option value="" selected disabled>Select noun 1° subclass</option>
                                            <option value="animal">animal</option>
                                            <option value="architecture">architecture</option>
                                            <option value="astronomy">astronomy</option>
                                            <option value="bird">bird</option>
                                            <option value="boat">boat</option>
                                            <option value="body">body</option>
                                            <option value="clothing">clothing</option>
                                            <option value="divinity">divinity</option>
                                            <option value="fish">fish</option>
                                            <option value="food">food</option>
                                            <option value="fractions">fractions</option>
                                            <option value="furniture">furniture</option>
                                            <option value="location">location</option>
                                            <option value="mathematics">mathematics</option>
                                            <option value="medicine">medicine</option>
                                            <option value="mining">mining</option>
                                            <option value="music">music</option>
                                            <option value="personal name">personal name</option>
                                            <option value="plant">plant</option>
                                            <option value="title">title</option>
                                            <option value="N/A">N/A</option>
                                        </select>
                                        <select id="js-subclass-secondary-selector" name="subclass-secondary-selector">
                                            <option value="" selected disabled>Select noun 2° subclass</option>
                                            <option value="animal">animal</option>
                                            <option value="architecture">architecture</option>
                                            <option value="astronomy">astronomy</option>
                                            <option value="bird">bird</option>
                                            <option value="boat">boat</option>
                                            <option value="body">body</option>
                                            <option value="clothing">clothing</option>
                                            <option value="divinity">divinity</option>
                                            <option value="fish">fish</option>
                                            <option value="food">food</option>
                                            <option value="fractions">fractions</option>
                                            <option value="furniture">furniture</option>
                                            <option value="location">location</option>
                                            <option value="mathematics">mathematics</option>
                                            <option value="medicine">medicine</option>
                                            <option value="mining">mining</option>
                                            <option value="music">music</option>
                                            <option value="personal name">personal name</option>
                                            <option value="plant">plant</option>
                                            <option value="title">title</option>
                                            <option value="N/A">N/A</option>
                                        </select>
                                        </div>
                                    </div>     
                                    <!-- PRONOUNS -->
                                    <div class="word-category pronoun-options">
                                        <div class="pronoun-input-wrapper">
                                            <select id="js-pronoun-category-selector" name="pronoun-category-selector">
                                                <option value="" disabled selected>Select pronoun category</option>
                                                <option value="personal">personal</option>
                                                <option value="demonstrative">demonstrative</option>
                                                <option value="possessive">possessive</option>
                                                <option value="interrogative">interrogative</option>
                                                <option value="impersonal">impersonal</option>
                                            </select>
                                            <div id="js-pronoun-category-selector-error-div" class="validation-message-div"></div>
                                        </div>
                                        <!-- PERSONAL PRONOUNS -->
                                        <div class="pronouns-wrapper personal-pronoun-options">
                                            <legend>Type</legend>
                                            <div class="hgs-radio-wrapper">
                                                <input type="radio" name="personal-pronoun-type" id="personal-pronoun-type-suffix" value="suffix">
                                                <label class="personal-pronoun-type-label" for="personal-pronoun-type-suffix"> suffix</label>
                                            </div>
                                            <div class="hgs-radio-wrapper">
                                                <input type="radio" name="personal-pronoun-type" id="personal-pronoun-type-dependent" value="dependent">
                                                <label class="personal-pronoun-type-label" for="personal-pronoun-type-dependent"> dependent</label>
                                            </div>
                                            <div class="hgs-radio-wrapper">
                                                <input type="radio" name="personal-pronoun-type" id="personal-pronoun-type-independent" value="independent">
                                                <label class="personal-pronoun-type-label" for="personal-pronoun-type-independent"> independent</label>
                                            </div>
                                            <div class="hgs-radio-wrapper">
                                                <input type="radio" name="personal-pronoun-type" id="personal-pronoun-type-stative" value="stative">
                                                <label class="personal-pronoun-type-label" for="personal-pronoun-type-stative"> stative</label>
                                            </div>
                                            <div class="hgs-radio-wrapper">
                                                <input type="radio" name="personal-pronoun-type" id="personal-pronoun-type-subject" value="subject">
                                                <label class="personal-pronoun-type-label" for="personal-pronoun-type-subject"> subject</label>
                                            </div>
                                            <div id="js-personal-pronoun-error-div" class="radio-validation-message-div"></div>
                                            <legend>Person, gender, number</legend>
                                            <div class="pronoun-input-wrapper">
                                                <select id="js-personal-pronoun-form-selector" name="">
                                                    <option value="" disabled selected>Select pronoun form</option>
                                                    <optgroup label="Singular">
                                                        <option value="1st person singular">1st person singular</option>
                                                        <option value="2nd person singular">2nd person singular</option>
                                                        <option value="2nd person masculine singular">2nd person masculine singular</option>
                                                        <option value="2nd person feminine singular">2nd person feminine singular</option>
                                                        <option value="3rd person singular">3rd person singular</option>
                                                        <option value="3rd person masculine singular">3rd person masculine singular</option>
                                                        <option value="3rd person feminine singular">3rd person feminine singular</option>
                                                    </optgroup>
                                                    <optgroup label="Dual">
                                                        <option value="1st person dual">1st person dual</option>
                                                        <option value="2nd person dual">2nd person dual</option>
                                                        <option value="3rd person dual">3rd person dual</option>
                                                        <option value="3rd person masculine dual">3rd person masculine dual (only for OE stative)</option>
                                                        <option value="3rd person feminine dual">3rd person feminine dual (only for OE stative)</option>
                                                    </optgroup>
                                                    <optgroup label="Plural">
                                                        <option value="1st person plural">1st person plural</option>
                                                        <option value="2nd person plural">2nd person plural</option>
                                                        <option value="3rd person plural">3rd person plural</option>
                                                        <option value="3rd person masculine plural">3rd person masculine plural (only for OE stative)</option>
                                                        <option value="3rd person feminine plural">3rd person feminine plural (only for OE stative)</option>
                                                    </optgroup>
                                                    <optgroup label="Neutral (only for dependent pronouns)">
                                                        <option value="3rd person neutral">3rd person neutral</option>
                                                    </optgroup>
                                                </select>
                                                <div id="js-personal-pronoun-form-selector-error-div" class="validation-message-div">
                                                    <!-- <div class='error-message'><p>There is an error with your input.</p></div> -->
                                                </div>
                                            </div>
                                        </div>
                                        <!-- DEMONSTRATIVE PRONOUNS -->
                                        <div class="pronouns-wrapper demonstrative-pronoun-options">
                                            <legend>Gender, number</legend>
                                            <div class="hgs-radio-wrapper">
                                                <input type="radio" name="demonstrative-pronoun-form" id="demonstrative-pronoun-form-ms" value="masculine singular">
                                                <label class="demonstrative-pronoun-form-label" for="demonstrative-pronoun-form-ms"> masculine singular</label>
                                            </div>
                                            <div class="hgs-radio-wrapper">
                                                <input type="radio" name="demonstrative-pronoun-form" id="demonstrative-pronoun-form-fs" value="feminine singular">
                                                <label class="demonstrative-pronoun-form-label" for="demonstrative-pronoun-form-fs"> feminine singular</label>
                                            </div>
                                            <div class="hgs-radio-wrapper">
                                                <input type="radio" name="demonstrative-pronoun-form" id="demonstrative-pronoun-form-mp" value="masculine plural">
                                                <label class="demonstrative-pronoun-form-label" for="demonstrative-pronoun-form-mp"> masculine plural</label>
                                            </div>
                                            <div class="hgs-radio-wrapper">
                                                <input type="radio" name="demonstrative-pronoun-form" id="demonstrative-pronoun-form-fp" value="feminine plural">
                                                <label class="demonstrative-pronoun-form-label" for="demonstrative-pronoun-form-fp"> feminine plural</label>
                                            </div>
                                            <div class="hgs-radio-wrapper">
                                                <input type="radio" name="demonstrative-pronoun-form" id="demonstrative-pronoun-form-neutral" value="neutral">
                                                <label class="demonstrative-pronoun-form-label" for="demonstrative-pronoun-form-neutral"> neutral</label>
                                            </div>
                                            <div id="js-demonstrative-pronoun-error-div" class="radio-validation-message-div"></div>
                                        </div>
                                        <!-- POSSESIVE PRONOUNS -->
                                        <div class="pronouns-wrapper possessive-pronoun-options">
                                            <legend>Gender, number</legend>
                                            <div class="hgs-radio-wrapper">
                                                <input type="radio" name="possessive-pronoun-form" id="possessive-pronoun-form-ms" value="masculine singular">
                                                <label class="possessive-pronoun-form-label" for="possessive-pronoun-form-ms"> masculine singular</label>
                                            </div>
                                            <div class="hgs-radio-wrapper">
                                                <input type="radio" name="possessive-pronoun-form" id="possessive-pronoun-form-fs" value="feminine singular">
                                                <label class="possessive-pronoun-form-label" for="possessive-pronoun-form-fs"> feminine singular</label>
                                            </div>
                                            <div class="hgs-radio-wrapper">
                                                <input type="radio" name="possessive-pronoun-form" id="possessive-pronoun-form-p" value="plural">
                                                <label class="possessive-pronoun-form-label" for="possessive-pronoun-form-p"> plural</label>
                                            </div>
                                            <div id="js-possessive-pronoun-error-div" class="radio-validation-message-div"></div>
                                        </div>
                                    </div>
                                    <!-- ADJECTIVES -->
                                    <div class="word-category adjective-options">
                                        <legend>Type</legend>
                                        <div class="hgs-radio-wrapper">
                                            <input type="radio" name="adjective-type" id="adjective-type-primary" value="primary" disabled>
                                            <label class="adjective-type-label-inactive" for="adjective-type-primary"> primary (already added)</label>
                                        </div>
                                        <div class="hgs-radio-wrapper">
                                            <input type="radio" name="adjective-type" id="adjective-type-secondary" value="secondary">
                                            <label class="adjective-type-label" for="adjective-type-secondary"> secondary</label>
                                        </div>
                                        <div class="hgs-radio-wrapper">
                                            <input type="radio" name="adjective-type" id="adjective-type-derived" value="derived (nisbe)">
                                            <label class="adjective-type-label" for="adjective-type-derived"> derived (nisbe)</label>
                                        </div>
                                        <div class="hgs-radio-wrapper">
                                            <input type="radio" name="adjective-type" id="adjective-type-interrogative" value="interrogative" disabled>
                                            <label class="adjective-type-label-inactive" for="adjective-type-interrogative"> interrogative (already added)</label>
                                        </div>
                                        <div id="js-adjective-type-error-div" class="radio-validation-message-div"></div>
                                        <legend>Gender</legend>
                                        <div class="hgs-radio-wrapper">
                                            <input type="radio" name="adjective-gender" id="adjective-gender-masculine" value="masculine">
                                            <label class="adjective-gender-label" for="adjective-gender-masculine"> masculine</label>
                                        </div>
                                        <div class="hgs-radio-wrapper">
                                            <input type="radio" name="adjective-gender" id="adjective-gender-feminine" value="feminine">
                                            <label class="adjective-gender-label" for="adjective-gender-feminine"> feminine</label>
                                        </div>
                                        <div id="js-adjective-gender-error-div" class="radio-validation-message-div"></div>
                                        <legend>Number</legend>
                                        <div class="hgs-radio-wrapper">
                                            <input type="radio" name="adjective-number" id="adjective-number-singular" value="singular">
                                            <label class="adjective-number-label" for="adjective-number-singular"> singular</label>
                                        </div>
                                        <div class="hgs-radio-wrapper">
                                            <input type="radio" name="adjective-number" id="adjective-number-dual" value="dual">
                                            <label class="adjective-number-label" for="adjective-number-dual"> dual</label>
                                        </div>
                                        <div class="hgs-radio-wrapper">
                                            <input type="radio" name="adjective-number" id="adjective-number-plural" value="plural">
                                            <label class="adjective-number-label" for="adjective-number-plural"> plural</label>
                                        </div>
                                        <div id="js-adjective-number-error-div" class="radio-validation-message-div"></div>
                                    </div>
                                    <!-- PREPOSITIONS -->
                                    <div class="word-category preposition-options">
                                        <legend>Type</legend>
                                        <div class="hgs-radio-wrapper">
                                            <input type="radio" name="preposition-type" id="preposition-type-primary" value="primary" checked>
                                            <label for="preposition-type-primary"> primary</label>
                                        </div>
                                        <div class="hgs-radio-wrapper">
                                            <input type="radio" name="preposition-type" id="preposition-type-compound" value="compound" disabled>
                                            <label for="preposition-type-compound"> compound (must be added as phrase)</label>
                                        </div>
                                    </div> 
                                    <!-- ADVERBS -->
                                    <div class="word-category adverb-options">
                                        <legend>Type</legend>
                                        <div class="hgs-radio-wrapper">
                                            <input type="radio" name="adverb-type" id="adverb-type-primary" value="primary">
                                            <label class="adverb-type-label" for="adverb-type-primary"> primary</label>
                                        </div>
                                        <div class="hgs-radio-wrapper">
                                            <input type="radio" name="adverb-type" id="adverb-type-secondary" value="interrogative">
                                            <label class="adverb-type-label" for="adverb-type-secondary"> interrogative</label>
                                        </div>
                                        <div class="hgs-radio-wrapper">
                                            <input type="radio" name="adverb-type" id="adverb-type-derived" value="other">
                                            <label class="adverb-type-label" for="adverb-type-derived"> other</label>
                                        </div>
                                        <div id="js-adverb-type-error-div" class="radio-validation-message-div"></div>
                                    </div>
                                    <!-- NUMBERS -->
                                    <div class="word-category number-options">
                                        <legend>Type</legend>
                                        <div class="hgs-radio-wrapper">
                                            <input type="radio" name="number-type" id="number-type-cardinal" value="cardinal">
                                            <label class="number-type-label" for="number-type-cardinal"> cardinal</label>
                                        </div>
                                        <div class="hgs-radio-wrapper">
                                            <input type="radio" name="number-type" id="number-type-ordinal" value="ordinal">
                                            <label class="number-type-label" for="number-type-ordinal"> ordinal</label>
                                        </div>
                                        <div class="hgs-radio-wrapper">
                                            <input type="radio" name="number-type" id="number-type-fraction" value="fraction">
                                            <label class="number-type-label" for="number-type-fraction"> fraction</label>
                                        </div>
                                        <div id="js-number-type-error-div" class="radio-validation-message-div"></div>
                                    </div>
                                    <!-- PARTICLE -->
                                    <div class="word-category particle-options">
                                        <legend>Type</legend>
                                        <div class="hgs-radio-wrapper">
                                            <input type="radio" name="particle-type" id="particle-type-enclitic" value="enclitic">
                                            <label class="particle-type-label" for="particle-type-enclitic"> enclitic</label>
                                        </div>
                                        <div class="hgs-radio-wrapper">
                                            <input type="radio" name="particle-type" id="particle-type-proclitic" value="proclitic">
                                            <label class="particle-type-label" for="particle-type-proclitic"> proclitic</label>
                                        </div>
                                        <div class="hgs-radio-wrapper">
                                            <input type="radio" name="particle-type" id="particle-type-interjection" value="interjection">
                                            <label class="particle-type-label" for="particle-type-interjection"> interjection</label>
                                        </div>
                                        <div id="js-particle-type-error-div" class="radio-validation-message-div"></div>
                                    </div>
                                    <!-- VERBS -->
                                    <div class="word-category verb-options">
                                        <div class="verb-input-wrapper">
                                            <select id="js-verb-root-selector" name="verb-root-selector" class="">
                                                <option value="" disabled selected>Select root class</option>
                                                <option value="2-lit.">2-lit.</option>
                                                <option value="2ae-inf.">2ae-inf.</option>
                                                <option value="2ae-gem.">2ae-gem.</option>
                                                <option value="3-lit.">3-lit.</option>
                                                <option value="3ae-inf.">3ae-inf.</option>
                                                <option value="3ae-gem.">3ae-gem.</option>
                                                <option value="4-lit.">4-lit.</option>
                                                <option value="4ae-inf.">4ae-inf.</option>
                                                <option value="5-lit.">5-lit.</option>
                                                <option value="6-lit.">6-lit.</option>
                                                <option value="caus. 2-lit.">caus. 2-lit.</option>
                                                <option value="caus. 2ae-gem.">caus. 2ae-gem.</option>
                                                <option value="caus. 3-lit.">caus. 3-lit.</option>
                                                <option value="caus. 3ae-inf.">caus. 3ae-inf.</option>
                                                <option value="caus. 3ae-gem.">caus. 3ae-gem.</option>
                                                <option value="caus. 4-lit.">caus. 4-lit.</option>
                                                <option value="caus. 4ae-inf.">caus. 4ae-inf.</option>
                                                <option value="caus. 5-lit.">caus. 5-lit.</option>
                                                <option value="anomalous">anomalous</option>
                                                <option value="N/A">N/A</option>
                                            </select>
                                            <!-- DIV for error message -->   
                                            <div id="js-verb-root-selector-error-div" class="validation-message-div">
                                            </div>
                                        </div>
                                        <div class="verb-input-wrapper">
                                            <select id="js-verb-type-selector" name="verb-type-selector" class="">
                                                <option value="" disabled selected>Select verb type</option>
                                                <option value="transitive">transitive</option>
                                                <option value="intransitive">intransitive</option>
                                                <option value="N/A">N/A</option>
                                            </select>
                                            <!-- DIV for error message -->   
                                            <div id="js-verb-type-selector-error-div" class="validation-message-div">
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                            </div>               
                    </div>
                    <!-- REFERENCE INPUT -->
                    <div class="form-section last-required-section">
                        <div class="new-word-form-elements">
                            <!-- Label for form field -->
                            <label for="js-reference-input">Reference</label>
                            <div class="form-input-info-wrapper">
                                <div class="new-word-input-wrapper">
                                    <!-- Form input field -->
                                    <input id="js-reference-input" type="text" name="">
                                    <!-- DIV for error message -->   
                                    <div id="js-reference-input-error-div" class="validation-message-div">
                                        <!-- <div class='error-message'><p>There is an error with your input.</p></div> -->
                                    </div>
                                </div>
                                <div class="form-input-info-tooltip">
                                    <button id="js-reference-info" class="form-input-info-icon" type="button"></button>
                                </div>
                            </div>
                            <!-- Explanation for input field -->
                            <div id="js-reference-explanation" class="new-word-input-explanation">
                                <p class="text-12">Type only <span class="bold-text text-12">one</span> reference per entry.<br class="text-12">For references use only well-known and recognized dictionaries and grammars. For referencing rules see <a class="default-link text-12" href="">Guidelines</a>.</p>
                            </div>
                        </div>
                    </div>
                    <!-- FORM SUBTITLE -->
                    <div clas="form-subtitles">
                        <div class="form-subtitle-wrapper">
                            <h2>Optional fields</h2>
                        </div>
                    </div>
                    <!-- LANGUAGE STAGE TYPE -->
                    <div class="form-section">
                        <div class="new-word-form-elements">
                            <!-- Label for form field -->
                            <label for="js-language-stage-selector">Language stage</label>
                            <div class="form-input-info-wrapper">
                                <div class="new-word-input-wrapper">
                                    <!-- Form select field -->
                                    <select id="js-language-stage-selector" name="language-stage-selector">
                                        <option value="" disabled selected>Select stage</option>
                                        <option value="Old Egyptian">Old Egyptian</option>
                                        <option value="Middle Egyptian">Middle Egyptian</option>
                                        <option value="Late Egyptian">Late Egyptian</option>
                                        <option value="N/A">N/A</option>
                                    </select>
                                    <!-- DIV for error message -->   
                                    <div id="js-language-stage-selector-error-div" class="validation-message-div">
                                        <!-- <div class='error-message'><p>There is an error with your input.</p></div> -->
                                    </div>
                                </div>
                                <!-- Info button -->
                                <div class="form-input-info-tooltip">
                                    <button id="js-language-stage-info" class="form-input-info-icon" type="button"></button>
                                </div>
                            </div>
                            <!-- Explanation for input field -->
                            <div id="js-language-stage-explanation" class="new-word-input-explanation">
                                <p class="text-12">Choose this only if sure to which stage word belongs. Choose "N/A" if word usage is not limited to particular stage.</p></p>
                            </div>
                        </div>               
                    </div>
                    <!-- PERIOD OF USE INPUT -->
                    <div class="form-section">
                        <div class="new-word-form-elements">
                            <!-- Label for form field -->
                            <label for="js-period-of-use-input">Period of use</label>
                            <div class="form-input-info-wrapper">
                                <div class="new-word-input-wrapper">
                                    <!-- Form input field -->
                                    <input id="js-period-of-use-input" name="period-of-use-input" type="text">
                                    <!-- DIV for error message -->   
                                    <div id="js-period-of-use-input-error-div" class="validation-message-div">
                                        <!-- <div class='error-message'><p>There is an error with your input.</p></div> -->
                                    </div>
                                </div>
                                <div class="form-input-info-tooltip">
                                    <button id="js-period-of-use-info" class="form-input-info-icon" type="button"></button>
                                </div>
                            </div>
                            <!-- Explanation for input field -->
                            <div id="js-period-of-use-explanation" class="new-word-input-explanation">
                                <p class="text-12">Use this field for period of word use (e.g. From 21<sup>st</sup> dynasty, 12<sup>th</sup> to 18<sup>th</sup> Dynasty, Graeco-Roman...).</p>
                            </div>
                        </div>
                    </div>
                    <!-- FUNCTION INPUT -->
                    <div class="form-section">
                        <div class="new-word-form-elements">
                            <!-- Label for form field -->
                            <label for="js-function-input">Function or other attribute</label>
                            <div class="form-input-info-wrapper">
                                <div class="new-word-input-wrapper">
                                    <!-- Form input field -->
                                    <input id="js-function-input" name="function-input" type="text">
                                    <!-- DIV for error message -->   
                                    <div id="js-function-input-error-div" class="validation-message-div">
                                        <!-- <div class='error-message'><p>There is an error with your input.</p></div> -->
                                    </div>
                                </div>
                                <div class="form-input-info-tooltip">
                                    <button id="js-function-info" class="form-input-info-icon" type="button"></button>
                                </div>
                            </div>
                            <!-- Explanation for input field -->
                            <div id="js-function-explanation" class="new-word-input-explanation">
                                <p class="text-12">Use this field for atributes/functions as "epithet", "cryptic", uncertain hieroglyph, area of use if the meaning is still unknown, etc.</p>
                            </div>
                        </div>
                    </div>
                    <!-- COPTIC VARIANT INPUT -->
                    <!-- <div class="form-section">
                        <div class="new-word-form-elements">
                            <label for="js-coptic-variant-input">Coptic descendant(s)</label>
                            <div class="form-input-info-wrapper">
                                <div class="new-word-input-wrapper">
                                    <input id="js-coptic-variant-input" class="coptic-font-12" name="coptic-variant-input" type="text">
                                    <div id="js-coptic-variant-input-error-div" class="validation-message-div">
                                    </div>
                                </div>
                                <div class="form-input-info-tooltip">
                                    <button id="js-coptic-variant-info" class="form-input-info-icon" type="button"></button>
                                </div>
                            </div>
                            <div id="js-coptic-variant-explanation" class="new-word-input-explanation">
                                <p class="text-12">Write Coptic word which is descendant of the word you try to submit, if available. If there is more the one Coptic descendant words, separate them with space-slash-space (" / ").</p>
                            </div>
                        </div>
                    </div> -->
                    <!-- COPTIC REFERENCE INPUT -->
               <!-- <div id="js-coptic-reference-wrapper" class="form-section">
                        <div class="new-word-form-elements">
                            <label for="js-coptic-reference-input">Reference for Coptic descendant(s)</label>
                            <div class="form-input-info-wrapper">
                                <div class="new-word-input-wrapper">
                                    <input id="js-coptic-reference-input" name="coptic-reference-input" type="text" value="N/A" disabled>
                                    <div id="js-coptic-reference-input-error-div" class="validation-message-div">
                                    </div>
                                </div>
                                <div class="form-input-info-tooltip">
                                    <button id="js-coptic-reference-info" class="form-input-info-icon" type="button"></button>
                                </div>
                            </div>
                            <div id="js-coptic-reference-explanation" class="new-word-input-explanation">
                                <p class="text-12">Type only <span class="bold-text text-12">one</span> reference per entry.<br class="text-12">For references use only well-known and recognized dictionaries and grammars. For referencing rules see <a class="default-link text-12" href="">Guidelines</a>.</p>
                            </div>
                        </div>
                    </div> -->
                    <!-- SUCCESS MESSAGE -->
                    <div class="new-word-success-message-wrapper"></div>
                    <!-- SUBMIT BUTTON -->
                    <div class="new-word-submit-button-wrapper">
                        <button id="js-new-word-submit-button" class="default-button" name="new-word-submit-button" type="submit">Submit new word!</button>
                    </div>
                </form>
            </div>
        </div>
        <script>
            var userIdentification = <?php echo $_SESSION["userid"]; ?>;
        </script>
        <script src="./js/new_word_scripts.js"></script>
    </main>

<?php 
    include_once "./includes/footer.php";
?>