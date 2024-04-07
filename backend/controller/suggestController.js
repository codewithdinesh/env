import userModel from "../models/userModel.js";
import dotenv from "dotenv";
dotenv.config();

import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const suggestController = async (req, res) => {

    const { age, income, goal, saving, libilities, assets, risk_factor, duration } = req.body;

    let prompt = `Given the following details: Age: ${age}, Income: ${income}, Goal: ${goal}, Savings: ${saving}, Liabilities: ${libilities}, Assets: ${assets}, Risk Factor: ${risk_factor}, Duration: ${duration}, suggest the best investment option.`;

    const user = await userModel.findOne({ _id: req.body.userID });

    if (!user) {
        return res.status(404).send({
            success: false,
            message: "User not found",
        });
    }

    // update all details in user model
    user.age = age;
    user.income = income;
    user.goal = goal;
    user.savings = saving;
    user.libilities = libilities;
    user.assets = assets;
    user.risk_factor = risk_factor;


    await user.save();

    // return res.status(200).send({
    //     success: true,
    //     message: "User details updated successfully",
    //     prompt,
    // });

    // call openai api to get the suggestion

    const completion = await openai.chat.completions.create({
        messages: [{ "role": "system", "content": "You are a helpful assistant." },
        { "role": "user", "content": prompt }],
        model: "gpt-3.5-turbo",
    });

    completion.choices.forEach((choice) => {
        console.log(choice.message.content);
    });


    // return the suggestion to the user

    return res.status(200).send({
        success: true,
        message: "Suggestion generated successfully",
        suggestion: completion.choices[0].message.content,

    });






};