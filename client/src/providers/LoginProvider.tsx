import { createContext, ReactNode, useReducer } from "react";

type InitialValue = {
  session: string | null;
};

export const initialValue: InitialValue = {
  session: null,
};

export const LoginContext = createContext(initialValue);
export const LoginDispatchContext = createContext(
  (props: { type: LoginActionType }) => {}
);

export const LoginActionType = { CHECK: "check" } as const;
export type LoginActionType =
  (typeof LoginActionType)[keyof typeof LoginActionType];

const reducer = (
  state: InitialValue,
  action: { type: LoginActionType; session?: string }
) => {
  switch (action.type) {
    case LoginActionType.CHECK:
      return { ...state, session: action.session ?? null };
    default:
      return state;
  }
};

function LoginProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <LoginDispatchContext.Provider value={dispatch}>
      <LoginContext.Provider value={state}>{children}</LoginContext.Provider>
    </LoginDispatchContext.Provider>
  );
}

export default LoginProvider;
