const express = require("express");
const validateToken = require("../middleware/validateTokenHandler");
const isSingleLogin = require("../middleware/validateLoginHandler");
const incorrectStreak = require("../middleware/validatePostHandler");
const {
  getQuestions,
  getAllQuestions,
  getAllAnsweredQuestions,
  postAnswerQuestion,
  getAnsweringStatus,
} = require("../controllers/questionController");

const router = express.Router();

router.post(
  "/:id",
  validateToken,
  isSingleLogin,
  incorrectStreak,
  postAnswerQuestion
);
router.get("/:id", validateToken, isSingleLogin, getQuestions);
router.get("/all/:id", validateToken, isSingleLogin, getAllQuestions);
router.get(
  "/allanswered/:id",
  validateToken,
  isSingleLogin,
  getAllAnsweredQuestions
);
router.get(
  "/answeringStatus/:id",
  validateToken,
  isSingleLogin,
  getAnsweringStatus
);

module.exports = router;
