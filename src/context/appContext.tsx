import React, { useContext, useReducer } from "react";
import reducer from "./reducer"; // Import StateAction type from your reducer module
import { LOGIN_USER_START, LOGIN_USER_SUCCESS, LOGOUT_USER } from "./action";

export type State = {
  user: any;
  userLoading: boolean;
  token: string;
};

const initialState = {
  user: null,
  userLoading: false,
  token: "",
};

const AppContext = React.createContext<
  { user: typeof initialState; loginUser: any; logoutUser: any } | undefined
>(undefined);

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const loginUser = (user: any) => {
    dispatch({ type: LOGIN_USER_START });
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: { user: user.user, token: user.token },
    });
  };

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
  };

  return (
    <AppContext.Provider value={{ ...state, loginUser, logoutUser }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export { AppProvider, initialState, useAppContext };
