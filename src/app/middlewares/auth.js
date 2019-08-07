import jwt from "jsonwebtoken";
import { promisify } from "util";
import SECRET from "../configs/secret";

export default async (req, res, next) => {
  const tokenAuthorization = req.headers.authorization;

  if (!tokenAuthorization) {
    return res.status(400).json({ error: "token not provided" });
  }

  const [, tokenValue] = tokenAuthorization.split(" ");

  try {
    const tokenDecoded = await promisify(jwt.verify)(tokenValue, SECRET);
    req.id = tokenDecoded.id;
  } catch (err) {
    return res.status(401).json({ error: err });
  }

  return next();
};
