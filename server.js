var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "mw03330333",
    database: "employee_management_system_db"
});

connection.connect( function(error) {
    if(error) {
        console.error("error connecting: " + error.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);

    runSystem();
});

function runSystem() {

    var question = inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            name: "initialQuestion",
            choices: [
                "Add Department",
                "Add Employee",
                "Add A Role",
                "View All Employees",
                "View All Departments",
                "View All Roles",
                "Update Employee Role",
            ]
        }
    ]);
    
    question.then( function(data){
    
        if (data.initialQuestion === "Add Department"){
            addDepartment();
        }
    
        else if (data.initialQuestion === "Add Employee"){
            addEmployee();
        }
    
        else if (data.initialQuestion === "Add a Role"){
            addRole();
        }
    
        else if (data.initialQuestion === "View All Employees"){
            viewAllEmployees();
        }
    
        else if (data.initialQuestion === "View All Departments"){
            viewAllDepartments();
        }
    
        else if (data.initialQuestion === "View All Roles"){
            viewAllRoles();
        }
    
        else if (data.initialQuestion === "Update Employee Role"){
            updateEmployeeRole();
        }

        else{
            connection.end();
        }
    });
}

function addDepartment(){
    inquirer.prompt([
        {
            type: "input",
            message: "Which department would you like to add?",
            name: "addDepartment"
        }
    ]).then( function(data){

        connection.query( 
            "INSERT INTO department SET ?",
            {
                department_name: data.addDepartment
            },
            function(error) {
                if (error) throw error;

                console.log("Department: " + data.addDepartment + " has been added!");

                runSystem();
            }
            )
    })
}

function addEmployee(){
    inquirer.prompt([
        {
            type: "input",
            message: "What is the employee's first name?",
            name: "addEmployeeFirstName"
        },
        {
            type: "input",
            message: "What is the employee's last name?",
            name: "addEmployeeLastName"
        }
    ]).then( function(data){

        connection.query(
            "INSERT INTO employee SET ?",
            {
                first_name: data.addEmployeeFirstName,
                last_name: data.addEmployeeLastName,
                // role_id:
                // manager_id:
            },
            function(error) {
                if (error) throw error;

                console.log("Employee: " + data.addEmployeeFirstName + " " + data.addEmployeeLastName + " has been added!");

                runSystem();
            }
        );
    });
}

function addRole(){
    inquirer.prompt([
        {
            type: "input",
            message: "What role would you like to add?",
            name: "addRole"
        },
        {
            type: "input",
            message: "What is the salary for the role?",
            name: "addSalary"
        }
    ]).then( function(data){
        connection.query(
            "INSERT INTO role SET ?",
            {
                job_title: data.addRole,
                salary: data.addSalary,
                // department_id:
            },
            function(error) {
                if (error) throw error;

                console.log("Role: " + data.addRole + " has been added!");

                runSystem();
            }
        );
    });
}

function viewAllEmployees(){

    connection.query(
        `SELECT employee.id, employee.first_name, employee.last_name, role.job_title, role.salary, department.department_name FROM employee LEFT JOIN role ON role_id = role.id LEFT JOIN department ON department_id = department.id`,
        function(error, response){
            if (error) throw error;

            console.table(response);

            runSystem();
        }
    )

}

function viewAllDepartments(){

    connection.query(
        `SELECT department.id, department.department_name FROM department`,
        function(error, response){
            if (error) throw error;
    
            console.table(response);
    
            runSystem();
        }
    )

}

function viewAllRoles(){

    connection.query(
        `SELECT role.id, role.job_title, role.salary, department.department_name FROM department LEFT JOIN department ON department_id = department.id`,
        function(error, response){
            if (error) throw error;

            console.table(response);
            runSystem();
        }

    )

}

function updateEmployeeRole(){
    inquirer.prompt([
        {
            type: "list",
            message: "Which employee would you like to update?",
            name: "whichEmployee",
            choices: [

            ]
        }
    ])
}
