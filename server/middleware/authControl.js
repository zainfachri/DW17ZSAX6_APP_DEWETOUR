const jwt = require("jsonwebtoken");

exports.authenticated = (req, res, next) => {
  let header, token;

  //check jika user mengirim token atau tidak
  if (
    !(header = req.header("Authorization")) ||
    !(token = header.replace("Bearer ", ""))
  )
    //reject request dan response akses
    return res.status(400).send({
      error: {
        message: "Access Denied",
      },
    });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = verified;
    next();
  } catch (err) {
    console.log(err);

    res.status(400).send({
      error: {
        message: "Invalid Token",
      },
    });
  }
};
