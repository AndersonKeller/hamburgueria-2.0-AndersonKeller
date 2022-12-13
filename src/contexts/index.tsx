import { createContext, ReactNode } from "react";
import { CartProvider } from "./CartContext";
import { UserProvider } from "./UserContext";

export const MainContext = createContext({});

interface iMainProvider {
  children: ReactNode;
}

export function MainProvider({ children }: iMainProvider) {
  return (
    <MainContext.Provider value={{}}>
      <UserProvider>
        <CartProvider>{children}</CartProvider>
      </UserProvider>
    </MainContext.Provider>
  );
}
