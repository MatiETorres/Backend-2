
import User from '../models/User.js';
export default class UsersDAO {
  getByEmail = email => User.findOne({email});
  create = data => User.create(data);
}
