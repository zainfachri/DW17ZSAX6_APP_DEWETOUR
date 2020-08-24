const { Transaction, Trip, Country, User } = require("../models");

exports.showTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findAll({
      include: [
        {
          model: User,
          as: "user",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
        {
          model: Trip,
          as: "trip",
          include: {
            model: Country,
            as: "country",
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
          attributes: {
            exclude: ["countryId", "createdAt", "updatedAt"],
          },
        },
      ],
      order: [["id", "DESC"]],

      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.status(200).send({
      message: "response success",
      data: transaction,
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

exports.showTransactionDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const getTransaction = await Transaction.findOne({
      include: [
        {
          model: User,
          as: "user",
          attributes: {
            exclude: ["createdAt", "updatedAt", "password", "roleId"],
          },
        },
        {
          model: Trip,
          as: "trip",
          include: {
            model: Country,
            as: "country",
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
          attributes: {
            exclude: ["countryId", "createdAt", "updatedAt"],
          },
        },
      ],
      where: {
        id,
      },
      attributes: {
        exclude: ["tripId", "userId", "createdAt", "updatedAt"],
      },
    });

    if (!getTransaction)
      return res.status(400).send({
        message: `Transaction with id: ${id} is not existed`,
      });

    res.status(200).send({
      message: "response Success",
      data: getTransaction,
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
exports.showHistory = async (req, res) => {
  try {
    const { userId } = req.params;
    const getHistory = await Transaction.findAll({
      include: {
        model: Trip,
        as: "trip",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        include: {
          model: Country,
          as: "country",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      },
      where: {
        userId: userId,
      },
      order: [["id", "DESC"]],
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    if (!getHistory)
      return res.status(400).send({
        message: `Data not found`,
      });

    res.status(200).send({
      message: "response Success",
      data: getHistory,
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
exports.createTransaction = async (req, res) => {
  try {
    const { bookImage } = req.files;
    const imageBookName = bookImage.name;
    await bookImage.mv(`./uploads/${imageBookName}`);

    const addTransaction = await Transaction.create({
      ...req.body,
      attachment: imageBookName,
    });
    res.status(200).send({
      message: "Transaction has been Created",
      data: addTransaction,
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

exports.updateTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const editTransaction = await Transaction.update(req.body, {
      where: {
        id,
      },
    });

    res.status(400).send({
      message: "Transaction has been updated",
      data: editTransaction,
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
