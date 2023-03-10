const express = require("express");
const app = express();
require("dotenv").config();

let dbConnect = require("./dbConnect");
dbConnect.connectMysql();
app.use(express.json());

let userRoutes = require('./routes/userRoutes')
app.use('/api/users', userRoutes)

let postRoutes = require('./routes/postRoutes')
app.use('/api/posts',postRoutes)


app.get("/", (req, res) => {
res.json({ message: "Welcome to my MySQL application." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}.`);
});