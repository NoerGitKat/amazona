import User from "./../models/User";

const createAdmin = async (req, res) => {
  const newUser = new User({
    name: "Noer",
    email: "noer@noer.com",
    password: "123456",
    isAdmin: true,
  });

  try {
    await newUser.save();

    return res.status(201).json(newUser);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

export { createAdmin };
