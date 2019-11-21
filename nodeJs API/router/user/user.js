const express = require("express");
const router = express.Router();
const Users = require('./../../modal/User')
router.get('/current', (req, res) => {
    res.send({ massege: 'current user khatumal' })
})
router.post('/post', (req, res) => {
    const user = new Users(req.body)
    user.save()
        .then(() => {
            res.send({ massege: 'user succesfuly added' })
        }).catch((err) => {
            res.send({ err: err })
        })
})

module.exports = router;