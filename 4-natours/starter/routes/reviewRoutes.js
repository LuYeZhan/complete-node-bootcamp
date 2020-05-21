const express = require('express');
const reviewController = require('../controllers/reviewController');
const authController = require('../controllers/authController');

const router = express.Router({ mergeParams: true });

// POST /tour/d23523345234543/reviews
// GET /tour/d23523345234543/reviews

router
  .route('/')
  .get(reviewController.getallReviews)
  .post(
    authController.protect,
    authController.restrictTo('user'),
    reviewController.setTourUserIds,
    reviewController.createReview
  );

router
  .route('/:id')
  .patch(reviewController.updateReview)
  .delete(reviewController.deleteReview);

module.exports = router;
