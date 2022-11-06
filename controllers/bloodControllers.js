const Blood = require("../model/bloodModel");


module.exports.getblood = async (req, res, next) => {
  try {
    const { group, count } = req.body;
    const user = await Blood.find();
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    const errors = handleErrors(err);
    res.json({ errors, created: false });
  }
};

module.exports.addblood = async (req, res, next) => {
    try {
      const { group, count } = req.body;
      const user = await Blood.create({ group, count });
      res.status(201).json({ user: user._id, created: true });
    } catch (err) {
      console.log(err);
      const errors = handleErrors(err);
      res.json({ errors, created: false });
    }
  };

  module.exports.updateblood = async (req, res, next) => {
    try {
      const { group, count } = req.body;
      const user = await Blood.updateOne({"group": req.body.group},{
        "count": req.body.count
      });
      const blood1 = await Blood.create({ group, count });
      res.status(201).json(blood1);
    } catch (err) {
      console.log(err);
      const errors = handleErrors(err);
      res.json({ errors, created: false });
    }
  };