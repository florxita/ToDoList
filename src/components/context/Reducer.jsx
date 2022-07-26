export const TYPES = {
  ADD: "APP",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
};

export const Reducer = (state = [], action) => {
  switch (action.type) {
    case TYPES.DELETE:
      return state.filter((todo) => todo.id !== action.payload);

    case TYPES.ADD:
      return [...state, action.payload];

    case TYPES.UPDATE:
      const todoEdit = action.payload;
      return state.map((todo) => (todo.id === todoEdit.id ? todoEdit : todo));
    default:
      return state;
  }
};
