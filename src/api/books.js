const express = require('express');
const router = express.Router();
const matter = require('gray-matter');
const path = require('path');

router.get('/:bookName', (req, res) => {
  const folderName = path.join(__dirname, '../assets/');
  const filename = folderName + req.params.bookName + '.md';
  if (filename) {
    const file = matter.read(filename);
    res.json({ content: file.content, data: file.data });
  } else {
    res.json({ content: 'Not Found' });
  }
});

module.exports = router;
