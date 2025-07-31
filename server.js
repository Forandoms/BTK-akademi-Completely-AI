
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// React uygulamasının build klasörünü sun
app.use(express.static(path.join(__dirname, 'build')));

// Tüm istekleri React uygulamasına yönlendir
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor...`);
});
