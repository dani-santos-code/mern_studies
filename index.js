const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ bye: 'buddy' });
});

const PORT = process.env.PORT || 5000
// only works in production
// the or will say the default is 5000
// 5000 will be in development

app.listen(PORT);
