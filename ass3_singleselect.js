let datab={
    host:"localhost",
    user:"root",
    password:"cdac",
    database:"pleasework",
    port:3306
};
let resourceId=101;
const mysql=require("mysql2");
const con=mysql.createConnection(datab);
con.query("select Id,name,status from resource where resourceId=?",[Id],(err,rows)=>{

    if(err){
        console.log("Erroe while fetching data");
    }else{
        if(rows.length>0){
            console.log("Succeed: "+rows[0].Id+" "+rows[0].name+" "+rows[0].status);
        }else{
            console.log("No row show");
        }
    }
});