Create database note_db;
use note_db;
show tables;
create table notes(
id INT UNSIGNED NOT NULL auto_increment,
description varchar(1000)not null,
color varchar(150)not null,
primary key(id));
show tables;
Describe notes;
INSERT INTO notes VALUES (1, 'Buy dog food','Yellow');
INSERT INTO notes VALUES (2, 'Go for a run','Yellow');
INSERT INTO notes VALUES (3, 'Cut  the grass','Red');
INSERT INTO notes VALUES (4, 'Call parents','Yellow');
INSERT INTO notes VALUES (5, 'Schedule dentist appoinment','Red');
INSERT INTO notes VALUES (6, 'Clean bedroom','Red');
INSERT INTO notes VALUES (7, 'You cando that','Blue');
INSERT INTO notes VALUES (8, 'Watch Netflix','Yellow');
INSERT INTO notes VALUES (9, 'Submit final project proposal','Green');

show tables;
delete from notes where id=29;
select * from notes;