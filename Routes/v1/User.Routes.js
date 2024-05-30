const express = require('express');
const userControllers = require('../../Controllers/User.Controllers');

const router = express.Router();

router.get('/random', userControllers.getARandomUser)
router.get('/all', userControllers.getAllUser)
router.post('/save', userControllers.saveAUser)
router.patch('/update/:id', userControllers.updateAUser)
router.delete('/delete/:id', userControllers.deleteAUser)
// router.route('/bulk-update').delete(userControllers.updateSomeUser)


module.exports = router;