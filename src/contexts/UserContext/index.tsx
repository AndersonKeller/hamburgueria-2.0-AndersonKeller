import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

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
  email: string;
  id: number;
}

export function UserProvider({ children }: iUserProviderProps) {
  const [user, setUser] = useState({} as iUser);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const id = window.localStorage.getItem("@idUser");
  const token = window.localStorage.getItem("@token-hamburgueria2.0");

  function verifyUser() {
    async function verifyApi() {
      try {
        setLoading(true);
        const resp = await api.get(`/users/${id}`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        console.log(resp);
        navigate("/home");
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }
    verifyApi();
  }

  useEffect(() => {
    if (token) {
      verifyUser();
    }
  }, []);

  return loading ? (
    <div></div>
  ) : (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
