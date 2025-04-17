import bcrypt from "bcryptjs";

//to compare the entered password with the hashed password for authentication
const comparePassword = async (password, hashedPassword) => {
  //using bcrypt.compare to return bool true/false if password match or not
  return await bcrypt.compare(password, hashedPassword);
};

export default comparePassword;
