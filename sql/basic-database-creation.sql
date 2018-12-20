CREATE TABLE hieroglyphicus_dictionary.hieroglyphicus_users (
    user_id INT(11) NOT NULL AUTO_INCREMENT, 
    first_name VARCHAR(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL, 
    last_name VARCHAR(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL, 
    e_mail VARCHAR(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL, 
    user_pw VARCHAR(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL, 
    user_role_id INT(2) NOT NULL,
    country VARCHAR(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL, 
    user_bio VARCHAR(2048) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
    user_picture VARCHAR(512) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
    PRIMARY KEY (user_id)
) ENGINE = InnoDB CHARSET=utf8mb4 COLLATE utf8mb4_bin;

CREATE TABLE hieroglyphicus_dictionary.hieroglyphicus_user_roles (
    id INT(2) NOT NULL AUTO_INCREMENT,
    user_role VARCHAR(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    PRIMARY KEY (id)
) ENGINE = InnoDB CHARSET=utf8mb4 COLLATE utf8mb4_bin;

INSERT INTO hieroglyphicus_dictionary.hieroglyphicus_user_roles (user_role)
VALUES ("User"), ("Moderator"), ("Admin");

ALTER TABLE hieroglyphicus_users ADD CONSTRAINT user_roles_to_users_FK FOREIGN KEY (user_role_id) REFERENCES hieroglyphicus_user_roles (id) ON DELETE RESTRICT ON UPDATE CASCADE;

CREATE TABLE hieroglyphicus_dictionary.hieroglyphicus_users_entries_number (
    id INT(11) NOT NULL AUTO_INCREMENT,
    entry_user_id INT(11) NOT NULL,
    words_pending INT(11) NOT NULL,
    words_approved INT(11) NOT NULL,
    PRIMARY KEY (id)
) ENGINE = InnoDB CHARSET=utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE hieroglyphicus_dictionary.hieroglyphicus_remember (
    remember_id INT NOT NULL AUTO_INCREMENT,
    remember_selector CHAR(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    remember_hashedValidator CHAR(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    remember_userid INT(11) NOT NULL,
    remember_role VARCHAR(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    remember_expires DATETIME NOT NULL,
    PRIMARY KEY (remember_id)
) ENGINE = InnoDB CHARSET=utf8mb4 COLLATE utf8mb4_unicode_ci;

ALTER TABLE hieroglyphicus_users_entries_number ADD CONSTRAINT user_to_entries_FK FOREIGN KEY (entry_user_id) REFERENCES hieroglyphicus_users(user_id) ON DELETE RESTRICT ON UPDATE RESTRICT;
