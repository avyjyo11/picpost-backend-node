const router = require("express").Router();
const userService = require("../services/user.services.js");

router
  .route("/")
  .get(async function(req, res, next) {
    const result = await userService.findUsers();
    res.json({
      msg: "all users list",
      users: result
    });
  })
  .post(function(req, res, next) {
    res.json({
      msg: "Post users list"
    });
  });

router
  .route("/:id")
  .get(async (req, res, next) => {
    const result = await userService.findById(req.params.id);
    res.json({
      msg: "one user list",
      user: result
    });
  })
  .put(async (req, res, next) => {
    const result = await userService.findByIdAndUpdate(req.params.id, req.body);
    res.json({
      result
    });
  });

router.route("/pop/:id").get(async (req, res, next) => {
  const result = await userService.findByIdAndPopulate(req.params.id);
  res.json({
    msg: "one user list",
    user: result
  });
})

module.exports = router;
