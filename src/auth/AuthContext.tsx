import React, { createContext, useContext, useEffect, useState } from "react";

type User = {
  username: string;
  role: "Risk Officer" | "Admin";
};


type AuthContextType = {
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("varis_user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  // const login = async (username: string, password: string) => {
  //   // default credential
  //   if (username === "riskofficer" && password === "risk123") {
  //     const userData: User = { username, role: "Risk Officer" };
  //     setUser(userData);
  //     localStorage.setItem("varis_user", JSON.stringify(userData));
  //     return true;
  //   }
  //   return false;
  // };

  const login = async (username: string, password: string) => {
  if (username === "riskofficer" && password === "risk123") {
    const userData: User = { username, role: "Risk Officer" };
    setUser(userData);
    localStorage.setItem("varis_user", JSON.stringify(userData));
    return true;
  }

  if (username === "admin" && password === "admin123") {
    const userData: User = { username, role: "Admin" };
    setUser(userData);
    localStorage.setItem("varis_user", JSON.stringify(userData));
    return true;
  }

  return false;
};


  const logout = () => {
    setUser(null);
    localStorage.removeItem("varis_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};
