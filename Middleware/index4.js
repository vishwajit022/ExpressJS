import bodyParser from "body-parser";
import express from "express";
//2
import { dirname } from "path";
import { fileURLToPath } from "url";



const __dirname = dirname(fileURLToPath(
    import.meta.url));

const app = express();
const port = 3000;
var bandName = "";

//3  We must ensure that we must allow body parser before the function
app.use(bodyParser.urlencoded({ extended: true }));


function bandNameGenerator(req, res, next) {
    console.log(req.body);
    bandName = req.body["street"] + req.body["pet"];
    next();
}
app.use(bandNameGenerator);



//2
app.get("/", (req, res) => { res.sendFile(__dirname + "/public/index.html"); })

//4

app.post("/submit", (req, res) => {
    res.send('<h1>Your Band Name:</h1>' + bandName);
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});