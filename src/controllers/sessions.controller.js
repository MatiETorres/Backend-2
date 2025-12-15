
import jwt from 'jsonwebtoken';
import repo from '../repositories/users.repository.js';
import { createHash, isValid } from '../utils/hash.js';
import UserDTO from '../dto/UserDTO.js';

export const register = async (req,res)=>{
  const user = await repo.register({...req.body, password:createHash(req.body.password)});
  res.json({status:'ok'});
};

export const login = async (req,res)=>{
  const user = await repo.getByEmail(req.body.email);
  if(!user || !isValid(user, req.body.password)) return res.status(401).json({error:'login'});
  const token = jwt.sign({id:user._id}, process.env.JWT_SECRET, {expiresIn:'1h'});
  res.json({token});
};

export const current = (req,res)=>{
  res.json(new UserDTO(req.user));
};
