-- APAGANDO O BANCO DE DADOS CASO EXISTA
DROP DATABASE IF EXISTS DBEXEMPLO01;

-- CRIANDO O BANCO DE DADOS
CREATE DATABASE DBEXEMPLO01;

-- SELECIOANAR O BANCO CRIADO
USE DBEXEMPLO01;

-- CRIANDO AS TABELAS
CREATE TABLE PESSOA (
	IDPESSOA INT NOT NULL AUTO_INCREMENT
    , NOME VARCHAR(160)
    ,SEXO CHAR(1)
    ,PRIMARY KEY (IDPESSOA)
);

SELECT * FROM PESSOA;

INSERT INTO PESSOA (IDPESSOA, NOME)
VALUES (1, ' CIRO');

SELECT * FROM PESSOA;

DELETE FROM PESSOA WHERE IDPESSOA = 1;