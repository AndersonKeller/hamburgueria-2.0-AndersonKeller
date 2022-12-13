import { createContext, ReactNode } from "react";
import { CartProvider } from "./CartContext";
import { UserProvider } from "./UserContext";
import { toast } from "react-toastify";

export const MainContext = createContext({});

interface iMainProvider {
  children: ReactNode;
}
interface iNotify {
  message: string;
  type: "error" | "sucess";
}
function notify(message: iNotify, type: iNotify) {
  type.type === "error"
    ? toast.error(message.message)
    : toast.success(message.message);
}

export function MainProvider({ children }: iMainProvider) {
  return (
    <MainContext.Provider value={{ notify }}>
      <UserProvider>
        <CartProvider>{children}</CartProvider>
      </UserProvider>
    </MainContext.Provider>
  );
}
