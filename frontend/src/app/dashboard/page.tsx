"use client";

import { useAuthContext } from "@/features/auth/context/AuthContext";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const { isAuthenticated } = useAuthContext();
  const { handleLogout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  const onLogout = () => {
    handleLogout();
    router.push("/login");
  };

  if (!isAuthenticated) return <p>Checking auth...</p>;

  return (
    <div>
      <h1>Welcome to Dashboard 🎉</h1>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}
