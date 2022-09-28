-- Active: 1658791594652@@35.226.146.116@3306@guimaraes-4211043-tiago-hennig
CREATE TABLE
    IF NOT EXISTS ambulnz_pizzas (
        name VARCHAR(255) UNIQUE NOT NULL PRIMARY KEY,
        price FLOAT(4) NOT NULL,
        ingredients VARCHAR(255) NOT NULL,
        img_url VARCHAR(255) NOT NULL
    );


CREATE TABLE
    IF NOT EXISTS ambulnz_users (
        id VARCHAR(255) UNIQUE NOT NULL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
    );

CREATE TABLE
    IF NOT EXISTS ambulnz_orders (
        id VARCHAR(255) NOT NULL PRIMARY KEY,
        user_id VARCHAR(255) NOT NULL,
        pizza_name VARCHAR(255) NOT NULL,
        quantity INTEGER NOT NULL,
        order_time DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(user_id) REFERENCES ambulnz_users(id),
        FOREIGN KEY(pizza_name) REFERENCES ambulnz_pizzas(name)
    );
