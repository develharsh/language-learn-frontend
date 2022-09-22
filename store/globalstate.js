import { createContext, useReducer } from "react";
import reducers from "./reducers";
// import cookie from "js-cookie";
import axios from "axios";
import { ACTIONS } from "./actions";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  let initialState = {};
  const [state, dispatch] = useReducer(reducers, initialState);
  const validateSession = async () => {
    // dispatch({ type: ACTIONS.GLOBAL_LOADING, payload: true });
    const token = cookie.get("token");
    if (token) {
      try {
        const response = await axios({
          method: "GET",
          url: `${process.env.baseUrl}/v1/user/load`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.data.success) {
          dispatch({ type: ACTIONS.AUTH, payload: response.data.data });
        }
      } catch (err) {
        cookie.remove("token");
        dispatch({ type: ACTIONS.AUTH, payload: null });
      }
    } else dispatch({ type: ACTIONS.AUTH, payload: null });
    // dispatch({ type: ACTIONS.GLOBAL_LOADING, payload: false });
  };

  // useEffect(() => {
  //   validateSession();
  // }, []);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
