const { User } = require("../models");

exports.showUser = async (req, res) => {
  try {
    const getAllUser = await User.findAll({
      attributes: {
        exclude: ["countryId", "createdAt", "updatedAt"],
      },
    });

    res.status(200).send({
      message: "response success",
      data: getAllUser,
    });
  } catch (error) {
    console.log(err);
    response.status(500).send({
      error: {
        message: "Server ERROR",
      },
    });
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    await User.destroy({
      where: {
        id,
      },
    });
    res.status(200).send({
      message: `User id : ${id} has been successfully deleted.`,
    });
  } catch (error) {
    console.log(err);
    response.status(500).send({
      error: {
        message: "Server ERROR",
      },
    });
  }
};
