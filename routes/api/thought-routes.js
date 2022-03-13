
const router = require('express').Router();

// thoughts controller
const { 
    getAllThoughts, 
    getThoughtsById, 
    createThoughts, 
    updateThoughts,
    deleteThoughts,
    addReaction,
    deleteReaction

} = require('../../controllers/thoughts-controller');

// get all
router.route('/').get(getAllThoughts);

// GET, PUT, DELETE
router.route('/:id').get(getThoughtsById).put(updateThoughts).delete(deleteThoughts); 

// create by userId 
router.route('/:userId').post(createThoughts);

// thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);

// delete reactionId 
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

// Export module router
module.exports = router;