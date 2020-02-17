CREATE DATABASE ng_turistas_db;

USE ng_turistas_db;

create table reservaciones(
    id int (11) not null AUTO_INCREMENT PRIMARY KEY,
    title varchar(180),
    description varchar (255),
    image varchar(200),
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE reservaciones;