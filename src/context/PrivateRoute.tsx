"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "./AuthContext";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && (!user || user.role !== "admin")) {
      router.replace("/not-authorized");
    }
  }, [user, loading, router]);

  if (loading) {
    return <div>Loading...</div>; // Show a loading spinner or placeholder
  }

  if (!user || user.role !== "admin") {
    return null; // Avoid rendering protected content
  }

  return <>{children}</>;
};

export default PrivateRoute;
