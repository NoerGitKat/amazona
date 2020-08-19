import { validationResult } from "express-validator";

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
    return res.status(422).json({ msg: errors.msg });
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
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg: "Something went wrong, check your credentials and try again!",
    });
  }

  // 4. Throw error if user is not found or password is incorrect
  if (!foundUser || !isPasswordCorrect) {
    return res.status(403).json({ msg: "Incorrect credentials!" });
  }

  // 4. Create token as sign of auth
  const token = createToken(foundUser);

  // 5. Respond with token
  return res.status(200).json(token);
};

const signupUser = (req, res) => {};

export { createAdmin, loginUser, signupUser };
