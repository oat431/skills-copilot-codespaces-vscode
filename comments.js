// Create web server
var express = require('express');
var router = express.Router();

// Require controller modules
var comment_controller = require('../controllers/commentController');

/// COMMENTS ROUTES ///

// GET request for creating a Comment. NOTE This must come before routes that display Comment (uses id).
router.get('/comment/create', comment_controller.comment_create_get);

// POST request for creating Comment.
router.post('/comment/create', comment_controller.comment_create_post);

// GET request to delete Comment.
router.get('/comment/:id/delete', comment_controller.comment_delete_get);

// POST request to delete Comment.
router.post('/comment/:id/delete', comment_controller.comment_delete_post);

// GET request to update Comment.
router.get('/comment/:id/update', comment_controller.comment_update_get);

// POST request to update Comment.
router.post('/comment/:id/update', comment_controller.comment_update_post);

// GET request for one Comment.
router.get('/comment/:id', comment_controller.comment_detail);

// GET request for list of all Comment items.
router.get('/comments', comment_controller.comment_list);

module.exports = router;