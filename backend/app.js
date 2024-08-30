const express = require("express"); // Corrected typo from 'expores' to 'express'
const mongoose= require("mongoose");
const app = express();  // Corrected typo from 'expores' to 'express'
const port = 3000;
const cors = require("cors");

const categoryRoutes= require("./routes/category");
const brandRoutes= require("./routes/brand");
const productRoutes= require("./routes/product");




app.use(cors());
app.use(express.json());  // Corrected typo from 'expores' to 'express'
app.get("/", (req, res) => {
    res.send("server running");
});

app.use("/category",categoryRoutes);
app.use("/brand", brandRoutes);
app.use("/product",productRoutes);

async function connectDb() {
   await mongoose.connect("mongodb://localhost:27017",{
dbName:"e-comm-store-db"
   });
    console.log("mongodb connected");
    
}
connectDb().catch((err)=>{
    console.error(err);
})

app.listen(port, () => {
    console.log("server running on port", port);
});