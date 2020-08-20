const { Transaction, Trip, Country } = require("../models");

exports.showTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findAll({
      include: {
        model: Trip,
        as: "trip",
        attributes: {
          exclude: ["countryId", "createdAt", "updatedAt"],
        },
        include: {
          model: Country,
          as: "country",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      },

      attributes: {
        exclude: ["tripId", "createdAt", "updatedAt"],
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
      include: {
        model: Trip,
        as: "trip",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
      where: {
        id,
      },
      attributes: {
        exclude: ["tripId", "createdAt", "updatedAt"],
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

exports.createTransaction = async (req, res) => {
  try {
    const addTransaction = await Transaction.create(req.body, {
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
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
