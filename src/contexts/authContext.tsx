/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import PropTypes from "prop-types";
import { createContext, useEffect, useReducer } from "react";
import { useMutation } from "@apollo/client";
import { AUTHUSERLOGIN } from "@/pages/api/user/login";
import { accountReducer } from "@/store/accountReducer";

import Loader from "@/components/ui-components/Loader";
import jwtDecode from "jwt-decode";

export interface AuthState {
  isloggedIn: boolean;
  inInitialized?: boolean;
  user?: {
    name?: string;
    role?: string;
    email?: string;
  };
}

export const initialState: AuthState = {
  isloggedIn: false,
  inInitialized: false,
  user: {
    name: undefined,
    role: undefined,
    email: undefined,
  },
};

const verifyToken = (serviceToken: any) => {
  if (!serviceToken) {
    return false;
  }
  const decoded: any = jwtDecode(serviceToken);

  return decoded.exp > Date.now() / 1000;
};

const setSession = (serviceToken: any) => {
  if (serviceToken) {
    localStorage.setItem("token", serviceToken);
    // axios.defaults.headers.common.Authorization = `Bearer ${serviceToken}`;
  } else {
    localStorage.removeItem("token");
    // delete axios.defaults.headers.common.Authorization;
  }
};

export interface AuthContextProps {
  authState: AuthState;
  logIn: (email: string, password: string) => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {
  const [authState, dispatch] = useReducer(accountReducer, initialState);
  const [userLogin] = useMutation(AUTHUSERLOGIN);

  useEffect(() => {
    const init = () => {
      try {
        const serviceToken = window.localStorage.getItem("token");
        if (serviceToken && verifyToken(serviceToken)) {
          setSession(serviceToken);
          const data1: any = jwtDecode(serviceToken);
          dispatch({
            type: "LOGIN",
            payload: {
              name: data1.name,
              email: data1.email,
              role: data1.role,
              id: data1.id,
            },
          });
        } else {
          dispatch({
            type: "LOGOUT",
          });
          localStorage.removeItem("token");
        }
      } catch (error) {
        console.error(error);
        dispatch({
          type: "LOGOUT",
        });
        localStorage.removeItem("token");
      }
    };
    init();
  }, []);

  const logIn: any = async (email: string, password: string) => {
    const { data } = await userLogin({
      variables: {
        input: {
          email,
          password,
        },
      },
    });
    if (!data.userLogin) {
      return localStorage.removeItem("token");
    }
    const { token } = data.userLogin;
    const data1: any = jwtDecode(token);
    const user = {
      name: data1.name,
      email: data1.email,
      role: data1.role,
      id: data1.id,
    };
    setSession(token);
    dispatch({
      type: "LOGIN",
      payload: user,
    });
  };

  if (authState.inInitialized !== undefined && !authState.inInitialized) {
    return <Loader />;
  }

  return (
    <AuthContext.Provider
      value={{
        authState,
        logIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
