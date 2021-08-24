INSERT INTO instructors (name) VALUES ("chanyang1");
INSERT INTO instructors (name) VALUES ("chanyang2");
INSERT INTO instructors (name) VALUES ("chanyang3");
INSERT INTO instructors (name) VALUES ("chanyang4");

INSERT INTO lectures (instructor, category, title, description, price, attendance, open) VALUES ("chanyang1", "웹", "test1", "test1", 1, 0, 0);
INSERT INTO lectures (instructor, category, title, description, price, attendance, open) VALUES ("chanyang2", "웹", "test2", "test2", 2, 0, 1);
INSERT INTO lectures (instructor, category, title, description, price, attendance, open) VALUES ("chanyang3", "웹", "test3", "test3", 3, 0, 0);
INSERT INTO lectures (instructor, category, title, description, price, attendance, open) VALUES ("chanyang4", "웹", "test4", "test4", 4, 0, 1);

INSERT INTO students (nickname, email) VALUES ("chanyang7211", "chanyang7211@gmail.com");
INSERT INTO students (nickname, email) VALUES ("chanyang7212", "chanyang7212@gmail.com");
INSERT INTO students (nickname, email) VALUES ("chanyang7213", "chanyang7213@gmail.com");
INSERT INTO students (nickname, email) VALUES ("chanyang7214", "chanyang7214@gmail.com");

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/seed.sql -p -Inflearn
 *    mysql -u root -p --database=Inflearn < [seed.sql 파일 경로] 
 *  to create the database and the tables.*/
