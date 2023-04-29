const order = require("../Modal/Ordermodal")

exports.addorder = (req, res) => {
    const ord = new order({
        OrederAmount: req.body.orderamt,
        ItemNo: req.body.itemno,
        OrderItem: req.body.orditems,
        OrderStatus: req.body.ordsts,
        CustId:req.body.cid
    })
    ord.save()
        .then((order) => {
            res.status(200).json(order)
        })
        .catch((err) => {
            res.staus(500).json(err)
        });
}

exports.allorder = (req, res) => {
    order.find()
    .populate('OrderItem.food')
    .populate('CustId','CustName CustMobNo')
        .then((allord) => {
            res.status(200).json(allord)
        })
        .catch((err) => {
            res.status(500).json(err)
        });
}

exports.getorderBystatus = (req, res) => {
    order
        .where('OrderStatus')
        .then((order) => {
            res.status(200).json(order)
        })
        .catch((err) => {
            res.status(500).send(err)
        });

}
