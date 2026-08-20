
import { useEffect, useState } from "react";
import "./App.css";

function App() {

  const [editId, seteditId] = useState("");
  const [editField, setEditField] = useState("SUBMIT");

  const [fieldvalue, setfieldvalue] = useState("No Input Data");
  const [status, setstate] = useState("----");
  const [getrecords, setrecords] = useState([]);

  const [form, setform] = useState({
    name: "",
    email: "",
    password: ""
  });

  // ==================delete function=================

  function deleteFunction(delete_id) {
    fetch("http://localhost:5000/users/${delete}", {
      method: "DELETE"
    })
      .then((then) => {
        return res.json();
      })
      .then((result) => {
        setstate(result.message);
      })
      .catch((err) => {
        setstate(err.message)
      })
  }


  // ================= INPUT FUNCTION =================

  function getFieldValue(e) {

    let value = e.target.value;

    setform({
      ...form,
      [e.target.name]: value
    });

    setfieldvalue(value);
  }


  // ================= EDIT FUNCTION =================

  function editFunction(edit_value) {

    seteditId(edit_value._id);

    setEditField("UPDATE FORM");

    setform({
      name: edit_value.name,
      email: edit_value.email,
      password: edit_value.password
    });

  }


  // ================= SUBMIT / UPDATE =================

  function submitform(e) {

    e.preventDefault();

    if (editField === "UPDATE FORM") {

      fetch(`http://localhost:5000/users/${editId}`, {

        method: "PUT",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(form)

      })

        .then((res) => res.json())

        .then((result) => {

          setstate(result.message);

        })

        .catch((err) => {

          setstate(err.message);

        });

    }


    else if (editField === "SUBMIT") {

      fetch("http://localhost:5000/users", {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(form)

      })

        .then((res) => res.json())

        .then((result) => {

          setstate(result.message);

        })

        .catch((err) => {

          setstate(err.message);

        });

    }

  }


  // ================= GET RECORDS =================

  useEffect(() => {

    fetch("http://localhost:5000/users")

      .then((res) => res.json())

      .then((result) => {

        setrecords(result);

      })

      .catch((err) => {

        console.log(err);

      });

  }, []);


  return (
    <>

      <section id="center">

        <h1>Student Registration</h1>


        <form method="post" onSubmit={submitform}>

          <input
            type="text"
            name="name"
            placeholder="Enter your name..."
            className="input"
            onChange={getFieldValue}
            value={form.name}
            required
          />


          <input
            type="email"
            name="email"
            placeholder="Enter your email..."
            className="input"
            onChange={getFieldValue}
            value={form.email}
            required
          />


          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input"
            onChange={getFieldValue}
            value={form.password}
            required
          />


          <input
            type="submit"
            value={editField}
            name="submit"
          />

        </form>


        <h2>{fieldvalue}</h2>

        <h2>{status}</h2>


        {/* ================= TABLE ================= */}

        <table>

          <thead>

            <tr>

              <th>User Id</th>

              <th>Name</th>

              <th>Email</th>

              <th>Edit Data</th>

              <th>Delete Data</th>

            </tr>

          </thead>


          <tbody>

            {getrecords.map((value) => (

              <tr key={value._id}>

                <td>{value._id}</td>

                <td>{value.name}</td>

                <td>{value.email}</td>


                <td>

                  <button
                    onClick={() => editFunction(value)}
                  >
                    Edit
                  </button>

                </td>


                <td>

                  <button
                    onClick={() => deleteFunction(value._id)}
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </section>

    </>
  );
}

export default App;