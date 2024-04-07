import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

export const requireSignIn = async (req, res, next) => {
  try {

    if (!req.body.token) {
      return res.status(401).send({
        success: false,
        message: "Auth failed",
      });
    }

    // const token = req.headers["authorization"].split(" ")[1];

    const token = req.body.token;
    JWT.verify(token, process.env.SECRET, (err, decode) => {
      if (err) {
        res.status(500).send({
          success: false,
          message: "Auth failed",
          err,
        });
      } else {

        console.log("Decode:", decode);

        req.body.userID = decode.userID;
        next();
      }
    });
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      message: "Auth failed",
      error,
    });
  }
};

