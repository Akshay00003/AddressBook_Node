const { create, read } = require("../controller/AddressController");
const router = require("express").Router();
router.post("/create", create);
router.get('/address',read)

module.exports = router;
