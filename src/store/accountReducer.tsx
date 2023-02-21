import { AuthState } from "@/contexts/authContext";

interface UserInteface {
  name: string;
  email: string;
  role: string;
  id: string;
}

type AuthAction = { type: "LOGIN"; payload: UserInteface } | { type: "LOGOUT" };

export const accountReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    // case REGISTER: {
    //   const { user } = action.payload;
    //   return {
    //     ...state,
    //     user,
    //   };
    // }
    case "LOGIN": {
      return {
        ...state,
        isloggedIn: true,
        inInitialized: true,
        user: action.payload,
      };
    }
    case "LOGOUT": {
      return {
        ...state,
        inInitialized: true,
        isloggedIn: false,
        user: {
          name: undefined,
          email: undefined,
          role: undefined,
        },
      };
    }
    default:
      return state;
  }
};
