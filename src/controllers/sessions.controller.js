import UserDTO from "../dtos/UserDTO.js";

export const current = (req, res) => {
  res.json(new UserDTO(req.user));
};
