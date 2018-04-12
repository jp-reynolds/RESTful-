// GET all flavors-  "/flavors"

// GET all flavors by id- "/flavors/:id"

// GET all categories- "/categories"

// GET a category by id- "/categories/:id"

// GET a all categories for a flavor- "/flavors/:id/categories"


const express = require('express'); 
const app = express();


//creating a variable that contains an array objects
const standups = [
	{id: 1, name: "George Carlin", videoURL:"https://www.youtube.com/watch?v=vuEQixrBKCc"},
	{id: 2, name: "Seth Rogan", videoURL:"https://www.youtube.com/watch?v=O-aZogWeiyU"},
	{id: 3, name: "Jim Carrey", videoURL:"https://www.youtube.com/watch?v=KQHsVPD5Ans"}
];

// :id is the key and the value is the actual url from the user '/#'
app.get("/standups/:id", (request, response) => {
	let id = request.params.id; 
	let standup = standups[id - 1]
	// let standupsJSON = JSON.stringify(standups);
	response.send(standup);

	console.log(request.params)
	// console.log(request.query)
})

// app.get('/', (request, response) => {
//     response.send('Here is all your information');
// });

// app.get('/videos', (request, response) => {
//     response.send('All videos');
// });

// app.get('/videos/:id', (request, response) => {
//     response.send('video by id');
// });

// app.get('/comedians', (request, response) => {
//     response.send({
//     	comedians: ["Seth Rogan", "George Carlin"]
//     });
// });

// app.get('/comedians/:id/videos', (request, response) => {
//     response.send('Comedian by ID and all their videos');
// });

// app.get('/comedians/:id/videos/:id', (request, response) => {
//     response.send('Comedian by ID and a video by ID');
// });



app.listen(3000, () => {
    console.log("Listening on port 3000");
});

//MVC - MODEL VIEW CONTROLLER
//model - refers to the data objects being used

//view - the view is the presentation layer, what the user is going to see

//controller - makes decisions based on the request and then controls what happens in response
//

// request.body?

//what are EJS files




//git ignore file
//exclude your nodemodules from your github repo!!!!
//add .gitignore file in your project
//in that file add 'node_modules' and 'DS_Store'

