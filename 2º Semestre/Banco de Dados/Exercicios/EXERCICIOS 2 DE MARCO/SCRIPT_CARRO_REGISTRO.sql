DROP DATABASE IF EXISTS EXERCICIO02;

CREATE DATABASE EXERCICIO02;

USE EXERCICIO02;

CREATE TABLE CARRO_REGISTRO(
	IDCARRO INT NOT NULL,
    MODELO varchar(45),
    MARCA VARCHAR(45),
    ANO YEAR(4),
    PLACO char(7),
    IDREGISTRO INT NOT NULL,
    RENAVAM CHAR(11),
    DATA_REGISTRO DATE,
    ESTADO char(2),
    CIDADE varchar(45),
    PRIMARY KEY (IDCARRO, IDREGISTRO)
);
    
    
    