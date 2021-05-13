import { SET_USER } from '../actions/actionType';

const INITIAL_STATE = {
  user: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default userReducer;
//state updater

// switch type to determine action
// i.e. like or comment or share

// if we pass in a change, it will change
/// otherwise return current state
