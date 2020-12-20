const router = require("express").Router();
const Library = require("../models/userLibrary");

router.post("/getlibrary", async (req, res) => {
    try {
        const { id } = req.body;
        const library = await Library.find({ userID: id });
        res.json(library);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post("/moodstate", async (req, res) => {
    try {
        const { userID, bookID } = req.body
        const library = await Library.findOne({ userID: userID, bookID: bookID });
        res.json(library);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post("/changemoodstate", async (req, res) => {
    try {
        const { userID, bookID, mood } = req.body
        console.log('aaa')
        const library = await Library.findOneAndUpdate({ userID: userID, bookID: bookID }, { bookMood: !mood });
        res.json(!mood);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;