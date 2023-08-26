const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://vineelabellamkonda7:vineela%407@cluster0.3shkr4t.mongodb.net/nutrition");

const foodschema = new mongoose.Schema({
  TranslatedRecipeName: String,
  imageurl:String,
  Cuisine:String
});

const Usermodel = mongoose.model("recipes", foodschema);

app.get('/getData', async (req, res) => {
  const page = parseInt(req.query.page) || 1; // Get the page number from the query parameter or default to page 1
  const perPage = 50; // Number of records per page
  const maxRecords = 500; // Maximum number of records to retrieve

  try {
    const totalCount = await Usermodel.countDocuments({});
    const totalPages = Math.ceil(Math.min(totalCount, maxRecords) / perPage);

    const users = await Usermodel.find({})
      .limit(perPage) // Limit the query to perPage records
      .skip((page - 1) * perPage); // Skip records based on the page number

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
