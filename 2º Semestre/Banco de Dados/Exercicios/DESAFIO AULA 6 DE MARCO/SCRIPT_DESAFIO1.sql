DROP DATABASE IF EXISTS DESAFIO1;

CREATE DATABASE DESAFIO1;

USE DESAFIO1;

CREATE TABLE MEDICO(
	IDMEDICO INT NOT NULL,
    NOME_MEDICO VARCHAR(160),
    CRM INT,
    PRIMARY KEY (IDMEDICO)
);

CREATE TABLE PACIENTE(
	IDPACIENTE INT NOT NULL,
    NOME_PACIENTE VARCHAR(160),
    primary key (IDPACIENTE)
);

CREATE TABLE MEDICO_PACIENTE(
	IDMEDICO INT NOT NULL,
    IDPACIENTE INT NOT NULL,
    primary key (IDMEDICO, IDPACIENTE),
    foreign key (IDMEDICO) REFERENCES MEDICO(IDMEDICO),
    foreign key (IDPACIENTE) REFERENCES PACIENTE(IDPACIENTE)
);
    