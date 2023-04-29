const order=require("../Modal/Ordermodal")
module.exports=(app)=>{
    const Ordercontrol=require("../Controller/Ordercontrol")

    app.get("/allorder",Ordercontrol.allorder)
    app.post("/addorder",Ordercontrol.addorder)
    app.post("/getorder",Ordercontrol.getorderBystatus)
}