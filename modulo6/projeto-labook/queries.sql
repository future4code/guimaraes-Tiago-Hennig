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
        user_id VARCHAR(255) NOT NULL,
        friend_id VARCHAR(255) NOT NULL,
        FOREIGN KEY (user_id) REFERENCES labook_users (id),
        FOREIGN KEY (friend_id) REFERENCES labook_users (id)
    );

SELECT  labook_users.name, labook_posts.photo, 
        labook_posts.description,
        labook_posts.type, labook_posts.created_at
        FROM  labook_posts INNER JOIN labook_friendship ON
        labook_posts.author_id =
        labook_friendship.friend_id
        INNER JOIN labook_users ON labook_users.id = labook_posts.author_id

        WHERE labook_friendship.user_id LIKE  1660066704494
            ORDER BY labook_posts.created_at DESC
        ;