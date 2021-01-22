const data = require('../../models/data.model');

module.exports = insert_data = async (req,res) => {
    const heading = req.body.heading;
    const sub_connected = req.body.node;
    const description = req.body.description;

    await data.create({heading:heading,sub_connected:sub_connected,description:description})
    .then(result => {
        if(result) console.log(`Inserted`)
    })
    .catch(err=>console.log(err)) 
}

module.exports = get_data = async (req,res) => {
    const data = await data.find({heading:req.body.heading});
    res.json(data).status(200);
}