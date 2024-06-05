import { Request, Response } from 'express';
import User from '../models/user';

export const getUsers = async (_req: Request, res: Response): Promise<void> => {
  const users = await User.findAll();
  res.json(users);
};

export const createUser = async (req: Request, res: Response): Promise<void> => {
  const { name, email } = req.body;
  const user = await User.create({ name, email });
  res.json(user);
};