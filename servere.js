const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'bookstore';
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  if (err) {
    console.log('Error connecting to MongoDB:', err);
    return;
  }

  const db = client.db(dbName);
  const collection = db.collection('products');

  app.get('/products', (req, res) => {
    collection.find({}).toArray((err, products) => {
      if (err) {
        console.log('Error querying products:', err);
        return res.status(500).json({ error: 'Failed to query products' });
      }
      return res.json(products);
    });
  });

  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
});
