import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";

import User from "./../models/User";

import hashPassword from "./../util/hashPassword";
import comparePassword from "./../util/comparePassword";
import createToken from "./../util/createToken";

const createAdmin = async (req, res) => {
  try {
    const hashedPassword = await hashPassword("123456");

    const newUser = new User({
      name: "Noer",
      email: "noer@noer.com",
      password: hashedPassword,
      isAdmin: true,
    });

    await newUser.save();

    return res.status(201).json(newUser);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // 1. Validate request body
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ msg: errors.errors });
  }

  let foundUser;
  let isPasswordCorrect;
  try {
    // 2. Check if user exists in DB
    foundUser = await User.findOne({
      email,
    });

    // 3. Check if password is correct
    isPasswordCorrect = await comparePassword(password, foundUser.password);

    // 4. Throw error if user is not found or password is incorrect
    if (!foundUser || !isPasswordCorrect) {
      return res.status(403).json({ msg: "Incorrect credentials!" });
    }

    // 4. Create token as sign of auth
    const token = createToken(foundUser);

    // 5. Respond with token
    return res.status(200).json(token);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: error.msg,
    });
  }
};

const signupUser = async (req, res) => {
  const { name, email, password } = req.body;

  // 1. Validate request body
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ msg: errors.errors });
  }

  try {
    // 2. Check if email already exists
    const emailExists = await User.findOne({ email });
    console.log("emailExists", emailExists);

    if (emailExists) {
      return res.status(403).json({ msg: "Email in use already!" });
    }

    // 3. Hash password
    const hashedPassword = await hashPassword(password);

    // 4. Create a new user in DB
    const signupCreds = {
      name,
      email,
      password: hashedPassword,
      isAdmin: false,
    };

    const newUser = new User(signupCreds);

    newUser.save();

    // 5. Sign a token including relevant user data
    const token = createToken(newUser);

    // 6. Send a response including token
    return res.status(201).json(token);
  } catch (error) {
    return res.status(500).json({ msg: error.msg });
  }
};

export { createAdmin, loginUser, signupUser };
