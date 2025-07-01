// Ortam değişkenlerini yükle
require('dotenv').config();

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();

// MongoDB Atlas bağlantısı (güncel - eski opsiyonlar kaldırıldı)
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ MongoDB Atlas bağlantısı başarılı');
  })
  .catch((err) => {
    console.error('❌ MongoDB bağlantı hatası:', err);
  });

// Middleware ayarları
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Routes
const bookRoutes = require('./routes/bookRoutes');
app.use('/books', bookRoutes);

// Ana sayfa yönlendirmesi
app.get('/', (req, res) => {
  res.redirect('/books');
});

// Sunucuyu başlat
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Sunucu http://localhost:${PORT} adresinde çalışıyor`);
});
