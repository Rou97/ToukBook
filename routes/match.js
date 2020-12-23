const router = require("express").Router();
const Library = require("../models/userLibrary");
const User = require("../models/userModel");

router.post("/getmatches", async (req, res) => {
    try {
        const { id } = req.body;
        const library = await Library.find({ userID: id, bookMood: false });
        let listOfMatches = []
        let matchesProcessed = 0;

        library.forEach(async (element) => {
            const match = await Library.find({ bookID: element.bookID, bookMood: true, provincia: element.provincia })
            listOfMatches.push(...match)
            //console.log(listOfMatches);
            matchesProcessed++;
            if (matchesProcessed === library.length) {
                res.json(listOfMatches);
            }
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post("/getuser", async (req, res) => {
    try {
        const { id } = req.body;
        const user = await User.findOne({ _id: id });
        res.json(user);
        // let listOfMatches = []
        // let matchesProcessed = 0;

        // library.forEach(async (element) => {
        //     const match = await Library.find({ bookID: element.bookID, bookMood: true, provincia: element.provincia })
        //     listOfMatches.push(...match)
        //     //console.log(listOfMatches);
        //     matchesProcessed++;
        //     if (matchesProcessed === library.length) {
        //         res.json(listOfMatches);
        //     }
        // });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


module.exports = router;