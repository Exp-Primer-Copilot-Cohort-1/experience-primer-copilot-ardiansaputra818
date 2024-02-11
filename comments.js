// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const commentsRouter = require('./routes/comments');

app.use(bodyParser.json());
app.use('/comments', commentsRouter);

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

// Path: routes/comments.js
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const comment = req.body;
  console.log(comment);
  res.status(200).send('Comment is received');
});

module.exports = router;

// Test
// Run the server and use Postman to send a POST request to http://localhost:3000/comments with the following JSON data:
// {
//   "username": "Todd",
//   "comment": "Great post!"
// }
// You should see the following in the console:
// { username: 'Todd', comment: 'Great post!' }
// And you should see the response in Postman:
// Comment is received

//