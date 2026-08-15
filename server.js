import express from "express";
import mongoose from "mongoose";
import cors from "cors";

let app = express();

app.use(cors());
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/registration")
    .then(() => {
        console.log("Database Connected.")
    })
    .catch((err) => {
        console.log("Database Error", err)
    })

let Schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

let User = mongoose.model("User", Schema)

app.post("/users", (req, res) => {
    let body = req.body;

    console.log("Recieved data:", body)

    User.create(body)
        .then((user) => {
            console.log("user created:", user)

            res.status(201).json({
                message: "User Registered Successfully.",
                user: user
            })
        })

        .catch((err) => {
            console.log("Error:", err);

            res.status(500).json({
                message: "Failed to register user.",
                error: err.message,
            })
        })
})

app.listen(5000, () => {
    console.log("Server Running on http://localhost:5000");
});
