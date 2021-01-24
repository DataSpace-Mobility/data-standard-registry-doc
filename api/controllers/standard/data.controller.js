const data = require("../../models/data.model");

const insert_data = async (req, res) => {
  if (Array.isArray(req.body)) {
    for (let i of req.body) {
      const header = i.header;
      const sub_connected = i.sub_connected;
      const description = i.description;

      await data
        .create({
          header: header,
          sub_connected: sub_connected,
          description: description,
        })
        .then((result) => {
          if (result) console.log(`Inserted`);
        })
        .catch((err) => console.log(err));
    }
  } else {
    const heading = req.body.header;
    const sub_connected = req.body.sub_connected;
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
  }
  res.json({
    status:200,
    message:"Sucessfull",
    description:`Inserted into database`
  })
};

const get_data = async (req, res) => {
  let json_data = {};
  let header_array = [];
  if (!Array.isArray(req.body.header)) {
    header_array.push(req.body.header);
  } else {
    header_array = req.body.header;
  }
  for (let i of header_array) {
    const values = await data.find({ header: i });
    let arr = [];
    for (let i of values) {
      temp = {};
      temp[`${i.sub_connected}`] = i.description;
      arr.push(temp);
    }
    console.log(i,arr);
    json_data[i] = arr;
  }
  res.json(json_data).status(200);
};

module.exports = {
  get_data,
  insert_data
}