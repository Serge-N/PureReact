import { StrictMode } from "react";
import ReactDOM from "react-dom";

function IconButton() {
  return (
    <button>
      <span>Sonme Icon</span>
    </button>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <IconButton>
      <em>Do it Now!</em>
    </IconButton>
  </StrictMode>,
  rootElement
);
