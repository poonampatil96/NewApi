   const food=require("../Modal/Foodmodal")
   
   exports.addfood=(req,res)=>
   {
     const foods=new food({
     FoodName       :req.body.fname,
     FoodType       :req.body.ftype,
     FoodCategory   :req.body.fcategory,
     FoodPrice      :req.body.fprice,
     FoodImage      :req.body.fimg,
     FoodisAvalable :req.body.fisavailable
})

foods.save()
.then((food)=>{
    res.status(200).json(food)
})
.catch((err)=>{
    res.status(500).json(err)
})
}

exports.allfood=(req,res)=>
{

    food.find()
        .then((allfood)=>{
            res.status(200).json(allfood)
        })
        .catch((err)=>{
            res.status(200).json(err)
        })
}

exports.getfoodBycategory=(req,res)=>{
    food
    .where('FoodCategory')
    .equals('Chineese')
    .then((fooddata)=>{
        res.status(200).json(fooddata)
    })
    .catch((err)=>{
     res.status(500).send(err)
    });
}
   
exports.getfoodByTypeAndCategory=(req,res)=>{
    food
    .where('foodType')
    .equals('veg')
    .where('FoodCategory')
    .equals('FoodCategory')
    .then((data)=>{
        res.status(200).json(data)
    })
    .catch((err)=>{
        res.status(500).send(err)
    });
}


exports.deletefood = (req, res) => {
   food.findByIdAndDelete(req.body.id)

        .then((result) => 
        {
            res.status(200).json(result)
        })
        .catch((err) => 
        {
            res.status(500).send(err)
        });
    }

    exports.updateprice=(req,res)=>{
        food.findOneAndUpdate({_id:req.body._id},{FoodPrice:req.body.fprice},{new:true})
        .then((updateprice)=>{
            res.status(200).json(updateprice)
        })
        .catch((err)=>{
            res.status(500).json(err)
        });
    }
