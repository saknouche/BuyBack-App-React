export interface User {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export interface UserRegister {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface UserAuth {
  email: string;
  password: string;
}