var mysql= require("mysql");

var con= mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"@Radhakrishna297",
        datbase:"BankManagementSystem"
    }
);

module.exports=con;