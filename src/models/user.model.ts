export interface IPagination {
  current: number;
  pageSize: number;
  total?: number;
  totalPages?: number;
  users: IUser[];
}

export interface IUser {
	name: string;
	email: string;
	createdAt: string;
}
