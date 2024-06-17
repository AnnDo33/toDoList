CREATE TABLE status (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  status VARCHAR(50) NOT NULL
);

CREATE TABLE tasks (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  id_status INT,
  task VARCHAR(255) NOT NULL,
  deadline DATE NOT NULL,
  who VARCHAR(50) NOT NULL,
  FOREIGN KEY (id_status) REFERENCES status(id)
);

INSERT INTO status (status) VALUES ('Done');
INSERT INTO status (status) VALUES ('ToDo');
INSERT INTO status (status) VALUES ('Pending');

INSERT INTO tasks (id_status,task, deadline, who) VALUES (1,'wash the dishes', '2024-06-19', 'Huguette');
INSERT INTO tasks (id_status,task, deadline, who) VALUES (2,'wash the laundry', '2024-06-17', 'Jean-Michel');
INSERT INTO tasks (id_status,task, deadline, who) VALUES (3,'folding laundry', '2024-06-17', 'Nicolas');


