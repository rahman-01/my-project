const express = require('express');
const router = express.Router();

router.get('/status', (req, res) => {
  res.json({
    status: 'Success',
    message: 'Koneksi ke API berhasil melalui Nginx!',
    timestamp: new Date()
  });
});

module.exports = router;