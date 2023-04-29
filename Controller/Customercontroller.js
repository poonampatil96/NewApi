const customer = require("../Modal/Customermodal")
exports.addcustomer = (req, res) => {
   const custm = new customer
      ({
         CustName: req.body.custname,
         CustMobNo: req.body.custmbNo,
         CustAddress: req.body.custadd,
      })

   custm.save()
      .then((result) => {
         res.status(200).json(result)
      })
      .catch((err) => {
         res.status(500).json(err)
      });
}

exports.allcust = (req, res) => {
   customer.find()
      .then((allcust) => {
         res.status(200).json(allcust)
      })
      .catch((err) => {
         res.status(500).json(err)
      });
}

exports.getcustByid = (req, res) => {
   const id = req.body.id
   customer 
     .where("_id")
     .equals(id)
      .then((custData) => {
         res.status(200).json(custData)
      })
      .catch((err) => {
         res.status(500).send(err)
      });
}
