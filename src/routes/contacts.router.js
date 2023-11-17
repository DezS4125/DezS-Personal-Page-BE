const express = require ('express')
const contactController = require ('../controllers/posts.controller');
const { methodNotAllowed } = require('../controllers/errors.controller');

const router = express.Router();

// router
//     .route('/')
//     .get(contactController.getContactsByFilter)
//     .post(contactController.createContact)
//     .delete(contactController.deleteAllContacts)
//     .all(methodNotAllowed);
router
    .route('/blog')
    .get(contactController.getAllPosts)
    .post(contactController.createNewPost)
    .all(methodNotAllowed);
router
    .route('/blog/:searchString')
    .post(contactController.searchPost)
    .all(methodNotAllowed);
router
    .route('/blog/t/:tag')
    .get(contactController.getPostsByTag)
    .all(methodNotAllowed);
router
    .route('/blog/upvote/:postId')
    .post(contactController.upvote)
    .all(methodNotAllowed);
router
    .route('/blog/downvote/:postId')
    .post(contactController.downvote)
    .all(methodNotAllowed);
router
    .route('/tagList')
    .get(contactController.getAllTags)
    .all(methodNotAllowed);
// router
//     .route('/:id')
//     .get(contactController.getContact)
//     .put(contactController.updateContact)
//     .delete(contactController.deleteContact)
//     .all(methodNotAllowed);

module.exports = router;