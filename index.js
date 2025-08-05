const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Vishesh! CI/CD works! 🚀');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});


