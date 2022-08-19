const express = require('express');
const bodyParser = require('body-parser');
const {randomBytes} = require('crypto');

const app = express();
app.use(bodyParser.json());
const POSTS = {}

app.get('/posts', (req, res) => {
    return res.send(POSTS);
})
app.post('/posts', (req, res) => {
    const {title} = req.body;
    const id = randomBytes(4).toString('hex');
    POSTS[id] = {
        id,
        title
    }
    return res.send(POSTS[id]);
})

app.listen(4000, () => {
    console.log('listening on port 4000');
})