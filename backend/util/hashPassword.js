import bcrypt from "bcrypt";
const saltRounds = 10;

const hashPassword = (password) => {
  const hashed = bcrypt.hash(password, saltRounds);
  return hashed;
};

export default hashPassword;
