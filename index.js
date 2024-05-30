const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

const UserRoutes = require('./Routes/v1/User.Routes')


app.use(cors());
app.use(bodyParser.json());

app.use('/api/v1/user',UserRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.all('*', (req, res) => {
    res.send('No Route Found');
})

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})