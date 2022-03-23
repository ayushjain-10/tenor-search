// Require Libraries
const express = require('express');
// App Setup
const app = express();
// Middleware
const { engine }  = require('express-handlebars');
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
// Routes
// example URL "http://localhost:3000/?term=hey"
app.get('/', 
  (req, res) => {
    let term = "";
    if (req.query.term) {
      term = req.query.term
    }
    console.log(term);
    res.render('home');
  }
);
// Start Server
app.listen(3000, () => {
  console.log('Gif Search listening on port localhost:3000!');
});

app.get('/greetings/:name', (req, res) => {
    // grab the name from the path provided
    const name = req.params.name;
    // render the greetings view, passing along the name
    res.render('greetings', { name });
  })
