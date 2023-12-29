const tbl = require("../models")
const Model = tbl.User;

exports.get = async (req, res) => {
  try {
    const result = await Model.findAll();

    return res.json({
      success: true,
      message: "Berhasil mendapatkan semua data.",
      data: result,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: "Bad Request",
    });
  }
}

exports.store = async (req, res) => {
  let data = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
  };

  try {
    let result = await Model.create(data);

    return res.json({
      success: true,
      message: "Berhasil menambahkan data.",
    });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: "Bad Request",
    });
  }
}

exports.update = async (req, res) => {
  let id = req.params.id;

  let data = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
  };
  
  try {
    let result = await Model.update(data, { where: { id: id } });

    return res.json({
      success: true,
      message: "Berhasil mengubah data.",
    });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: "Bad Request",
    });
  }
}

exports.destroy = async (req, res) => {
  let id = req.params.id;

  try {
    let result = await Model.destroy({ where: { id: id } });

    return res.json({
      success: true,
      message: "Berhasil menghapus data.",
    });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: "Bad Request",
    });
  }
}