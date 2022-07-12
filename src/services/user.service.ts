import api from './api.service';
import { IPagination } from '../models/user.model';

export const getUsers = async (page = 1, size = 10 ): Promise<IPagination> => {
  const response = await api.get(`users?page=${page}&size=${size}`);
  return response.data as IPagination;
};
