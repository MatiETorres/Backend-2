
import UsersDAO from '../dao/users.dao.js';
const dao = new UsersDAO();
export default {
  register: data => dao.create(data),
  getByEmail: email => dao.getByEmail(email)
}
