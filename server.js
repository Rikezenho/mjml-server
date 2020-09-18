const app = require('express')();
const bodyParser = require('body-parser');
const PORT = 9000;
const handleParse = require('./api/parse');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/parse', handleParse);

app.listen(PORT, () => {
    console.log(`MJML server listening on ${PORT}...`);
});