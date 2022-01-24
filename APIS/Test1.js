//create mini express application
const exp=require("express")
const userApi=exp.Router();
//add body parser middleware
userApi.use(exp.json())


const { 
    createPool
}=require('mysql')
const pool =createPool({
    host:"localhost",
    user:"root",
    password:"sai1234",
    database:"main",
    connectionLimit:10

})


pool.query('select * from test where name="abhinav" ',(err,result,fields)=>{
    if(err){
        return console.log(err);
    }
    console.log(result)
    userApi.get("/data", (req, res) => {
    
        res.send({result})
      
     
      });
    
})





//export userApi
module.exports=userApi;