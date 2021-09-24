const app = require('./app');
const port = 3001;

//Code to create the server
const listening = () => console.log(`App listening on port ${port}!`);
app.listen(port, listening);
