let datab={
    host:"localhost",
    user:"root",
    password:"cdac",
    database:"pleasework",
    port:3306
};
const mysql=require("mysql2");
const con=mysql.createConnection(datab);
let status=false;
let resourcename="kiran";
con.query("update resource set status=? where name=?",[status,name],(err,res)=>{
    if(err){
        console.log("Erroe while updating");
    }else{
        if(res.affectedRows===0){
            console.log(" update failed");
        }else{
            console.log("Update successfull");
        }
    }
});