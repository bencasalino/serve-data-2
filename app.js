const express = require('express');

const cors = require('cors');



const app = express();

app.use(cors());


var instructors = [{
    id: 1,
    fullName: "Kyle Coberly",
    title: "Lead Instructor",
    numberOfDogs: 0
}, {
    id: 2,
    fullName: "Danny Fritz",
    title: "Lead Instructor",
    numberOfDogs: 0
}, {
    id: 3,
    fullName: "CJ Reynolds",
    title: "Lead Instructor",
    numberOfDogs: 0
}, {
    id: 4,
    fullName: "Brooks Patton",
    Title: "Lead Instructor",
    numberOfDogs: 0
}, {
    id: 5,
    fullName: "Roberto Ortega",
    title: "Lead Instructor",
    numberOfDogs: 1
}, {
    id: 6,
    fullName: "Chad Drummond",
    title: "Lead Instructor",
    numberOfDogs: 0
}, {
    id: 7,
    fullName: "Kim Schlesinger",
    title: "Instructor",
    numberOfDogs: 0
}, {
    id: 8,
    fullName: "Peter Ostiguy",
    title: "Associate Instructor",
    numberOfDogs: 1
}, {
    id: 9,
    fullName: "Cass Torske",
    title: "Resident",
    numberOfDogs: 1
}, {
    id: 10,
    fullName: "Matt Winzer",
    title: "Resident",
    numberOfDogs: 2
}, {
    id: 11,
    fullName: "Aaron Goodman",
    title: "Resident",
    numberOfDogs: 0
}, {
    id: 12,
    fullName: "Michelle Bergquist",
    title: "Resident",
    numberOfDogs: 1
}]


// return all
app.get('/', function (request, response) {
    response.json(instructors);
});

function findById(data, id){
    for (let i = 0; i < data.length; i++){
        if (data[i].id == id){
            return data[i];
        }
    }
    return null;
}

app.get("/:id", function (request, response) {
    var record = findById(instructors, request.params.id);
    if (!record){
        response.status(404)
        response.json({
            error: {
            message: "No record found!"
            }
        });
    }

    response.json({instructors: record});
});



// app.get('/', (req, res) => res.send('Hello World!'))
//
// app.listen(3000, () => console.log('Example app listening on port 3000!'))


app.listen(process.env.PORT || 3000);
