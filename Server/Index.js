const path = require("path");
const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
    res.json({message: "Hola desde el servidor!"});
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });