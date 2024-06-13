import express from 'express';
import mongoose from 'mongoose';
import db from './src/db/db.js';
import deviceToken from './src/DeviceDetail/deviceToken.js';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:5173'
}));

const usersFilePath = path.resolve('./src/users/user.json');
let users = [];

try {
  const usersData = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));
  users = Array.isArray(usersData) ? usersData : [];
} catch (error) {
  console.error("Error reading users.json:", error);
}

app.post('/', async (req, res) => {
  console.log('Request body:', req.body);
  const { notificationToken, deviceName } = req.body;

  try {
    const existingUser = await deviceToken.findOne({ notificationToken, deviceName });
    if (existingUser) {
      res.status(409).send('User already exists');
    } else {
      const user = new deviceToken({ notificationToken, deviceName });
      await user.save();
      users.push(user);
      res.send('User saved in MongoDB successfully');
    }
  } catch (error) {
    res.status(500).send('Error saving user: ' + error.message);
  }
});

app.get('/', (req, res) => {
  res.send(users);
});

app.listen(5000, () => {
  console.log(`Server is running at port 5000`);
});
