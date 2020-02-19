const router = require("express").Router();
const commentServices = require("../services/comment.services");

router
  .route("/:postid")
  .get(async (req, res, next) => {
    try {
      const result = await commentServices.findComments(req.params.postid);
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      req.body.postid = req.params.postid;
      const result = await commentServices.addComment(req.body);
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  });

module.exports = router;
