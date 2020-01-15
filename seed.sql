INSERT INTO employee_management_system_db.department (id, department_name) VALUES (1, 'Accounting');
INSERT INTO employee_management_system_db.department (id, department_name) VALUES (2, 'Human Resources');
INSERT INTO employee_management_system_db.department (id, department_name) VALUES (3, 'Sales');
INSERT INTO employee_management_system_db.department (id, department_name) VALUES (4, 'Management');

INSERT INTO employee_management_system_db.role (`ID`, `job_title`, `salary`, `department_id`) VALUES ('1', 'Sales Rep', '60000', '3');
INSERT INTO employee_management_system_db.role (`ID`, `job_title`, `salary`, `department_id`) VALUES ('2', 'Accountant', '75000', '1');
INSERT INTO employee_management_system_db.role (`ID`, `job_title`, `salary`, `department_id`) VALUES ('3', 'CEO', '250000', '4');
INSERT INTO employee_management_system_db.role (`ID`, `job_title`, `salary`, `department_id`) VALUES ('4', 'HR Rep', '65000', '2');

INSERT INTO employee_management_system_db.employee (`ID`, `first_name`, `last_name`, `role_id`, `manager_id`) VALUES ('1', 'Elivis', 'Presley', '3', '1');
INSERT INTO employee_management_system_db.employee (`ID`, `first_name`, `last_name`, `role_id`, `manager_id`) VALUES ('2', 'Hermione', 'Granger', '4', '1');
INSERT INTO employee_management_system_db.employee (`ID`, `first_name`, `last_name`, `role_id`, `manager_id`) VALUES ('3', 'Ron', 'Weasley', '1', '1');
INSERT INTO employee_management_system_db.employee (`ID`, `first_name`, `last_name`, `role_id`, `manager_id`) VALUES ('4', 'Harry', 'Potter', '2', '1');
        
        