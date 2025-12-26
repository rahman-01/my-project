const express = require('express');
const app = express();
const apiRoutes = require('./routes/api'); // Ambil route yang baru dibuat

app.use(express.json());

// Gunakan route dengan prefix /api
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.send('Aplikasi Berjalan!');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server jalan di port ${PORT}`);
});