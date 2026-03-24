// src/features/auth/hooks/useAuth.ts
import { useState } from "react";
import { login } from "../services/authApi";
import { useAuthContext } from "../context/AuthContext";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const { setAuth } = useAuthContext();
  //Login Function
  const handleLogin = async (email: string, password: string) => {
    try {
      setLoading(true);

      const res = await login({ email, password });

      // store token
      localStorage.setItem("token", res.token);

      setAuth(true); //important

      return res;
    } catch (error) {
      console.error("Login failed", error);
    } finally {
      setLoading(false);
    }
  };

  //Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    setAuth(false);
  };

  return { handleLogin, handleLogout, loading };
};
