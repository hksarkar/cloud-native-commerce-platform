// src/features/auth/hooks/useAuth.ts
import { useState } from "react";
import { login } from "../services/authApi";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);

  const handleLogin = async (email: string, password: string) => {
    try {
      setLoading(true);

      const res = await login({ email, password });

      // store token

      localStorage.setItem("token", res.token);

      return res;
    } catch (error) {
      console.error("Login failed", error);
    } finally {
      setLoading(false);
    }
  };

  return { handleLogin, loading };
};
