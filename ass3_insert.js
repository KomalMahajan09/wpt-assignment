let datab={
    host:"localhost",
    user:"root",
    password:"cdac",
    database:"Wptstudy",
    port:3306
};
const mysql=require("mysql2");
const con=mysql.createConnection(datab);
let id=1;
let name="set";
let status=true;
con.query("insert into resource (Id,name,status) values (?,?,?)",[Id,name,status],(err,res)=>{
    if(err){
        console.log("Error in  inserting");
    }else{
        console.log("Rows Inserted");
    }
});