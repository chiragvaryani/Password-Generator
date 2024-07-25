/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useCallback, useEffect } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  const pawdgen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) {
      str += "0123456789";
    }
    if (character) {
      str += "!@#$%&*()_+~<>?:";
    }
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, number, character]);

  useEffect(() => {
    pawdgen();
  }, [length, number, character, pawdgen]);

  return (
    <div className="container">
      <div className="semicon">
        <div className="passcon">
          <input type="text" id="pasinp" readOnly value={password} />
          <button id="copy">Copy</button>
        </div>
        <div className="innercontainer">
          <div className="lencontainer">
            <input
              id="lenbar"
              type="range"
              min={6}
              max={25}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label htmlFor="">Length: {length}</label>
          </div>
          <div className="numcont">
            <input
              type="checkbox"
              checked={number}
              onChange={() => setNumber((prev) => !prev)}
            />
            <label htmlFor="">Numbers</label>
          </div>
          <div className="charcont numcont">
            <input
              type="checkbox"
              checked={character}
              onChange={() => setCharacter((prev) => !prev)}
            />
            <label htmlFor="">Character</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
