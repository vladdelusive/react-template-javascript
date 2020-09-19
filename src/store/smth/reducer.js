import { types } from "./types";

const initialState = {
  smth: {

  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_SMTH:
      return {
        ...state,
        smth: {
          ...state.smth,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
