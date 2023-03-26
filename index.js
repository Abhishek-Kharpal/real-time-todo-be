const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const todoRoutes = require('./src/routes/todo');
const app = express();
const port = 3001;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/todos', todoRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
