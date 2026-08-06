export interface User {
  id: string;
  userName: string;
  displayName: string;
  email: string;

//   avatar: string;
}

export interface LoginRequest {
    email: string,
    password: string
}

export interface AuthResponse {
    token: string,
    expiresIn: Number,
    user: User
}

export interface SignupRequest {
    email: string,
    password: string,
    userName: string,
    displayName: string
}
