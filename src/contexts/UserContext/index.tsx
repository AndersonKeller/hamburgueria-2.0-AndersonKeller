import { createContext, ReactNode, useState } from "react";

export const UserContext = createContext<iUserContext>({} as iUserContext);
interface iUserContext {
  user: iUser;
  setUser: (user: iUser) => void;
}
interface iUserProviderProps {
  children: ReactNode;
}
interface iUser {
  name: string;
}

export function UserProvider({ children }: iUserProviderProps) {
  const [user, setUser] = useState({} as iUser);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
