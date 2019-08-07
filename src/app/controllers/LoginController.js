import Users from "../models/Users";
import jwt from "jsonwebtoken";
import SECRET from "../configs/secret";

class LoginController {
  store(req, res) {
    const { email, password } = req.body;

    const user = Users.filter(user => user.email === email);

    if (!user) {
      return res.status(400).json({ error: "User does not exist" });
    }

    if (!user.password === password) {
      return res.status(400).json({ errror: "Invalid password" });
    }

    return res.json({
      ...user,
      token: jwt.sign({ id: user.id }, SECRET, { expiresIn: "7d" })
    });
  }
}

export default new LoginController();
