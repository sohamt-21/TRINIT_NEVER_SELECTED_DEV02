const express = require('express');
const app = express();
const fs=require('fs');
const PORT = 9000;
const CORS = require('cors');
const mongoose = require('mongoose');
const BodyParser = require('body-parser');
const WebsiteUserDB = require('./Models/WebsiteUsers');
const NewTutorDB = require('./Models/NewTutor');
const db=require('../Filter/src/db/Db');

app.use(express.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.use(CORS(({
    origin: ["http://localhost:5173"],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
})));

mongoose.connect("mongodb://0.0.0.0:27017/ConnectUsers").then(() => {
    console.log("Connected To MongoDBCompass");
}).catch((err) => {
    console.log(`${err} is Occured!!`);
})


app.get('/', (req, res) => {
    res.send("<strong>Server is On Baby!!!</strong>");
});

app.post('/RegisterUser', async (req, res) => {
    const WebsiteUser = req.body.User;

    const Newuser = new WebsiteUserDB({
        Name: WebsiteUser.Name,
        Email: WebsiteUser.Email,
        Role: WebsiteUser.Role
    })

    Newuser.save().then(() => {
        console.log(`New User Has Been Added`)
    }).catch((err) => {
        console.log(`Error While Saving UserResponses : ${err}`)
    })

    res.send("ok");
});

app.post("/CheckRole", async (req, res) => {
    const UserEmail = req.body.Email;

    try {
        const OneUser = await WebsiteUserDB.find({ Email: UserEmail });
        if (OneUser) {
            res.send(OneUser[0].Role);
        } else {
            res.send("");
        }
    } catch {
        res.send("");
    }

})

app.post('/AddTutorinList', async (req, res) => {

    const NewTutor = req.body.Newtutor;

    console.log(NewTutor);

    const NewTutorToCreate = new NewTutorDB({
        Name: NewTutor.Name,
        Email: NewTutor.Email,
        Image: NewTutor.Image,
        Language: NewTutor.Language,
        Experience: NewTutor.Experience,
        Pricing: NewTutor.Pricing
    })

    NewTutorToCreate.save().then(() => {
        console.log(`New Tutors Has Been Added`)
    }).catch((err) => {
        console.log(`Error While Saving UserResponses : ${err}`)
    })

    res.send("Added");

})

app.post("/GetListofTutors", async (req, res) => {
    const alltutors = await NewTutorDB.find({});
    res.send(alltutors);
});


app.post("/MakeManipulation", async (req, res) => {
    db.push(req.body.Data);
    fs.writeFileSync('../Filter/src/db/db.js', `module.exports = ${JSON.stringify(db, null, 2)};`);
})


app.listen(PORT, () => {
    console.log(`Server Started on ${PORT}`);
})