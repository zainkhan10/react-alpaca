import { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const alpacaForm = useRef();
  useEffect(() => {
    setTimeout(() => {
      window.$(alpacaForm.current).alpaca({
        data: "Mint Chocolate",
        schema: {
          minLength: 3,
          maxLength: 8,
        },
        options: {
          label: "Ice Cream",
          helper: "Please tell us the kind of ice cream you love most!",
          size: 30,
          placeholder: "Enter an ice cream flavor",
        },
      });
    }, 100);
  }, []);
  return (
    <div className="App">
      <div ref={alpacaForm}></div>
    </div>
  );
}

export default App;
