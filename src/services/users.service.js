import { usersManager } from "../dao/managers/usersManager.js";
import { hashData } from "../utils.js";


  export const findById = (id) => {
    const user = usersManager.findById(id);
    return user;
  };

  export const findByEmail = (email) => {
    const user = usersManager.findByEmail(email);
    return user;
  };
  
  export const createOne = (obj) => {
    const hashedPassword = hashData(obj.password);
    const newObj = { ...obj, password: hashedPassword };
    const createdUser = usersManager.createOne(newObj);
    return createdUser;
  };
  