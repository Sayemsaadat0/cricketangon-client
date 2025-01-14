"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import Cookies from "js-cookie";

type User = {
  name: string;
  email: string;
  image: string;
  role: string;
  id?: any;
};

type AuthContextType = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  loading?: boolean; // Add a loading state
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // Initialize loading to true

  useEffect(() => {
    const fetchUser = async () => {
      const storedUser = Cookies.get("authUser");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      setLoading(false); // Set loading to false once user data is processed
    };

    fetchUser();
  }, []);

  const login = (user: User) => {
    setUser(user);
    Cookies.set("authUser", JSON.stringify(user), { expires: 7 });
    setLoading(false); // Set loading to false after login
  };

  const logout = () => {
    setUser(null);
    Cookies.remove("authUser");
    setLoading(false); // Set loading to false after logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
