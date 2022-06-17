const express = require('express');
const goalController = require('../controllers/goalController');
const router = express.Router();

// SAME ROUTES
// router.get('/', goalController.getGoals);
// router.post('/', goalController.setGoal);

// FOR SAME ROUTES
router.route('/').get(goalController.getGoals).post(goalController.setGoal);

// SAME ROUTES
// router.put('/:id', goalController.updateGoal);
// router.delete('/:id', goalController.deleteGoal);

// FOR SAME ROUTES
router.route('/:id').put(goalController.updateGoal).delete(goalController.deleteGoal);

module.exports = router;