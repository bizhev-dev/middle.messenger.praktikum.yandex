const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const path = require('path');

app.use(express.static('dist'));

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })
app.use(express.static('dist'));

app.use('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})
