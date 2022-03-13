
const router = require('express').Router();

const {
    getAllUsers,
    getUsersById,
    createUsers,
    updateUsers,
    deleteUsers,
    addFriend,
    deleteFriend
  } = require('../../controllers/users-controller');

//get all
router.route('/').get(getAllUsers).post(createUsers);

// GET, PUT, DELETE a user 
router.route('/:id').get(getUsersById).put(updateUsers).delete(deleteUsers);

// POST, DELETE friend
router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend)


module.exports = router; 