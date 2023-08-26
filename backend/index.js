const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://vineelabellamkonda7:vineela%407@cluster0.3shkr4t.mongodb.net/nutrition");

const foodschema = new mongoose.Schema({
  TranslatedRecipeName: String,
  imageurl: String,
  Cuisine: String
});

const Usermodel = mongoose.model("recipes", foodschema);

app.get('/getData', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const perPage = 50;
  const maxRecords = 500;
  const searchQuery = req.query.search || ''; // Get the search query from the query parameter
  const selectedOption = req.query.option || 'TranslatedRecipeName'; // Get the selected option from the query parameter

  try {
    const query = {};
    if (searchQuery) {
      query[selectedOption] = { $regex: searchQuery, $options: 'i' }; // Use selected option in the query
    }

    const totalCount = await Usermodel.countDocuments(query);
    const totalPages = Math.ceil(Math.min(totalCount, maxRecords) / perPage);

    const users = await Usermodel.find(query)
      .limit(perPage)
      .skip((page - 1) * perPage);

    res.json({
      users,
      totalPages,
      currentPage: page
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});