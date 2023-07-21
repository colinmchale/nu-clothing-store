const express = require('express');

//express app
const app = express();
const PORT = process.env.PORT || 3001;

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

app.get('/', (req, res) => {
    res.json({message: 'hello world'});
})

//listen for request
app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
})

