import { AuthResponse, LoginRequest, SignupRequest } from "@/features/auth/types/auth.types";
import { api } from "@/lib/axios";

// TODO: this will return Promise<LoginResponse>
export async function login(data: LoginRequest) {
  try {
    const res = await api.post("/auth/login", data);
    return res.data as AuthResponse;
  } catch (error) {
    console.log(error);
  }
}

export async function register(data: SignupRequest) {
  try {
    const res = await api.post("/auth/register", data);
    return res.data as AuthResponse;
  } catch (error) {
    console.log(error);
  }
}

export async function getMe() {
  try {
    const res = await api.get("/auth/me");
    // console.log("USE ME RES")
    // console.log(res)
    return res.data as AuthResponse;
  } catch (error) {
    console.log(error);
    return null;
  }
}
