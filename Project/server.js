const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://Raja154:l18Mna38Ob5wO9MN@cluster0.jfotb.mongodb.net/User', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (err) => {
  console.error('Database connection error:', err);
});

db.once('open', () => {
  console.log('Database connected successfully');
});

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

app.post('/api/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ username }).exec();
    if (existingUser) {
      res.json({ success: false, message: 'Username already exists. Please choose a different username.' });
    } else {
      const newUser = new User({ username, email, password });
      newUser.save()
        .then(() => res.json({ success: true, message: 'User added!' }))
        .catch((err) => res.status(400).json({ success: false, message: 'Error: ' + err }));
    }
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username }).exec();
    if (!user) {
      res.json({ success: false, message: 'User not found. Please register.' });
    } else {
      if (user.password === password) {
        res.json({ success: true, message: 'Login successful', username: user.username });
      } else {
        res.json({ success: false, message: 'Wrong password. Please try again.' });
      }
    }
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
