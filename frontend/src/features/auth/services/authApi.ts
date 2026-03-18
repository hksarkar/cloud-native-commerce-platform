import { api } from "@/services/api";
import { LoginPayload } from "../types";

export const login = async (data: LoginPayload) => {
  const response = await api.post("/auth/login", data);
  return response.data;
};
