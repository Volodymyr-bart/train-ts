export interface IAddress {
  street: string;
  city: string;
  zipcode: string;
}

export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface IUser {
  id: number | null;
  name: string | null;
  username: string | null;
  email: string | null;
  address: IAddress | null;
}

export interface IUserState extends IUser {
  loading: boolean;
  error: string | null;
  todos: ITodo[];
}
