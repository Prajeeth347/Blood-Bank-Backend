const { register, login } = require("../controllers/authControllers");
const { getblood } = require("../controllers/bloodControllers");
const { checkUser } = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.post("/blood", getblood);

module.exports = router;