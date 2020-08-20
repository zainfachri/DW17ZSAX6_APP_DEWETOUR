const { Country } = require("../models");

exports.showCountry = async (req, res) => {
  try {
    const country = await Country.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.status(200).send({
      message: "response success",
      data: country,
    });
  } catch (err) {
    console.log(err);
    response.status(500).send({
      error: {
        message: "Server ERROR",
      },
    });
  }
};

exports.showCountryDetail = async (req, res) => {
  try {
    const { id } = req.params;

    const detailCountry = await Country.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    if (!detailCountry)
      return res.status(400).send({
        message: `Country with id: ${id} is not existed`,
      });

    res.status(200).send({
      message: "response Success",
      data: detailCountry,
    });
  } catch (err) {
    console.log(err);
    response.status(500).send({
      error: {
        message: "Server ERROR",
      },
    });
  }
};

exports.createCountry = async (req, res) => {
  try {
    const addCountry = await Country.create(req.body, {
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.status(200).send({
      message: "Country has been Created",
      data: addCountry,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: {
        message: "Server ERROR",
      },
    });
  }
};

exports.updateCountry = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const editCountry = await Country.update(req.body, {
      where: {
        id,
      },
    });
    res.status(200).send({
      message: "Country has been Updated",
      data: {
        id,
        name,
      },
    });
  } catch (error) {
    console.log(err);
    res.status(500).send({
      error: {
        message: "Server ERROR",
      },
    });
  }
};
