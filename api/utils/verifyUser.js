import { errorHandler } from "./error.js";
import jwt from "jsonwebtoken";
export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    next(errorHandler("401", "unauthorixed"));
  }
  try {
    jwt.verify(
      token,
      process.env.JWT_SECRET,
      (err,
      (user) => {
        if (err) {
          next(errorHandler("403", "Forbidden"));
        }
        req.user = user;
        next();
      })
    );
  } catch (error) {}
};
