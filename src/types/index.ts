export interface ILoginPayload {
    username: string;
    password: string;
  }
  
  export interface IRegisterPayload {
    lastName?: string;
    firstName?: string;
    username?: string;
    phoneNumber?: string;
    password?: string;
  }
  
  export interface IResetPayload {
    username: string;
    password: string;
  }