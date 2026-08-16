import { useState } from "react";
import "./App.css"


function App() {
  const [fieldvalue, setfieldvalue] = useState("No Input Data")
  const [status, setstate] = useState("----")
  const [form, setform] = useState({
    name: "",
    email: "",
    password: ""
  });

  function getFieldValue(e) {
    let value = e.target.value;

    setform({
      ...form,
      [e.target.name]: e.target.value,
    });

    setfieldvalue(value);
  }

  function submitform(e) {
    e.preventDefault();
    console.log(form);


    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })
      .then((res) =>
        res.json())
      .then((result) => {
        setstate(result.message)
      })
      .catch((err) => {
        setstate(err.message)
      })
  }
  return (
    <>
      <section id="center">
        <h1>Student Registration</h1>
        <form method="post" onSubmit={submitform}>
          <input type="text"
            name="name"
            placeholder="Enter your name..."
            className="input"
            onChange={getFieldValue} />

          <input type="email"
            name="email"
            placeholder="Enter your email..."
            className="input"
            onChange={getFieldValue} />

          <input type="password"
            name="password"
            placeholder="password"
            className="input"
            onChange={getFieldValue} />

          <input type="submit"
            value="SUBMIT"
            name="submit" />
        </form>
        <h2>{fieldvalue}</h2>
        <h2>{status}</h2>
      </section>
    </>
  )
}

export default App; 