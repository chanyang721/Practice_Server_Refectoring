
-- seed 생성 방법
/* 
    mysql -u root -p --database=Inflearn < [seed.sql 파일 경로] 
*/

INSERT INTO instructors (name) VALUES ("test1");
INSERT INTO instructors (name) VALUES ("test2");
INSERT INTO instructors (name) VALUES ("test3");
INSERT INTO instructors (name) VALUES ("test4");

INSERT INTO lectures (instructor, category, title, description, price, attendance, open) VALUES ("test1", "웹", "test1title1", "test1", 0, 0, 0);
INSERT INTO lectures (instructor, category, title, description, price, attendance, open) VALUES ("test1", "데이터베이스", "test1title2", "test1", 1000, 10, 1);
INSERT INTO lectures (instructor, category, title, description, price, attendance, open) VALUES ("test2", "인프라", "test2title1", "test2", 2000, 0, 0);
INSERT INTO lectures (instructor, category, title, description, price, attendance, open) VALUES ("test2", "게임", "test2title2", "test2", 2000, 2, 1);
INSERT INTO lectures (instructor, category, title, description, price, attendance, open) VALUES ("test3", "알고리즘", "test3title1", "test3", 0, 30, 0);
INSERT INTO lectures (instructor, category, title, description, price, attendance, open) VALUES ("test3", "웹", "test3title2", "test3", 0, 30, 1);
INSERT INTO lectures (instructor, category, title, description, price, attendance, open) VALUES ("test4", "인프라", "test4title1", "test4", 4000, 0, 1);
INSERT INTO lectures (instructor, category, title, description, price, attendance, open) VALUES ("test4", "데이터베이스", "test4title2", "test4", 4000, 0, 1);

INSERT INTO students (nickname, email) VALUES ("user1", "user1@gmail.com");
INSERT INTO students (nickname, email) VALUES ("user2", "user2@gmail.com");
INSERT INTO students (nickname, email) VALUES ("user3", "user3@naver.com");
INSERT INTO students (nickname, email) VALUES ("user4", "user4@gmail.com");
