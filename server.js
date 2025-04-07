const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const search = require("./utils/search.js");
const choosy = require("./utils/choosy.js");
const download = require("./utils/download.js");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

// Serve a success HTML file for the root route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "success.html"));
});

app.post("/search", async (req, res) => {
    try {
        const { query } = req.body;
        const results = await search(query);
        res.json(results);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.post("/choosy", async (req, res) => {
    try {
        const { link } = req.body;
        const results = await choosy(link);
        res.json(results);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.post("/download", async (req, res) => {
    try {
        const { link } = req.body;
        const result = await download(link);
        res.json({ downloadLink: result });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
