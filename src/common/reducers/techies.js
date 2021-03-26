import {ADD_TECHIES_LIST} from '../actions/techies';

const initialState = {content: [], isLoading: true};

const techiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TECHIES_LIST: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default techiesReducer;
