const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config();
const shelf_controller = require('./controllers/shelf_controller');
const bin_controller = require('./controllers/bin_controller');

const app = express();
app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING)
.then(db=>{
    console.log('1')
    app.set('db', db)
});

app.get('/api/shelf', shelf_controller.read);
app.get('/api/bins/:id', bin_controller.getAll);
app.get('/api/bin/:id', bin_controller.getOne);
app.put('/api/bin/:id', bin_controller.update);
app.post('/api/bin/:id', bin_controller.update);
app.delete('/api/bin/:id', bin_controller.delete);

const port = process.env.PORT || 3005;

app.listen(port, ()=>{
    console.log('listening on port', port)
})



