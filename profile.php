<?php 
    include_once "./includes/header.php";
?>

    <!-- MAIN PAGE CONTENT -->

    <main>
        <div class="main-content">
            <div class="page-title">
                <h1>Profile</h1>
            </div>
            <div class="page-content">
                <div class="page-subcontent-wrapper">
                    <div class="page-subcontent-section">
                        <div class="user-image-container">
                            <img src="./images/dummy_profile.png" alt="">
                        </div>
                        <div class="user-data-container">
                            <div class="user-data-unit">
                                <h5>Name:</h5>
                                <p>
                                    <?php echo $_SESSION["userName"]; ?>
                                </p>
                            </div>
                            <div class="user-data-unit">
                                <h5>Surname:</h5>
                                <p>
                                    <?php echo $_SESSION["userSurname"]; ?>
                                </p>
                            </div>
                            <div class="user-data-unit">
                                <h5>Country:</h5>
                                <p>
                                    <?php echo $_SESSION["userCountry"]; ?>
                                </p>
                            </div>
                            <div class="user-data-unit">
                                <h5>E-mail:</h5>
                                <p>
                                    <?php echo $_SESSION["userEmail"]; ?>
                                </p>
                            </div>
                            <div class="user-data-unit">
                                <h5>Password</h5>
                                <a class="default-link" href="./change_password.php">Change password</a>
                            </div>
                        </div>
                    </div>
                    <div class="page-subcontent-section">
                        <table class="user-statistics-table">
                            <caption>User's statistics</caption>
                            <thead>
                                <tr>
                                    <th>Submitted words</th>
                                    <th>No.</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="user-statistics-table-row">
                                    <td>Approved</td>
                                    <td>8</td>
                                </tr>
                                <tr class="user-statistics-table-row">
                                    <td>Pending approval</td>
                                    <td>8</td>    
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <script src="./js/index_scripts.js"></script>
    </main>

<?php 
    include_once "./includes/footer.php";
?>
