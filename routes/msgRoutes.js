const { addMessages, getAllMessages } = require("../controller/msgController");

const router = require("express").Router();

router.post("/addMessages", addMessages);
router.post("/getAllMessages", getAllMessages);

module.exports = router;
