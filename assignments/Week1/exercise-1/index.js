import mysql from 'mysql2/promise';

const main = async () => {
  // create query
  const query = `
  -- create database
  DROP DATABASE IF EXISTS meetup;
  CREATE DATABASE meetup;
  USE meetup;

  -- create tables
  CREATE TABLE Invitee (
    invitee_no INT AUTO_INCREMENT PRIMARY KEY,
    invitee_name VARCHAR(50),
    invited_by VARCHAR(50)
  );

  CREATE TABLE Room (
    room_no INT AUTO_INCREMENT PRIMARY KEY,
    room_name VARCHAR(50),
    floor_number INT
  );

  CREATE TABLE Meeting (
    meeting_no INT AUTO_INCREMENT PRIMARY KEY,
    meeting_title VARCHAR(50),
    starting_time DATETIME,
    ending_time DATETIME,
    room_no INT,
    FOREIGN KEY (room_no) REFERENCES Room(room_no)
  );
  
  -- insert dummy data
  INSERT INTO Invitee (invitee_name, invited_by) VALUES
    ('Alice Johnson', 'Bob Smith'),
    ('Charlie Brown', 'Alice Johnson'),
    ('David Lee', 'Eve Adams'),
    ('Frank Martin', 'Charlie Brown'),
    ('Grace Hopper', 'David Lee');

  INSERT INTO Room (room_name, floor_number) VALUES
    ('Conference Room A', 1),
    ('Meeting Room B', 2),
    ('Training Room C', 3),
    ('Boardroom D', 4),
    ('Breakout Room E', 5);

  INSERT INTO Meeting (meeting_title, starting_time, ending_time, room_no) VALUES
    ('Tech Sync', '2025-03-12 09:00:00', '2025-03-12 10:00:00', 1),
    ('Design Review', '2025-03-12 11:00:00', '2025-03-12 12:00:00', 2),
    ('Product Launch', '2025-03-12 13:00:00', '2025-03-12 14:00:00', 3),
    ('Sprint Planning', '2025-03-12 15:00:00', '2025-03-12 16:00:00', 4),
    ('All Hands', '2025-03-12 17:00:00', '2025-03-12 18:00:00', 5);
  `
  try {
    // create the connection
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'hyfuser',
      password: 'hyfpassword',
      multipleStatements: 'true'
    });
    // create db, tables and data
    await connection.query(query);
    console.log("Successfully created");
    await connection.end();

  } catch (err) {
    console.log(err);
    await connection.end();
  }
};

main();