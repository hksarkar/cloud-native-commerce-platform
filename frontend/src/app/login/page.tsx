"use client";

import { useState } from "react";
import { api } from "../../services/api";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await api.post("/api/auth/login", {
        email,
        password,
      });
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col gap-4 p-10 max-w-md">
      <h1 className="text-2xl font-bold">Login</h1>

      <input
        className="border p-2"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        className="border p-2"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin} className="bg-black text-white p-2">
        Login
      </button>
    </div>
  );
}
