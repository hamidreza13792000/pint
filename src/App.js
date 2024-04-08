import React from "react";
import { useState, useEffect } from "react";
import "./css/pint.css";

function App() {
  /**
   * we will save canvs context in ctx state
   * also we will save paiting status into isPainting state
   *
   * tip: we use hooks to save component state
   */
  let [ctx, setCtx] = useState(null);
  let [isPainting, setIspainting] = useState(false);

  /**
   * get canvas with query and save it in ctx state
   * save it in a useEffect hook with no parameted that will act like mount life cycle in class components
   */
  useEffect(() => {
    let canvas = document.getElementById("canvas");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth - 60;
    setCtx(canvas.getContext("2d"));
  }, []);

  /**
   * this function will change the color of the pen
   * @param color
   */
  const onColorClickHandler = (color) => {
    ctx.strokeStyle = color;
  };

  /**
   * use this method to start painting by setting isPainting = true
   * @param e
   */
  const startPainting = (e) => {
    setIspainting(true);
    paint(e);
  };

  /**
   * onMouseMove handler
   * @param e
   */
  const paint = (e) => {
    if (isPainting) {
      ctx.lineWidth = 6;
      ctx.lineCap = "round";

      let rect = e.target.getBoundingClientRect();

      let mouseX_RelevantToCanvas = e.clientX - rect.left;
      let mouseY_RelevantToCanvas = e.clientY - rect.top;

      ctx.lineTo(mouseX_RelevantToCanvas, mouseY_RelevantToCanvas);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(mouseX_RelevantToCanvas, mouseY_RelevantToCanvas);
    }
  };

  /**
   * use this method to finish painting by setting isPainting = false
   * @param e
   */
  const finishPainting = (e) => {
    setIspainting(false);
    ctx.beginPath();
  };

  return (
    <div className="App">
      <div className="panel-color-picker">
        <h5>Colors:</h5>
        <span
          title="black"
          className="color-item black"
          onClick={() => onColorClickHandler("black")}
        ></span>
        <span
          title="white"
          className="color-item white"
          onClick={() => onColorClickHandler("white")}
        ></span>
        <span
          title="red"
          className="color-item red"
          onClick={() => onColorClickHandler("red")}
        ></span>
        <span
          title="blue"
          className="color-item blue"
          onClick={() => onColorClickHandler("blue")}
        ></span>
        <span
          title="aqua"
          className="color-item aqua"
          onClick={() => onColorClickHandler("aqua")}
        ></span>
        <span
          title="green"
          className="color-item green"
          onClick={() => onColorClickHandler("green")}
        ></span>
      </div>
      <div className="panel-drawing">
        <canvas
          id="canvas"
          onMouseDown={startPainting}
          onMouseUp={finishPainting}
          onMouseMove={paint}
        ></canvas>
      </div>
    </div>
  );
}

export default App;
