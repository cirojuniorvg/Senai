crete databae saep_biblio_db

create sequence emprestimo_seq start with 1 increment by 50
create sequence estudante_seq start with 1 increment by 50
create sequence livro_seq start with 1 increment by 50
create table emprestimo (data_prevista_devolucao date, data_retirada date, devolvido varchar(1), id integer not null, livro_id integer, matricula_estudante integer, primary key (id))
create table estudante (data_nascimento date, matricula integer not null, nome varchar(100) not null, email varchar(255), telefone varchar(255), primary key (matricula))
create table livro (ano integer, id integer not null, autor varchar(255), editora varchar(255), titulo varchar(255), primary key (id))
alter table if exists emprestimo add constraint FKfmuc70vexs4n7xr1dsv6ikv0j foreign key (matricula_estudante) references estudante
alter table if exists emprestimo add constraint FKlraqo5mkov260qr5h3es93sgr foreign key (livro_id) references livro
