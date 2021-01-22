const data = require("../../models/data.model");

module.exports = insert_data = async (req, res) => {
  const heading = req.body.heading;
  const sub_connected = req.body.node;
  const description = req.body.description;

  await data
    .create({
      heading: heading,
      sub_connected: sub_connected,
      description: description,
    })
    .then((result) => {
      if (result) console.log(`Inserted`);
    })
    .catch((err) => console.log(err));
};

module.exports = get_data = async (req, res) => {
  let json_data;
  if (Array.isArray(req.body.header)) {
    const data = await data.find({ heading: req.body.header });
    let arr = [];
    for (let i of data) {
      temp = {};
      temp[i.sub_connected] = i.description;
      arr.push(temp);
    }
    json_data[req.body.heading] = arr;
  } else {
    for (let i of req.body.header) {
      const data = await data.find({ heading: i });
      let arr = [];
      for (let i of data) {
        temp = {};
        temp[i.sub_connected] = i.description;
        arr.push(temp);
      }
      json_data[req.body.heading] = arr;
    }
  }
  res.json(json_data).status(200);
};
