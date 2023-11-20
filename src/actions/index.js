export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const MEMORY_SAVE = "MEMORY_SAVE";
export const MEMORY_RECALL = "MEMORY_RECALL";
export const MEMORY_CLEAR = "MEMORY_CLEAR";

export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};

export const clearDisplay = () => {
  return { type: CLEAR_DISPLAY, payload: 0 };
};

export const changeOperation = (operator) => ({
  type: CHANGE_OPERATION,
  payload: operator,
});

export const memorySave = (total) => ({
  type: MEMORY_SAVE,
  payload: total,
});

export const memoryRecall = (memory) => ({
  type: MEMORY_RECALL,
  payload: memory,
});

export const memoryClear = () => ({
  type: MEMORY_CLEAR,
  payload: 0,
});
