/* eslint-disable no-eval */
import "./App.css";
import { useState } from "react";
import "./components/Screen.css";
import "./components/Body.css";
import RotateLeftOutlinedIcon from "@material-ui/icons/RotateLeftOutlined";
import IconButton from "@material-ui/core/IconButton";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["+", "*", "%", "-", ".", "/"];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
      console.log(result);
    }
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const deleteLast = () => {
    if (calc == "") {
      return;
    } else {
      const value = calc.slice(0, -1);

      setCalc(value);
    }
  };

  const clearUp = () => {
    if (calc == "") {
      return;
    } else {
      const value = "";

      setCalc(value);
    }
  };

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }

    return digits;
  };

  return (
    <div className="App">
      <div className="Screen">
        <div className="resetbtn">
          <a href={"/"}>
            <IconButton>
              <RotateLeftOutlinedIcon />
            </IconButton>
          </a>
        </div>
        <div className="inner_screen">
          <div className="small_text">{result}</div>
          <div className="big_text">{calc.length > 19 ? result : calc}</div>
        </div>
      </div>
      <div className="Body">
        <div className="key_container">
          <button onClick={clearUp} className="bolder AC">
            AC
          </button>
          <button
            data-action="add"
            className="operator bolder"
            onClick={() => updateCalc("+")}
          >
            +
          </button>
          <button
            data-action="subtract"
            className="operator bolder"
            onClick={() => updateCalc("-")}
          >
            -
          </button>
          <button
            data-action="multiply"
            className="operator bolder"
            onClick={() => updateCalc("*")}
          >
            *
          </button>
          <button onClick={() => updateCalc("7")}>7</button>
          <button onClick={() => updateCalc("8")}>8</button>
          <button onClick={() => updateCalc("9")}>9</button>
          <button
            data-action="divide"
            className="bolder"
            onClick={() => updateCalc("/")}
          >
            /
          </button>
          <button onClick={() => updateCalc("4")}>4</button>
          <button onClick={() => updateCalc("5")}>5</button>
          <button onClick={() => updateCalc("6")}>6</button>
          <button
            data-action="percent"
            className="operator bolder"
            onClick={() => updateCalc("%")}
          >
            %
          </button>
          <button onClick={() => updateCalc("1")}>1</button>
          <button onClick={() => updateCalc("2")}>2</button>
          <button onClick={() => updateCalc("3")}>3</button>
          <button onClick={deleteLast} className="bolder">
            DEL
          </button>
          <button className="operator bolder" onClick={() => updateCalc(".")}>
            .
          </button>
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={calculate} className="span-two operator">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
