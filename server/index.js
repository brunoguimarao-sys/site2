const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const multer = require('./multer');
const db = require('./database');

const app = express();
const port = process.env.NODE_ENV === 'production' ? 5001 : 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, '../public/uploads')));

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.join(__dirname, '../public/uploads');
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Append extension
  }
});

const upload = multer({ storage: storage });

// Routes
app.get('/', (req, res) => {
  res.send('Hello World from the Overnit backend!');
});

// New status endpoint
app.get('/status', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.post('/api/contact', (req, res) => {
  const { name, email, phone, project, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).send({ message: 'Nome, email e mensagem são obrigatórios.' });
  }

  const contactData = `
----------------------------------------
Data: ${new Date().toLocaleString()}
Nome: ${name}
Email: ${email}
Telefone: ${phone || 'Não informado'}
Projeto: ${project || 'Não informado'}
Mensagem: ${message}
----------------------------------------
`;

  const filePath = path.join(__dirname, 'contacts.txt');

  fs.appendFile(filePath, contactData, (err) => {
    if (err) {
      console.error('Erro ao salvar o contato:', err);
      return res.status(500).send({ message: 'Erro interno ao salvar o contato.' });
    }
    res.status(200).send({ message: 'Mensagem recebida com sucesso!' });
  });
});

// --- Blog API Endpoints ---

// Get all posts
app.get('/api/posts', (req, res) => {
  db.all("SELECT * FROM posts ORDER BY createdAt DESC", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ posts: rows });
  });
});

// Get a single post
app.get('/api/posts/:id', (req, res) => {
  const { id } = req.params;
  db.get("SELECT * FROM posts WHERE id = ?", [id], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ post: row });
  });
});

// Create a new post
app.post('/api/posts', (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required.' });
  }
  db.run("INSERT INTO posts (title, content) VALUES (?, ?)", [title, content], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ id: this.lastID });
  });
});

// Update a post
app.put('/api/posts/:id', (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required.' });
  }
  db.run("UPDATE posts SET title = ?, content = ? WHERE id = ?", [title, content, id], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ changes: this.changes });
  });
});

// Delete a post
app.delete('/api/posts/:id', (req, res) => {
  const { id } = req.params;
  db.run("DELETE FROM posts WHERE id = ?", [id], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ changes: this.changes });
  });
});

// --- Blog API Endpoints ---

// Get all posts
app.get('/api/posts', (req, res) => {
  db.all("SELECT * FROM posts ORDER BY createdAt DESC", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ posts: rows });
  });
});

// Get a single post
app.get('/api/posts/:id', (req, res) => {
  const { id } = req.params;
  db.get("SELECT * FROM posts WHERE id = ?", [id], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ post: row });
  });
});

// Create a new post
app.post('/api/posts', (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required.' });
  }
  db.run("INSERT INTO posts (title, content) VALUES (?, ?)", [title, content], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ id: this.lastID });
  });
});

// Update a post
app.put('/api/posts/:id', (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required.' });
  }
  db.run("UPDATE posts SET title = ?, content = ? WHERE id = ?", [title, content, id], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ changes: this.changes });
  });
});

// Delete a post
app.delete('/api/posts/:id', (req, res) => {
  const { id } = req.params;
  db.run("DELETE FROM posts WHERE id = ?", [id], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ changes: this.changes });
  });
});

// --- Image API Endpoints ---

// Upload an image
app.post('/api/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  const { filename, path: filePath } = req.file;
  const relativePath = path.join('/uploads', filename).replace(/\\/g, '/');
  db.run("INSERT INTO images (filename, path) VALUES (?, ?)", [filename, relativePath], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ id: this.lastID, path: relativePath });
  });
});

// Get all images
app.get('/api/images', (req, res) => {
  db.all("SELECT * FROM images ORDER BY createdAt DESC", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ images: rows });
  });
});


// Start server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${port}`);
  console.log(`Server is also accessible on http://localhost:${port}`);
});