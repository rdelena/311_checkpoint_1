const router = require("express").Router();
const controller = require("../controllers/users");

router.get("/", controller.listUsers);
router.get("/:id", controller.showUsers);
router.post("/", controller.createUsers);
router.put("/:id", controller.updateUsers);
router.delete("/:id", controller.deleteUsers);

module.exports = router;
