const controller = require("../controllers/userController.js");
const router = require("express").Router();

router.get("/users", controller.get);
router.post("/users", controller.store);
router.put("/users/:id", controller.update);
router.delete("/users/:id", controller.destroy);

module.exports = router;
