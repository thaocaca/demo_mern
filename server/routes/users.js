const express = require("express");
const auth = require("../middlewares/auth");
const validate = require("../middlewares/validate");
const userValidation = require("../validations/users");
const userController = require("../controllers/users");

const router = express.Router();

router
  .route("/")
  .get(
    auth("manageUsers"),
    validate(userValidation.createUser),
    userController.createUser
  );
router
  .route("/:userId")
  .get(
    auth("getUsers"),
    validate(userValidation.getUser),
    userController.getUser
  )
  .patch(
    auth("manageUsers"),
    validate(userValidation.updateUser),
    userController.updateUser
  )
  .delete(
    auth("manageUsers"),
    validate(userValidation.deleteUser),
    userController.deleteUser
  );

module.exports = router;
