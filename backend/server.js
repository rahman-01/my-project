const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Backend Berhasil Dijalankan!');
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});