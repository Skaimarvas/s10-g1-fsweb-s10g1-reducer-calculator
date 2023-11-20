import {
  ADD_ONE,
  APPLY_NUMBER,
  CHANGE_OPERATION,
  CLEAR_DISPLAY,
  MEMORY_SAVE,
  MEMORY_RECALL,
  MEMORY_CLEAR,
} from "./../actions";

export const initialState = {
  total: 0,
  operation: "+",
  memory: 0,
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "*":
      return num1 * num2;
    case "-":
      return num1 - num2;
    default:
      return;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ONE:
      return {
        ...state,
        total: state.total + 1,
      };

    case APPLY_NUMBER:
      return {
        ...state,
        total: calculateResult(state.total, action.payload, state.operation),
      };

    case CHANGE_OPERATION:
      return {
        ...state,
        operation: action.payload,
      };
    case CLEAR_DISPLAY:
      console.log("CLEAR DISPLAY");
      return {
        ...state,
        total: action.payload,
      };

    case MEMORY_SAVE:
      console.log("MEMORY SAVE");
      return {
        ...state,
        memory: action.payload,
      };

    case MEMORY_RECALL:
      console.log("MEMORY RECALL", state.memory);
      return {
        ...state,
        total: state.total + action.payload,
      };
    case MEMORY_CLEAR:
      console.log("MEMORY CLEAR");
      return {
        ...state,
        memory: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
