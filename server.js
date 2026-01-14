const express = require('express');
const Datastore = require('@seald-io/nedb');
const path = require('path');

const app = express();
const PORT = 3000;

// DB 路徑
const dbPath = path.join(__dirname, 'db', 'shows.db');
console.log('DB path:', dbPath);

// NeDB
const db = new Datastore({ filename: dbPath, autoload: true });

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));


app.get('/api/shows', (req, res) => {
  db.find({}).sort({ date: 1 }).exec((err, docs) => {
    if (err) return res.status(500).json(err);
    res.json(docs);
  });
});


app.post('/api/shows', (req, res) => {
  const { date, title, description, image } = req.body;

  db.insert({ date, title, description, image, createdAt: new Date() }, (err, newDoc) => {
    if (err) return res.status(500).json(err);
    res.json(newDoc);
  });
});


app.delete('/api/shows/:id', (req, res) => {
  const id = req.params.id;
  db.remove({ _id: id }, {}, (err, numRemoved) => {
    if (err) return res.status(500).json(err);
    if (numRemoved === 0) return res.status(404).json({ error: '找不到該筆資料' });
    res.json({ removed: numRemoved });
  });
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
