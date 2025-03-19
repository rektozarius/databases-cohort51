export const createDb = `
DROP DATABASE IF EXISTS week2;
CREATE DATABASE week2;
USE week2;
`

export const createAuthors = `
CREATE TABLE authors (
    author_id INT PRIMARY KEY,
    author_name VARCHAR(50) NOT NULL,
    university VARCHAR(50),
    date_of_birth DATE,
    h_index INT,
    gender ENUM('M', 'F', 'NB')
);
`
export const addMentor = `
ALTER TABLE authors
ADD COLUMN mentor INT,
ADD FOREIGN KEY (mentor) REFERENCES authors(author_id);
`