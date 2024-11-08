import generateToken from "../utils/token.js";
import UsersService from "../services/users.service.js";
import { validateEmailAndPassword, validateFields } from "../utils/validation.js";

const usersService = new UsersService();

export default class UsersController {
  login = async (req, res) => {
    const { email } = req.body;
    try {
      if (!validateEmailAndPassword(req.body, res)) return;
  
      const user = await usersService.getUserByEmail(email);
      if (!validateFields(user, req, res)) return;
  
      const token = generateToken(user);
  
      return res.status(200).json({ token });    
    } catch (error) {
      return res
        .status(500)
        .json({ message: error.message, other: "oie" });
    }
  };
  
  async createUser(req, res) {
    try {
      const newUser = await usersService.createUser(req.body);
      const token = generateToken(newUser.id);
      return res.status(201).json({ token });
    } catch (error) {
      return res
      .status(500)
      .json({ message: error.message });
  }
  };
}
