const { register, login } = require("../controllers/authControllers");
const { getblood, addblood, updateblood} = require("../controllers/bloodControllers");
const { checkUser } = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.post("/", checkUser); 
router.post("/register", register);
router.post("/login", login);
router.get("/blood", getblood);
router.post("/addblood", addblood);
router.post("/updateblood", updateblood);

module.exports = router;