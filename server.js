const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 1234;
const session = require('express-session');

mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost:27017/react-node-blog', {
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on('error', (err) => console.log(err));
db.once('open', () => console.log('Connected to the database'));

app.use(express.json());
app.use(
  session({
    secret: 'somevalue',
    unset: 'destroy',
    cookie: { secure: true, expires: 3600, httpOnly: false },
    resave: false,
    saveUninitialized: true,
  }),
);

const usersRouter = require('./routes/user');
app.use('/', usersRouter);

const articlesRouter = require('./routes/article');
app.use('/', articlesRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
