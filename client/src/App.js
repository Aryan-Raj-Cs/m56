import React, { useState } from "react";
// import Cards from "react-credit-cards";
import "./App.css";
// import "react-credit-cards/es/styles-compiled.css";

function App() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");
  const handle = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/card", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      // body: JSON.stringify({
      //   name,
      //   number,
      //   expiry,
      //   cvc,
      // }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          console.log(data);
        } else {
          console.log(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // fetch("http://localhost:5000/hard", {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    // })
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((result) => {
    //     console.log(result);
    //   });
  };

  return (
    <div className="App">
      {/* <Cards
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focus}
      
      /> */}
      <h4>PAYMENT DETAILS</h4>
      <br />
      <form onSubmit={handle}>
        <input
          type="text"
          name="number"
          placeholder="Card Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          // onFocus={(e) => setFocus(e.target.name)}
        />
        <br />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          // onFocus={(e) => setFocus(e.target.name)}
        />
        <br />
        <input
          type="text"
          name="expiry"
          placeholder="MM/YY Expiry"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          // onFocus={(e) => setFocus(e.target.name)}
        />
        <br />
        <input
          type="text"
          name="cvc"
          placeholder="CVC"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          // onFocus={(e) => setFocus(e.target.name)}
        />
        <br />
        {/* <input type="submit" value="Submit" /> */}
        <button type="submit" value="Submit">
          Confirm Payment
        </button>
      </form>
    </div>
  );
}

export default App;
