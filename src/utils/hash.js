
import bcrypt from 'bcrypt';
export const createHash = p => bcrypt.hashSync(p, bcrypt.genSaltSync(10));
export const isValid = (u,p) => bcrypt.compareSync(p, u.password);
