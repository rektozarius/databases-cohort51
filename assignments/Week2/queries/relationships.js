export const createPapers = `
CREATE TABLE research_papers (
    paper_id INT PRIMARY KEY,
    paper_title VARCHAR(100) NOT NULL,
    conference VARCHAR(100),
    publish_date DATE
);
`

export const createAuthorPaper = `
CREATE TABLE author_paper (
    author_id INT,
    paper_id INT,
    PRIMARY KEY (author_id, paper_id),
    FOREIGN KEY (author_id) REFERENCES authors(author_id),
    FOREIGN KEY (paper_id) REFERENCES research_papers(paper_id)
);
`

export const insertAuthors = `
INSERT INTO authors (author_id, author_name, university, date_of_birth, h_index, gender, mentor)
VALUES
(1, 'John Doe', 'Stanford University', '1975-03-12', 25, 'M', NULL),
(2, 'Jane Smith', 'MIT', '1980-07-22', 30, 'F', 1),
(3, 'Alice Johnson', 'Harvard University', '1985-11-15', 18, 'F', 2),
(4, 'Bob Brown', 'UC Berkeley', '1978-09-30', 22, 'M', 1),
(5, 'Charlie Davis', 'Cambridge University', '1990-02-10', 12, 'M', 4),
(6, 'Diana Evans', 'Oxford University', '1982-04-18', 20, 'F', NULL),
(7, 'Eva Green', 'Stanford University', '1987-06-25', 15, 'F', 1),
(8, 'Frank White', 'MIT', '1973-08-14', 28, 'M', 2),
(9, 'Grace Lee', 'Harvard University', '1995-01-05', 10, 'F', 3),
(10, 'Henry Wilson', 'UC Berkeley', '1988-12-20', 16, 'M', 4),
(11, 'Ivy Taylor', 'Cambridge University', '1984-03-08', 19, 'F', 5),
(12, 'Jack Martinez', 'Oxford University', '1979-10-22', 14, 'M', 6),
(13, 'Karen Clark', 'Stanford University', '1992-07-30', 11, 'F', 7),
(14, 'Leo Anderson', 'MIT', '1986-05-12', 17, 'M', 8),
(15, 'Mia Lewis', 'Harvard University', '1981-09-28', 21, 'F', 3);
`

export const insertPapers = `
INSERT INTO research_papers (paper_id, paper_title, conference, publish_date)
VALUES
(1, 'Advancements in Quantum Computing', 'Nature', '2020-05-15'),
(2, 'Deep Learning for Medical Imaging', 'NeurIPS', '2021-03-20'),
(3, 'Blockchain in Supply Chain Management', 'IEEE', '2019-11-10'),
(4, 'AI Ethics and Bias', 'AAAI', '2022-07-25'),
(5, 'Climate Change and Renewable Energy', 'Science', '2020-09-30'),
(6, 'Robotics in Healthcare', 'ICRA', '2021-08-12'),
(7, 'Natural Language Understanding', 'ACL', '2022-01-18'),
(8, 'Space Exploration and Colonization', 'NASA', '2019-10-22'),
(9, 'Smart Grid Technologies', 'IEEE', '2020-06-14'),
(10, 'Cybersecurity in IoT', 'Black Hat', '2021-12-05'),
(11, 'CRISPR and Gene Editing', 'Nature', '2022-04-20'),
(12, 'Autonomous Driving Systems', 'CVPR', '2020-10-15'),
(13, 'Big Data in Finance', 'KDD', '2021-07-30'),
(14, 'Augmented Reality in Education', 'SIGGRAPH', '2022-03-22'),
(15, 'IoT for Smart Cities', 'IEEE', '2019-11-10'),
(16, 'Nanomaterials for Energy Storage', 'Science', '2020-09-05'),
(17, 'Human-Centered AI', 'CHI', '2021-05-18'),
(18, 'Biomedical Imaging Techniques', 'Nature', '2022-08-12'),
(19, 'Sustainable Urban Farming', 'Science', '2020-04-25'),
(20, '6G Wireless Communication', 'IEEE', '2021-02-28'),
(21, 'Artificial General Intelligence', 'NeurIPS', '2022-06-15'),
(22, 'Nanotechnology in Medicine', 'Nature', '2019-10-10'),
(23, 'Wearable Health Devices', 'IEEE', '2020-12-20'),
(24, 'Cloud-Native Applications', 'ACM', '2021-11-15'),
(25, 'Ethical AI Governance', 'AAAI', '2022-05-30'),
(26, 'Marine Ecosystem Conservation', 'Science', '2019-07-12'),
(27, 'Black Hole Discoveries', 'NASA', '2020-03-08'),
(28, 'Social Media and Mental Health', 'KDD', '2021-08-22'),
(29, 'Virtual Reality for Training', 'SIGGRAPH', '2022-01-10'),
(30, 'Quantum Entanglement', 'Nature', '2019-12-25');
`

export const insertRelationships = `
INSERT INTO author_paper (author_id, paper_id)
VALUES
(1, 1), (1, 2), (2, 3), (2, 4), (3, 5), (3, 6), (4, 7), (4, 8), (5, 9), (5, 10),
(6, 11), (6, 12), (7, 13), (7, 14), (8, 15), (8, 16), (9, 17), (9, 18), (10, 19), (10, 20),
(11, 21), (11, 22), (12, 23), (12, 24), (13, 25), (13, 26), (14, 27), (14, 28),
(1, 3), (2, 5), (3, 7), (4, 9), (5, 11), (6, 13), (7, 15), (8, 17), (9, 19), (10, 21), (11, 29), (12, 30);
`