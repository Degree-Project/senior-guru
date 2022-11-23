const express = require('express');
const { registerUser, loginUser, logoutUser, getUserDetails, updateProfile, getAllUsers, getSingleUser, isLoggedIn } = require('../controllers/userController');
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

const router = express.Router();

router.route('/test').get((req, res) => {
    res.send("I'm Working user route!!");
  })
router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').get(logoutUser);
router.route("/login-status").get(isLoggedIn);

// router.route('/me').get(isAuthenticatedUser, getUserDetails);
// router.route('/me/update').put(isAuthenticatedUser, updateProfile);

// router.route("/admin/users").get(isAuthenticatedUser, authorizeRoles("user", "admin"), getAllUsers);
// router.route("/admin/user/:id").get(isAuthenticatedUser, authorizeRoles("user", "admin"), getSingleUser);

router.route('/me').get(getUserDetails);
router.route('/me/update').put(isAuthenticatedUser, updateProfile);

router.route("/users").get(getAllUsers);
router.route("/user/:id").get(getSingleUser);


module.exports = router;