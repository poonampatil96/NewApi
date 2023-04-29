
module.exports=(app)=>{
    const Customercontroller=require("../Controller/Customercontroller")
     
    app.get("/allcust",Customercontroller.allcust)
    app.post("/getcbyid",Customercontroller.getcustByid)
    app.post("/custadd",Customercontroller.addcustomer)
}
   