const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.NODE_ENV === 'production' ? 5001 : 4000;

// Middleware
app.use(cors());
app.use(express.json());

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

// Start server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${port}`);
  console.log(`Server is also accessible on http://localhost:${port}`);
});
