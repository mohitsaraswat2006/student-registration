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

//------------------------ send data to front-end -----------------------------

app.get("/users", (req, res) => {
    User.find()
        .then((result) => {
            res.send(JSON.stringify(result))
            console.log(result)
        })
        .catch((err) => {
            console.log("error", err)
        })
})


// ================edit records========================

app.put("/users/:id", (req, res) => {
    User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
            runValidators: true
        }
    )
        .then((result) => {
            res.json({
                message: "User updated Successdully",
                user: result
            })
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                message: "Error updating user",
                error: err.message
            })
        })
})

// ======================delete record===========================

app.delete("users/:id",(req,res) =>{
    User.findByIdAndDelete(req.params.id)
    .then((result) =>{
        console.log(req.params.id)
        res.json(
            {
                message : "Record Delete Successfully...."
            }
        )
    })
    .catch((err) =>{
        console.log(err);
        res.status(500).json({
            message : "Error Deleting User",
            error : err.message
        })
    })
})


app.listen(5000, () => {
    console.log("Server Running on http://localhost:5000");
});
