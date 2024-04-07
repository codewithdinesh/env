import { comparePassword, hashPassword } from "../helper/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";

export const loginController = async (req, res) => {
    try {

        if (!req.body.email || !req.body.password) {
            return res.status(400).send({
                success: false,
                message: "All fields are required",
            });
        }


        const user = await userModel.findOne({ email: req.body.email });

        console.log(user);


        if (!user) {
            return res.status(404).send({
                success: false,
                message: "User not found",
            });
        }

        console.log("Password:", user.password);

        const valid = await comparePassword(req.body.password, user.password);

        console.log(valid);


        if (!valid) {
            return res.status(400).send({
                success: false,
                message: "Password is wrong",
            });
        }
        const token = JWT.sign({ userID: user._id }, process.env.SECRET, {
            expiresIn: "7d",
        });

        // save in user model
        user.token = token;
        await user.save();


        res.status(200).send({
            success: true,
            message: "Log In seccussesfully",
            user,
            token,
        });
    } catch (error) {
        console.log(error);
        res.status(400).send({
            success: false,
            message: "Error in logging you",
            error,
        });
    }
};


export const registerController = async (req, res) => {
    try {
        console.log(req.body);

        // check all fields are filled
        if (!req.body.name || !req.body.email || !req.body.password || !req.body.age) {
            return res.status(400).send({
                success: false,
                message: "All fields are required",
            });
        }

        const existingUser = await userModel.findOne({
            email: req.body.email,
        });




        if (existingUser) {
            return res.status(200).send({
                success: true,
                message: "User already exits! Please Login",
            });
        }
        const hashedPassword = await hashPassword(req.body.password);
        req.body.password = hashedPassword;
        // console.log(req.body);
        const user = new userModel(
            {
                name: req.body.name,
                password: hashedPassword,
                email: req.body.email,
                age: req.body.age,
            }
        );
        await user.save();

        res.status(201).send({
            success: true,
            message: "Registered Successfully",
            user,
        });
    } catch (error) {
        res.status(400).send({
            success: false,
            message: "Error in registring",
            error,
        });
    }
};

export const userController = async (req, res) => {
    try {
        const user = await userModel.findOne({ _id: req.body.userID });
        // const user = await userModel({ _id: req.body.userID });

        if (user) {
            return res.status(200).send({
                success: true,
                message: "User details",
                user,
            });
        } else {
            return res.status(404).send({
                success: false,
                message: "User not found",
            });
        }

    } catch (error) {
        res.status(400).send({
            success: false,
            message: "Error in getting user details",
            error,
        });
    }
};


// update user details 
export const updateUserController = async (req, res) => {
    try {


        // findone and update
        const user = await userModel
            .findOneAndUpdate({
                _id
                    : req.body.userID
            }, {
                $set: {
                    income: req.body.income,
                    expenses: req.body.expenses,
                    savings: req.body.savings,
                    lib: req.body.lib,
                    assets: req.body.assets,

                }

            }, { new: true }).exec();




        // const user = await userModel.findOne({ _id: req.body.userID });



        if (user) {


            return res.status(200).send({
                success: true,
                message: "User details updated",
                user,
            });
        } else {
            return res.status(404).send({
                success: false,
                message: "User not found",
            });
        }

    }
    catch (error) {
        res.status(400).send({
            success: false,
            message: "Error in updating user details",
            error,
        });
    }
}


