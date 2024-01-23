const express = require('express');
const router = express.Router();
const authMidlleware = require('../middleware/authentication');
const { createReview, getReviews } = require('../controllers/reviews');
const {
  reviewBodyValidation,
} = require('../utils/validation/validation_values');

//post review
router.post('/create-review',authMidlleware, reviewBodyValidation, createReview);

//get all reviews
router.get('/get-reviews', getReviews);

module.exports = router;
