const express = require('express');
const bodyParser = require('body-parser');
const {randomBytes} = require('crypto');

const app = express();
app.use(bodyParser.json());
const COMMENTS = {}

app.get('/posts/:id/comments', (req, res) => {
    return res.send(COMMENTS[req.params.id] || []);
})
app.post('/posts/:id/comments', (req, res) => {
    const {content} = req.body;
    const commentId = randomBytes(4).toString('hex');
    const comments = COMMENTS[req.params.id] || [];
    comments.push({
        commentId,
        content
    })
    COMMENTS[req.params.id] = comments;
    return res.status(201).send(comments[comments.length - 1]);
})

app.listen(4001, () => {
    console.log('listening on port 4001');
})