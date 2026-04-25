import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "./user/user.auth.js";
const JWT_SECRET = process.env.JWT_SECRET || "secret123";

export const registerUser = async (data) => {
  const { email, password } = data;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new ApiError(400, "User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    email,
    password: hashedPassword,
  });

  return { message: "User registered successfully" };
};

export const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new ApiError(401, "Invalid credentials");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new ApiError(401, "Invalid credentials");
  }

  const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
    expiresIn: "1d",
  });

  return { token };
};
