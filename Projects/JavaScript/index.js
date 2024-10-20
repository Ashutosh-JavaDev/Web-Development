var con =require("./connection");


con.connect(function(error){
    if(error) throw error;

    con.query("select * from BankManagementSystem.Signup",function(error,result){
        if(error) throw error;
        console.log(result);
    })
}
);
