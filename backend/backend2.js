const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 3001;
const mongoURI = 'mongodb+srv://vineelabellamkonda7:vineela%407@cluster0.3shkr4t.mongodb.net/nutrition';

app.use(cors());

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const foodSchema = new mongoose.Schema({
    name:String,
  total_fat: String,
  protein: String,
  cholesterol: String,
  carbohydrate: String,
  calories: String,
  calcium: String,
});

const Food = mongoose.model('items', foodSchema);

// Define the default page size and page number
const defaultPageSize = 10;
const defaultPageNumber = 1;

app.get('/nutrition', async (req, res) => {
  try {
    // Parse query parameters for pagination
    const page = parseInt(req.query.page) || defaultPageNumber;
    const pageSize = parseInt(req.query.pageSize) || defaultPageSize;

    // Calculate the skip value based on the page and pageSize
    const skip = (page - 1) * pageSize;

    // Query the database with pagination
    const foods = await Food.find({})
      .skip(skip)
      .limit(pageSize);

    res.json(foods);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
