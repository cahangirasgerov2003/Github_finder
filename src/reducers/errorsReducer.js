const ErrorsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ERROR":
      return {
        mes: action.mes,
        type: action.typeErr,
      };
    case "REMOVE_ERROR":
      return null;
    default:
      return state;
  }
};

export default ErrorsReducer;
