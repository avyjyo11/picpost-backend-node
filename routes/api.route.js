const router = require("express").Router();
const usersRoute = require("../controllers/users.route");
const authRoute = require("../controllers/auth.route");
const postsRoute = require("../controllers/post.route");
const commentsRoute = require("../controllers/comments.route");
const authenticate = require("../middlewares/authenticate");

router.use("/auth", authRoute);
router.use("/users", authenticate, usersRoute);
router.use("/posts", postsRoute);
router.use("/comments", authenticate, commentsRoute);

module.exports = router;
