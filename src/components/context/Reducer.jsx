export const TYPES = {
  ADD: "APP",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
};

export const Reducer = (state, action) => {
  switch (action.type) {
    case TYPES.DELETE:
      return state.filter((item) => item.id !== action.payload);

    case TYPES.ADD:
      return [...state, action.payload];

    case TYPES.UPDATE:
      const itemEdit = action.payload;
      return state.map((item) => (item.id === itemEdit.id ? itemEdit : item));
    default:
      return state;
  }
};
