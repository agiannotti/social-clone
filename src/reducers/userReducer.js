const INITIAL_STATE = {
  user: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
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
