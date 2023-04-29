module.exports =(app)=>
{
    const Foodcontrol=require("../Controller/Foodconrtol")

    app.get("/allfood",Foodcontrol.allfood)
    app.post("/addfood",Foodcontrol.addfood)
    app.get("/getfood",Foodcontrol.getfoodBycategory)
    app.post("/getfoodByTypeAndCategory",Foodcontrol.getfoodByTypeAndCategory)
    app.delete("/dltfood",Foodcontrol.deletefood)
    app.post("/updateprice",Foodcontrol.updateprice)
}