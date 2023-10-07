DROP TABLE IF EXISTS _USER;

CREATE TABLE _USER(
    ID INT PRIMARY KEY NOT NULL,
    Name VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL
);

INSERT INTO _USER (ID, Name, Email)
VALUES (1, 'Akhmad Dani Munif', 'dani@mail.com');

INSERT INTO _USER (ID, Name, Email)
VALUES (2, 'Eko Pandu Nugroho', 'eko@mail.com');