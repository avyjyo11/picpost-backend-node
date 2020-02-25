const router = require("express").Router();
const postService = require("../services/post.services");

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const result = await postService.findPost(req.body);
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      const result = await postService.addPost(req.body);
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  });

router
  .route("/:postid")
  .get(async (req, res, next) => {
    try {
      const result = await postService.findPostById(req.params.postid);
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  })a
  .put(async (req, res, next) => {
    const result = await postService.updatePost(req.params.postid, req.body);
    res.json({
      result
    });
  })
  .delete(async (req, res, next) => {
    try {
      const result = await postService.deletePost(req.params.postid);
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  });

router.route("/user/:userid").get(async (req, res, next) => {
  try {
    const result = await postService.findPost({ user: req.params.userid });
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
