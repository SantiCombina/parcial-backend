CREATE DATABASE IF NOT EXISTS Parcial;

USE Parcial;

CREATE TABLE Provincia (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(250)
);

CREATE TABLE Localidad (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(250),
    idProvincia INT,
    FOREIGN KEY (idProvincia) REFERENCES Provincia(id)
);

CREATE TABLE Promotor (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(250)
);

CREATE TABLE Cliente (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(250),
    domicilio VARCHAR(250),
    idLocalidad INT,
    idPromotor INT,
    saldo INT,
    FOREIGN KEY (idLocalidad) REFERENCES Localidad(id),
    FOREIGN KEY (idPromotor) REFERENCES Promotor(id)
);

INSERT INTO
    Provincia (nombre)
VALUES
    ('Buenos Aires'),
    ('Córdoba'),
    ('Santa Fe'),
    ('Mendoza'),
    ('Tucumán');

INSERT INTO
    Localidad (nombre, idProvincia)
VALUES
    ('La Plata', 1),
    ('Mar del Plata', 1),
    ('Rosario', 3),
    ('Córdoba', 2),
    ('Mendoza', 4);

INSERT INTO
    Promotor (nombre)
VALUES
    ('Juan'),
    ('Pedro'),
    ('Pablo'),
    ('Lucas'),
    ('Marcos');

INSERT INTO
    Cliente (
        nombre,
        domicilio,
        idLocalidad,
        idPromotor,
        saldo
    )
VALUES
    ('Santiago', 'Domicilio 1', 1, 1, 10000),
    ('Lucas', 'Domicilio 2', 2, 2, 20000),
    ('Juan', 'Domicilio 3', 3, 3, 30000),
    ('Pedro', 'Domicilio 4', 4, 4, 40000),
    ('Pablo', 'Domicilio 5', 5, 5, 50000);