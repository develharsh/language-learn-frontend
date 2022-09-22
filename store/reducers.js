import { ACTIONS } from "./actions";

const reducers = (state, action) => {
  switch (action.type) {
    case ACTIONS.NOTIFY:
      return {
        ...state,
        notify: action.payload,
      };
    case ACTIONS.LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case ACTIONS.DEMOPOPUP:
      return {
        ...state,
        demoPopup: action.payload,
      };
    default:
      return state;
  }
};

export default reducers;
