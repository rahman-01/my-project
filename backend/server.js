const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Backend Berhasil Dijalankan!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => { // Tambahkan '0.0.0.0' di sini
    console.log(`Server running on port ${PORT}`);
});