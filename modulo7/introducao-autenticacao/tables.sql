-- Active: 1658791594652@@35.226.146.116@3306@guimaraes-4211043-tiago-hennig

CREATE TABLE IF NOT EXISTS Auth_users (
    id VARCHAR(64) PRIMARY KEY,
    email VARCHAR(64) NOT NULL,
    password VARCHAR(64) NOT NULL
);

CREATE TABLE IF NOT EXISTS Auth_tasks (
    id VARCHAR(64) PRIMARY KEY,
    title VARCHAR(64) NOT NULL,
    description VARCHAR(1024) DEFAULT "No description provided",
    deadline DATE,
    status ENUM("TO_DO", "DOING", "DONE") DEFAULT "TO_DO",
    author_id VARCHAR(64),
    FOREIGN KEY (author_id) REFERENCES Auth_users(id)
);

CREATE TABLE IF NOT EXISTS Auth_assignees (
    task_id VARCHAR(64),
    assignee_id VARCHAR(64),
    PRIMARY KEY (task_id, assignee_id),
    FOREIGN KEY (task_id) REFERENCES Auth_tasks(id),
    FOREIGN KEY (assignee_id) REFERENCES Auth_users(id)
);

