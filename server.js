const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("client/build"));
app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html')
});
app.listen(PORT, err => {
    if (err) {
        throw err;
    }
    console.log(`Express server listening on ${PORT}`);
})