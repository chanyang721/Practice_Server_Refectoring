
CREATE TABLE instructors (
  id INT AUTO_INCREMENT,
  instructors_name varchar(255) NOT NULL,
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
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
  FOREIGN KEY (student_id) REFERENCES students (id)
);

CREATE TABLE students (
  id INT AUTO_INCREMENT,
  email varchar(255) NOT NULL,
  lectures varchar(255) NOT NULL,
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE lectures_students (
  lecture_id INT NOT NULL,
  student_id INT NOT NULL,
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  updated_at datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (lecture_id) REFERENCES lectures (id),
  FOREIGN KEY (student_id) REFERENCES students (id)
);



ALTER TABLE orders ADD FOREIGN KEY (user_id) REFERENCES users (id);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql -p -Dcmarket
 *  to create the database and the tables.*/