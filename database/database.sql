CREATE DATABASE PRODUCTOS;

USE PRODUCTOS;

CREATE TABLE tblProducto(
    codigo int primary key,
    nombre varchar(30) not null,
    descripcion varchar(100) not null,
    precio float not null,
    cantidad int not null
);
