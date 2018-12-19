<?php 
    include_once "./includes/header.php";
?>

    <!-- MAIN PAGE CONTENT -->

    <main>
        <div class="main-content">
            <div class="page-title">
                <h1>Search by...</h1>
            </div>
            <div class="page-content">
                <div class="search-selector">
                    <select id="search-options" name="search-options" class="search-options">
                        <option value="gardiners-code">Gardiner's code</option>
                        <option value="transliteration">Transliteration</option>
                        <option value="translation">Translation</option>
                    </select>
                </div>
                <ul id="search-tabs" class="search-tabs">
                    <li id="tab-gr" class="tabbed active-tab">Gardiner's Code</li>
                    <li id="tab-tr" class="tabbed">Transliteration</li>
                    <li id="tab-tl" class="tabbed">Translation</li>
                </ul>
                <div id="tab-Gardiners" class="tab-Gardiners search-subpage">
                    <div class="search-wrapper">
                        <div class="search-bar">
                            <input id="js-search-gradiners" class="main-search-field" type="text" placeholder="Type in code...">
                            <button id="js-search-gradiners-button" class="search-button"></button>
                        </div>
                        <div class="search-example">
                            <p class="bold-text">Example: <span>S34-N25-M17</span></p>
                        </div>
                    </div>
                    <div id="js-search-result-gardiners" class="search-results"></div>
                </div>
                <div id="tab-Transliteration" class="tab-Transliteration search-subpage">
                    <div class="search-wrapper">
                        <div class="search-bar">
                            <input id="js-search-transliteration" class="transliteration-font2 main-search-field" type="text" placeholder="Type in transliteration...">
                            <button id="js-search-transliteratio-button" class="search-button"></button>
                        </div>
                        <div class="search-example">
                            <p class="bold-text">Example: <span class="transliteration-font1">anx</span></p>
                        </div>
                    </div>
                    <div id="js-search-result-transliteration" class="search-results"></div>
                </div>
                <div id="tab-Translation" class="tab-Translation search-subpage">
                    <div class="search-wrapper">
                        <div class="search-bar">
                            <input id="js-search-translation" class="main-search-field" type="text" placeholder="Type in translation...">
                            <button id="js-search-translation-button" class="search-button"></button>
                        </div>
                        <div class="search-example">
                            <p class="bold-text">Example: <span>life</span></p>
                        </div>
                    </div>
                    <div id="js-search-result-translation" class="search-results"></div>
                </div>
            </div>
        </div>
        <script src="./js/index_scripts.js"></script>
        <script src="./js/search_scripts.js"></script>
    </main>

<?php 
    include_once "./includes/footer.php";
?>