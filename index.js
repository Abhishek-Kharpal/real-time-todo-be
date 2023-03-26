const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const todoRoutes = require('./src/routes/todo');
const app = express();
const port = 3001;
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  },
});

io.on(
    'connection', (socket)=>{
      console.log('user connected');
      socket.on('disconnect', () => {
        console.log('user disconnected');
      });
    },
);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/todos', todoRoutes);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
const socketIoObject = io;
module.exports.ioObject = socketIoObject;

