-- 테이블 생성 방법
/* 
    mysql -u root -p --database=Inflearn < [schema.sql 파일 경로] 
*/

DROP database IF EXISTS Inflearn;
CREATE database IF NOT EXISTS Inflearn;
USE Inflearn 

CREATE TABLE instructors (
  id INT AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  INDEX (name)
);

CREATE TABLE students (
  id INT AUTO_INCREMENT,
  nickname varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  lectures varchar(255) NOT NULL,
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY (email),
  INDEX (nickname, email)
);

CREATE TABLE lectures (
  id INT AUTO_INCREMENT,
  instructor varchar(255) NOT NULL,
  category varchar(255) NOT NULL,
  name varchar(255) NOT NULL,
  description varchar(3000) NOT NULL,
  price INT NOT NULL,
  students varchar(255) NOT NULL, 
  public tinyint(1) DEFAULT 0 NOT NULL,
  instructor_id INT NOT NULL,
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (instructor_id) REFERENCES instructors (id),
  INDEX (name, category, public, students)
);


CREATE TABLE lectures_students (
  lecture_id INT NOT NULL,
  student_id INT NOT NULL,
  FOREIGN KEY (lecture_id) REFERENCES lectures (id),
  FOREIGN KEY (student_id) REFERENCES students (id),
  INDEX (lecture_id, student_id)
);


