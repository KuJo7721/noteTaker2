const express = require('express');
const path = require('path');
let db = require("./db/db.json");
console.log(db);
const { v4: uuidv4 } = require('uuid');

const PORT = process.env.port || 3001;

const app = express();


//adding mIddleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//api routes
app.get('/api/notes',(req, res)=.{
    return res.json(db)
})

//html routes

//nodes page route
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);


//homepage route and wildcard 
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/pages/404.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);