// src/app/login/page.tsx
"use client";

import { useState } from "react";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { handleLogin, loading } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validate = () => {
    if (!email) return "Email is required";
    if (!emailRegex.test(email)) return "Invalid email format";
    if (!password) return "Password is required";
    if (password.length < 6) return "Password must be at least 6 characters";
    return "";
  };

  const onSubmit = async () => {
    const validationError = validate();

    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");

    const res = await handleLogin(email, password);

    if (res) {
      router.push("/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div>
      <div>
        <h1>Login</h1>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
        />

        <button onClick={onSubmit} disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
      <div>{error && <p style={{ color: "red" }}>{error}</p>}</div>
    </div>
  );
}
