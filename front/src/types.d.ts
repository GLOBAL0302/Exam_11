export interface IUser {
  _id: string;
  username: string;
  password: string;
  token: string;
  display_name: string;
  phone_number: string;
}

export interface IRegisterResponse {
  user: IUser;
  message: string;
}

export interface IRegisterMutation {
  username: string;
  password: string;
  display_name: string;
  phone_number: string;
}

export interface interfaceSignInMutation {
  username: string;
  password: string;
}

export interface IValidationError {
  errors: {
    [key: string]: {
      name: string;
      message: string;
    };
  };
  message: string;
  name: string;
  _message: string;
}

export interface IGlobalError {
  error: string;
}
