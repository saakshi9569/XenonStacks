import express from "express";
import authRoutes from "./Routes/authRoutes.js"
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
const app = express(); // creting the server
// import { addition, printPDF } from "./Controllers/ApiReq.js";     // Controllers 

const PORT = 8000; // defining PORT
app.use(express.static("public")); // Serving the static files
app.use(express.json());           //Middlewares 
app.use(cors());
dotenv.config()
connectDB();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// app.post("/api/v1/add", addition);                //API Endpoints 
// app.get("/api/v1/printPDF", printPDF);

app.use("/api/v1/auth",authRoutes)


app.listen(PORT, () => {
  // Listening to the PORT
  console.log("Server is Listening on the Port ", PORT);
});