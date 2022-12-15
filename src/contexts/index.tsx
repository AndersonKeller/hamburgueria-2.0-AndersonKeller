import { createContext, ReactNode } from "react";
import { CartProvider } from "./CartContext";
import { UserProvider } from "./UserContext";
import { toast } from "react-toastify";
import { IconContext } from "react-icons";

export const MainContext = createContext({});

interface iMainProvider {
  children: ReactNode;
  notify?: iNotify;
}
export interface iNotify {
  message?: string;
  type?: "error" | "sucess";
}
export function notify({ message, type }: iNotify) {
  return type === "error" ? toast.error(message) : toast.success(message);
}

export function MainProvider({ children }: iMainProvider) {
  return (
    <MainContext.Provider value={{}}>
      <IconContext.Provider value={{ className: "react-icons" }}>
        <UserProvider>
          <CartProvider>{children}</CartProvider>
        </UserProvider>
      </IconContext.Provider>
    </MainContext.Provider>
  );
}
