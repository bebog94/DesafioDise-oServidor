import { findByEmail,findById,createUser  } from "../services/users.service.js";


export const findUsers = (req, res) => {
    const users = findAll();
    res.status(200).json({ users });
  };
  
  export const findUserById = (req, res) => {
    const { idUser } = req.params;
    const user = findUserById(+idUser);
    if (!user) {
      return res.status(404).json({ message: "No User found with the id" });
    }
    res.status(200).json({ message: "User found", user });
  };
  
  export const createUser = (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const createdUser = createOne(req.body);
    res.status(200).json({ message: "User created", user: createdUser });
  };