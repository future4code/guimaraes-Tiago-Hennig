-- Active: 1658791594652@@35.226.146.116@3306@guimaraes-4211043-tiago-hennig

CREATE TABLE IF NOT EXISTS Cookenu_users (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL,
    password VARCHAR(64) NOT NULL, 
    role VARCHAR(10) NOT NULL
);

CREATE TABLE IF NOT EXISTS Cookenu_recipes (
    id VARCHAR(64) PRIMARY KEY,
    title VARCHAR(64) NOT NULL,
    description VARCHAR(1024) DEFAULT "No description provided",
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP ,
    author_id VARCHAR(64),
    FOREIGN KEY (author_id) REFERENCES Cookenu_users(id)
);

CREATE TABLE IF NOT EXISTS Cookenu_follow (
    user_id VARCHAR(64),
    follow_id VARCHAR(64),
    PRIMARY KEY (follower_id, followed_id),
    FOREIGN KEY (follower_id) REFERENCES Cookenu_users(id),
    FOREIGN KEY (followed_id) REFERENCES Cookenu_users(id)
);

