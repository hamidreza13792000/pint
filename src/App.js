import { useRef, useState } from "react";
function App() {
  const inputElement = useRef("hamid");
  const onClick = () => {
inputElement.current.focus();

};
  return (
   <>
   <input ref={inputElement} type="text" />

<button onClick={onClick}>Focus input</button>
<h1>dd</h1>
      </>
  );
}
export default App;
