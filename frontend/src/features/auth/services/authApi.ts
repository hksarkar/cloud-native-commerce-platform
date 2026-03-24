import { api } from "@/services/api";
import { LoginPayload } from "../types";
const USE_MOCK = true;

export const login = async (data: LoginPayload) => {
  if (USE_MOCK) {
    return new Promise<{ token: string }>((resolve) => {
      setTimeout(() => {
        resolve({ token: "fake-jwt-token" });
      }, 500);
    });
  }

  const response = await api.post("/auth/login", data);
  return response.data;
};
