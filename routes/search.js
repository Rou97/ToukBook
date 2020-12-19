const router = require("express").Router();
const Library = require("../models/userLibrary");
// const User = require("../models/userModel");

router.post("/addBook", async (req, res) => {
    try {
        async function addToLibrary(idUser, idBook, title, thumbnail) {
            let newBookInLibrary = {
                userID: idUser,
                bookID: idBook,
                bookMood: true,
                title,
                thumbnail
            }
            let saveInLibrary = await Library.create(newBookInLibrary);
        }

        console.log('hey')
        const { id, title, thumbnail } = req.body;
        const idUser = req.body.userData.user.id;

        //Se puede quitar el comprobar si se renderiza bien los botones en el front
        const existingBook = await Library.findOne({ userID: idUser, bookID: id });
        console.log('u ' + existingBook)

        if (existingBook === null) {
            addToLibrary(idUser, id, title, thumbnail)
        }



    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post("/removeBook", async (req, res) => {
    try {
        console.log('hey')
        const { id, title, thumbnail } = req.body;
        const idUser = req.body.userData.user.id;
        const existingBook = await Library.findOneAndRemove({ userID: idUser, bookID: id });
        console.log(existingBook)

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post("/isbooklibrary", async (req, res) => {
    console.log('heyyyy')
    const { id } = req.body;
    const idUser = req.body.user;
    const existingBook = await Library.findOne({ userID: idUser, bookID: id });
    console.log(existingBook)
    // if (existingBook === null) {
    //     return null
    // }
    res.json(existingBook);
});

module.exports = router;