const express = require('express');
const app = express();
require("./db/conn");
const path = require('path');
const hbs = require('hbs');
const { registerPartials } = require('hbs');
const User = require('./models/contactInfo');
const staticpath = path.join(__dirname, "../public")
const templatepath = path.join(__dirname, "../templates/views")
const partialspath = path.join(__dirname, "../templates/partials")

const port = process.env.PORT || 3000;


app.use(express.static(staticpath)); //to include static website
app.set("view engine", "hbs");
app.set("views", templatepath);
hbs.registerPartials(partialspath)
// app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.render("index");
})

app.post("/contact", async (req, res) => {

    try {
        const userData = new User(req.body);
        await userData.save();
        res.status(201).render("index");
    } catch (error) {
        res.status(500).send(error);
    }
})







app.listen(port, () => {
    console.log(`listeining to ${port}`);
})
