create database booksdb if not exists;
use booksdb;

create table person(id int(11) not null primary key auto_increment, name varchar(100) not null, lastname varchar(100)
    not null, email varchar(150) not null unique, phone varchar(20), pcode varchar(20) not null unique, ptype char not null default
    'C', passwd text);




create table book_info(id int(11) not null primary key auto_increment, type varchar(10) not null, name varchar(100) not null);




create table book(id int(11) not null primary key auto_increment, name varchar(100) not null);




create table book_meta(id int(11) not null primary key auto_increment, book_id int(11) not null, binfo_id int(11) not
    null, foreign key(book_id) references book(id) on delete cascade, foreign key(binfo_id) references book_info(id) on
delete cascade);



create table book_ref(id int(11) not null primary key auto_increment, book_id int(11) not null, ref varchar(20) not null
    unique, foreign key(book_id) references book(id) on delete cascade);



create table lending(id int(11) not null primary key auto_increment, ref_id int(11) not null, person_id int(11) not
    null, sdate datetime not null, edate datetime not null, del_date datetime, pay_date datetime, foreign key(ref_id)
    references book_ref(id) on delete cascade, foreign key(person_id) references person(id));


