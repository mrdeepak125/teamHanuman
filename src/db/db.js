import mongoose from 'mongoose';

const url = "mongodb://localhost:27017/Token";

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Database connected successfully");
});

db.on("error", () => {
  console.log("Database connection error");
});

db.on("disconnected", () => {
  console.log("Database disconnected successfully");
});

export default db;
