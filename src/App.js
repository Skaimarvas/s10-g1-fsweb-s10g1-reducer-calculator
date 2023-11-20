import React, { memo, useReducer } from "react";
import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import reducer from "./reducers";
import { initialState } from "./reducers";
import { applyNumber } from "./actions";
import { changeOperation } from "./actions";
import { clearDisplay } from "./actions";
import { memorySave } from "./actions";
import { memoryRecall } from "./actions";
import { memoryClear } from "./actions";

function App() {
  const [calculate, dispatchCalculate] = useReducer(reducer, initialState);

  const eventHandler = (num) => {
    dispatchCalculate(applyNumber(num));
  };
  console.log("CALCULATE TOTAL", calculate.total);
  console.log("MEMORY RECALL", calculate);
  const operateHandler = (e) => {
    dispatchCalculate(changeOperation(e.target.value));
  };

  const clearHandler = (e) => {
    dispatchCalculate(clearDisplay());
  };

  const addMemorySave = () => dispatchCalculate(memorySave(calculate.total));
  const addMemoryRecall = () =>
    dispatchCalculate(memoryRecall(calculate.memory));
  const addMemoryClear = () => dispatchCalculate(memoryClear());

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={calculate.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {calculate.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {calculate.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={() => addMemorySave()} />
              <CalcButton value={"MR"} onClick={() => addMemoryRecall()} />
              <CalcButton value={"MC"} onClick={() => addMemoryClear()} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => eventHandler(1)} />
              <CalcButton value={2} onClick={() => eventHandler(2)} />
              <CalcButton value={3} onClick={() => eventHandler(3)} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => eventHandler(4)} />
              <CalcButton value={5} onClick={() => eventHandler(5)} />
              <CalcButton value={6} onClick={() => eventHandler(6)} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => eventHandler(7)} />
              <CalcButton value={8} onClick={() => eventHandler(8)} />
              <CalcButton value={9} onClick={() => eventHandler(9)} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={operateHandler} />
              <CalcButton value={"*"} onClick={operateHandler} />
              <CalcButton value={"-"} onClick={operateHandler} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={clearHandler} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
