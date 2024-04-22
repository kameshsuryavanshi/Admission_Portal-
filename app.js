const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect('mongodb+srv://kamesh:Kk12345@cluster0.ul5e0cz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

// Student model
const studentSchema = new mongoose.Schema({
  fullName: String,
  regNumber: { type: String, unique: true },
  marks10th: Number,
  marks12th: Number,
  degreeName: String,
  collegeName: String,
  yearPassing: Number,
  cgpaPercentage: String,
  specialization: String,
  gateScore: Number,
  workExperience: String,
  sop: String,
  recommendationLetters: String,
  email: { type: String, required: true },
  phone: String,
  address: String
});
const Student = mongoose.model('Student', studentSchema);

app.use(bodyParser.json());
app.use(express.static(__dirname)); // Serve static files from the current directory

app.post('/api/students', async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.json({ success: true });
  } catch (error) {
    console.error('Error saving student data:', error);
    res.status(500).json({ error: 'Error saving student data. Please try again.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
