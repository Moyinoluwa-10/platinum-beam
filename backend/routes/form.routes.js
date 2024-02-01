const router = require("express").Router();
const { bookService, contactTeam } = require("../controllers/form.controllers");

router.post("/book", bookService);
router.post("/contact", contactTeam);

module.exports = router;
