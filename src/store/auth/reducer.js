import { LOGIN_REQUEST, ERROR } from "./constants";

const initialState = {
  user: null,
  loading: false,
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
