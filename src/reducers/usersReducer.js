const UserReducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_RESULT":
      return {
        ...state,
        users: [],
      };
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "ADD_USERS":
      return {
        ...state,
        users: action.users,
        loading: false,
      };
    default:
      return state;
  }
};

export default UserReducer;
