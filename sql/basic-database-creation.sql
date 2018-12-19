CREATE TABLE hieroglyphicus_db.hieroglyphicus_users (
    user_id INT(11) NOT NULL AUTO_INCREMENT, 
    first_name VARCHAR(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL, 
    last_name VARCHAR(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL, 
    e_mail VARCHAR(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL, 
    user_pw VARCHAR(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL, 
    user_role ENUM("User","Moderator","Admin") CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL DEFAULT "User", 
    country VARCHAR(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL, 
    user_bio VARCHAR(2048) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
    user_picture VARCHAR(512) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
    PRIMARY KEY (user_id)
) ENGINE = InnoDB CHARSET=utf8mb4 COLLATE utf8mb4_bin;

CREATE TABLE hieroglyphicus_db.hieroglyphicus_remember (
    remember_id INT NOT NULL AUTO_INCREMENT,
    remember_selector CHAR(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    remember_hashedValidator CHAR(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    remember_userid INT(11) NOT NULL,
    remember_role VARCHAR(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    remember_expires DATETIME NOT NULL,
    PRIMARY KEY (remember_id)
) ENGINE = InnoDB CHARSET=utf8mb4 COLLATE utf8mb4_unicode_ci;
