import mongoose from 'mongoose';

// User Schema
const tokenSchema = new mongoose.Schema({
  notificationToken: {
    type: String,
    required: true,
  },
  deviceName: {
    type: String,
    required: true,
  }
});

const Token = mongoose.model('Token', tokenSchema);

export default Token;
