import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>");

})
app.get("/contact", (req, res) => {
    res.send("<h1>Contact Me</h1>9511891756");
    res.send("");

})
app.post("/register", (req, res) => { res.sendStatus(200); });



app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1>");

})

//() callback just like lambda
app.listen(port, () => {
    console.log("Server RUnning on port " + port);
})