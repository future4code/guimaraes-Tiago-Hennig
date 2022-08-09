-- Active: 1658791594652@@35.226.146.116@3306@guimaraes-4211043-tiago-hennig

CREATE TABLE
    IF NOT EXISTS labook_users(
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
    );

CREATE TABLE
    IF NOT EXISTS labook_posts(
        id VARCHAR(255) PRIMARY KEY,
        photo VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        type ENUM("normal", "event") DEFAULT "normal",
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        author_id VARCHAR(255),
        FOREIGN KEY (author_id) REFERENCES labook_users (id)
    );

CREATE TABLE
    IF NOT EXISTS labook_friendship(
        id VARCHAR(255) PRIMARY KEY,
        id_friend_1 VARCHAR(255) NOT NULL,
        id_friend_2 VARCHAR(255) NOT NULL,
        FOREIGN KEY (id_friend_1) REFERENCES labook_users (id),
        FOREIGN KEY (id_friend_2) REFERENCES labook_users (id)
    );