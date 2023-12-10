CREATE TABLE meetings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    topic VARCHAR(255) NOT NULL,
    number_of_people INT NOT NULL,
    start_time DATETIME NOT NULL
);
