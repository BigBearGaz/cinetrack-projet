-- Création de la base de données
DROP DATABASE IF EXISTS cinetrack_db;
CREATE DATABASE cinetrack_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE cinetrack_db;

-- Table des catégories
CREATE TABLE categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Table des films
CREATE TABLE films (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    release_year INT NOT NULL,
    duration INT NOT NULL COMMENT 'Durée en minutes',
    poster_url VARCHAR(500),
    synopsis TEXT,
    director VARCHAR(255),
    category_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE RESTRICT,
    INDEX idx_category (category_id),
    INDEX idx_title (title)
) ENGINE=InnoDB;

-- Table des films de l'utilisateur (liste personnelle)
CREATE TABLE user_films (
    id INT PRIMARY KEY AUTO_INCREMENT,
    film_id INT NOT NULL,
    status ENUM('to_watch', 'watching', 'watched') NOT NULL DEFAULT 'to_watch',
    rating INT CHECK (rating BETWEEN 1 AND 5),
    comment TEXT,
    watched_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (film_id) REFERENCES films(id) ON DELETE CASCADE,
    UNIQUE KEY unique_film (film_id),
    INDEX idx_status (status)
) ENGINE=InnoDB;