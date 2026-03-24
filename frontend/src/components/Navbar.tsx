"use client";

import { useAuthContext } from "@/features/auth/context/AuthContext";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { isAuthenticated } = useAuthContext();
  const { handleLogout } = useAuth();
  const router = useRouter();

  const onLogout = () => {
    handleLogout();
    router.push("/login");
  };

  return (
    <nav style={{ display: "flex", gap: "10px" }}>
      <button onClick={() => router.push("/")}>Home</button>

      {!isAuthenticated ? (
        <button onClick={() => router.push("/login")}>Login</button>
      ) : (
        <>
          <button onClick={() => router.push("/dashboard")}>Dashboard</button>
          <button onClick={onLogout}>Logout</button>
        </>
      )}
    </nav>
  );
}
