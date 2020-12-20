const router = require("express").Router();
const Library = require("../models/userLibrary");

router.post("/", async (req, res) => {
    try {
        console.log('hey')
        const { id } = req.body;
        const library = await Library.find({ userID: id });
        console.log(library)
        res.json(library);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;