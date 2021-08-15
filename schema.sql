-- CREATE database Inflearn;

CREATE TABLE instructors (
  id INT AUTO_INCREMENT,
  instructors_name varchar(255) NOT NULL,
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  INDEX (id, instructors_name)
);

CREATE TABLE students (
  id INT AUTO_INCREMENT,
  email varchar(255) NOT NULL,
  lectures varchar(255) NOT NULL,
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY (email),
  INDEX (id, email)
);

CREATE TABLE lectures (
  id INT AUTO_INCREMENT ,
  category varchar(255) NOT NULL,
  class_name varchar(255) NOT NULL,
  class_description varchar(3000) NOT NULL,
  price INT NOT NULL,
  students_info varchar(255) NOT NULL,
  public tinyint(1) DEFAULT 0 NOT NULL,
  student_id INT NOT NULL, 
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (student_id) REFERENCES students (id),
  INDEX (id, category)
);


CREATE TABLE lectures_students (
  lecture_id INT NOT NULL,
  student_id INT NOT NULL,
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (lecture_id) REFERENCES lectures (id),
  FOREIGN KEY (student_id) REFERENCES students (id),
  INDEX (lecture_id, student_id)
);


/* mysql -u root -p --database=Inflearn < [schema.sql 파일 경로] */