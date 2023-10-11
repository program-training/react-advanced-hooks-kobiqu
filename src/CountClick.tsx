import { useState } from "react";

export function CountClick() {
  const [blue_count, setBlueCount] = useState(0);
  const [Red_count, setRedCount] = useState(0);
  return (
    <div className="buttons">
      <button
        style={{ background: "blue", width: "40px", height: "50px" }}
        onClick={() => setBlueCount(blue_count + 1)}
      ></button>
      <br />
      <br />
      this button is pressed :{blue_count} times
      <br />
      <br />
      <button
        style={{
          background: "green",
          width: "40px",
          height: "50px",
        }}
        onClick={() => setRedCount(Red_count + 1)}
      ></button>
      <br />
      this button is pressed :{Red_count} times
    </div>
  );
}
