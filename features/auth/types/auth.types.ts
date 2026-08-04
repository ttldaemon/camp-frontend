export interface User {
  id: string;
  userName: string;
  displayName: string;
  email: string;

//   avatar: string;
}

export interface LoginRequest {
    email: String,
    password: String
}

export interface LoginResponse {
    user: User
}

export interface SignupRequest {
    email: String,
    password: String,
    userName: String,
    displayName: String
}

export interface SignupResponse {
    user: User
}
