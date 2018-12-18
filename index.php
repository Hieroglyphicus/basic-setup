
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hieroglyphicus - Open Ancient Egyptian Dictionary Project</title>
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    <link href="https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700&amp;subset=latin-ext" rel="stylesheet">
    <link rel="stylesheet" href="./css/reboot.css">
    <link rel="stylesheet" href="./css/style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="./js/hieroglyphicus.js">
    </script>
</head>
<body>
    <header class="main-header">
        <div class="filler"></div>
        <a href="./index.php"><img class="logo" src="./images/logo.svg" alt=""></a>
        <div class="filler">
            
                        <button id="login-button" class="sign-button">
                            <img src="./images/sign_icon.svg"><span>Login / Register</span>
                        </button>
                            </div>
    </header>

    <!-- MAIN NAVIGATIONAL MENU -->

    <nav id="main-nav" class="main-nav">
        <ul id="main-menu" class="main-menu">
            <li><a href="./index.php">Home</a></li>
            <li class="js-mm-dd-link">
                <a href="javascript:void(0)">Improve Dictionary<span class="hgs-icons">&#xe900;</span></a>
                <ul class="submenu">
                    
                                <li class="unloggedin-content"><a href="javascript:void(0)">Add new word</a></li>
                                <li class="unavailable-content"><a href="javascript:void(0)">Add new phrase</a></li>
                                <li class="unavailable-content"><a href="javascript:void(0)">Add new sentence</a></li>
                                            </ul>
            </li>
            <li><a href="#">Hieroglyphs list</a></li>
            <li><a href="#">Texts</a></li>
            <li class="js-mm-dd-link">
                <a href="javascript:void(0)">Tools<span class="hgs-icons">&#xe900;</span></a>
                <ul class="submenu">
                    <li class="unavailable-content"><a href="javascript:void(0)">Glyph Writter</a></li>
                    <li class="unavailable-content"><a href="javascript:void(0)">Glyph Translator</a></li>
                </ul>
            </li>
            <li><a href="./about.php">About Us</a></li>
                    </ul>
    </nav>

    <!-- SMALL NAVIGATIONAL MENU -->

    <nav id="small-nav" class="small-nav">
        <div id="js-show-small-menu" class="show-small-menu">
            <img src="./images/small_menu_icon.svg" alt="">       
        </div>
        <div>
            <ul id="js-small-menu" class="small-menu">
                <li><a href="./index.php">Home</a></li>
                <li class="js-sm-dd-link">
                    <a href="javascript:void(0)">Improve Dictionary<span class="hgs-icons"> &#xe900;</span></a>
                    <ul class="small-submenu">
                        
                                    <li class="unloggedin-content"><a href="javascript:void(0)">Add new word</a></li>
                                    <li class="unavailable-content"><a href="javascript:void(0)">Add new phrase</a></li>
                                    <li class="unavailable-content"><a href="javascript:void(0)">Add new sentence</a></li>
                                                    </ul>
                </li>
                <li><a href="#">Hieroglyphs list</a></li>
                <li><a href="#">Texts</a></li>
                <li class="js-sm-dd-link">
                    <a href="javascript:void(0)">Tools<span class="hgs-icons"> &#xe900;</span></a>
                    <ul class="small-submenu">
                        <li class="unavailable-content"><a href="javascript:void(0)">Glyph Writter</a></li>
                        <li class="unavailable-content"><a href="javascript:void(0)">Glyph Translator</a></li>
                    </ul>
                </li>
                <li><a href="./about.php">About Us</a></li>
                                
                            <li id="small-nav-login"><a href="javascript:void(0)">Login / Register</a></li>
                                    </ul>
        </div>
    </nav>

    <!-- SIGN IN / SIGN UP MODAL -->

    <div id="js-login-modal" class="modal-background lg-modal-display">
        <div id="modal-content" class="modal-content login-modal">
            <div id="js-close-lg-modal-x" class="close-modal-x">&times;</div>
            <div class="modal-header">
                <img src="./images/winged_disc.svg" alt="" />
                <h1>Sign In</h1>
            </div>
            <div id="js-login-modal-message-wrapper" class="login-modal-message-wrapper">
            </div>
            <div class="modal-body">
                <form id="js-login-modal-form" action="" novalidate accept-charset="UTF-8">
                    <div class="login-form-elements">
                        <label for="js-login-email">E-mail:</label>
                        <input id="js-login-email" name="login-email" class="login-form-input" type="email" autofocus>
                    </div>
                    <div class="login-form-elements">
                        <div>
                            <label for="js-login-password">Password:</label>
                            <div id="js-login-password-display" class="password-display hide-password"></div>
                        </div>
                        <input id="js-login-password" name="login-password" class="login-form-input" type="password">
                    </div>
                    <div class="login-remember">
                        <div>
                            <input id="js-login-remember-checkbox" name="login-remember-checkbox" type="checkbox" unchecked>
                            <label for="js-login-remember-checkbox">Remember me</label>
                        </div>
                        <a href="" class="default-link">Forgotten password?</a>
                    </div>
                    <div class="sign-in-button-container">
                        <button id="js-sign-in-button" name="sign-in-button" class="sign-in-button" type="submit">Sign in</button>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <p>You don't have an account?</p>
                <a href="registration.php" class="default-link">Register here.</a>
            </div>
            <script src="./js/signin_scripts.js"></script>
        </div>
    </div>

    <!-- UNAVAILABLE MODAL -->

    <div id="js-unavailable-modal" class="modal-background un-modal-display">
        <div id="modal-content" class="modal-content unavailable-modal">
            <div id="js-close-un-modal-x" class="close-modal-x">&times;</div>
            <div class="modal-header un-modal-header">
                <h2>Notice</h2>
            </div>
            <div class="modal-body un-modal-body">
                <p>This content is unavailable at the moment.</p>
            </div>
        </div>
    </div>

    <!-- UNLOGGEDIN MODAL -->

    <div id="js-unloggedin-modal" class="modal-background ul-modal-display">
        <div id="modal-content" class="modal-content unlogged-modal">
            <div id="js-close-ul-modal-x" class="close-modal-x">&times;</div>
            <div class="modal-header ul-modal-header">
                <h2>Notification</h2>
            </div>
            <div class="modal-body un-modal-body">
                <div class="note-text">
                    <p class="text-14">You must be <a id="js-logged-in-from-notice" class="default-link text-14 bold-text" href="javascript:void(0)">logged in</a> to access this content.</p>
                </div>
                <div class="registering-benefits">
                    <h3>You are not registered?</h3>
                    <p class="text-14">By registering you are getting access to extended features like:</p>
                    <ul>
                        <li class="text-14">You can add <span class="text-14 bold-text"> new words, phrases</span> and <span class="bold-text text-14">sentences</span></li>
                        <li class="text-14">You can suggest <span class="text-14 bold-text">corrections</span> and <span class="bold-text text-14">additions</span> to the current entries</li>
                        <li class="text-14">You will become participant of <span class="text-14 bold-text">Hieroglyphicus</span> project and your name will be visible at the <a class="default-link text-14" href="">Contributors page</a> and near entries you added</li>
                    </ul>
                </div>
                <form class="join-button-holder" action="">
                    <button id="join-hgs-today-button" class="join-hgs-today-button" type="button">Join Hieroglyphicus today!</button>
                </form>
            </div>
        </div>
    </div>

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


    <!-- FOOTER -->

    <footer class="main-footer">
        <div class="main-footer-wrapper">
            <p>Copyright © 2018 <i>Particle Design</i>. All rights reserved.</p>
        </div>
    </footer>
<div style='text-align: right;position: fixed;z-index:9999999;bottom: 0; width: 100%;cursor: pointer;line-height: 0;display:block !important;'><a title="Hosted on free web hosting 000webhost.com. Host your own website for FREE." target="_blank" href="https://www.000webhost.com/?utm_source=000webhostapp&amp;utm_campaign=000_logo&amp;utm_medium=website&amp;utm_content=footer_img"><img src="https://cdn.000webhost.com/000webhost/logo/footer-powered-by-000webhost-white2.png"  alt="www.000webhost.com"></a></div></body>
</html>